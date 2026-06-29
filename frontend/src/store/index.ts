import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User, DashboardStats, UserProgress } from '@/types';
import { authApi } from '@/lib/api';
import { storeTokens, clearTokens, tryDemoLogin } from '@/lib/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  /** True once initializeAuth has finished resolving the current session. */
  isInitialized: boolean;
  login: (email: string, password: string, mfaToken?: string) => Promise<any>;
  register: (data: { email: string; password: string; name: string; organization?: string; jobTitle?: string }) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: Partial<User>) => void;
  initializeAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      isInitialized: false,

      login: async (email, password, mfaToken) => {
        set({ isLoading: true });
        try {
          const response = await authApi.login({ email, password, mfaToken });
          const data = response.data;

          if (data.requiresMfa) {
            set({ isLoading: false });
            return data;
          }

          storeTokens(data);
          set({ user: data.user, isAuthenticated: true, isLoading: false });
          return data;
        } catch (error) {
          // Backend unreachable or rejected: fall back to demo-mode accounts
          const demo = tryDemoLogin(email, password);
          if (demo) {
            storeTokens(demo);
            set({ user: demo.user, isAuthenticated: true, isLoading: false });
            return demo;
          }
          set({ isLoading: false });
          throw error;
        }
      },

      register: async (data) => {
        set({ isLoading: true });
        try {
          const response = await authApi.register(data);
          const tokens = response.data;
          storeTokens(tokens);
          set({ user: tokens.user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: async () => {
        try {
          const refreshToken = localStorage.getItem('refreshToken');
          await authApi.logout(refreshToken || undefined);
        } catch {
          // ignore logout errors
        }
        clearTokens();
        set({ user: null, isAuthenticated: false });
      },

      updateUser: (updatedUser) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updatedUser } : null,
        }));
      },

      initializeAuth: async () => {
        // Always resolve to isInitialized:true so route guards know auth is settled.
        const finish = (extra: Partial<AuthState> = {}) =>
          set({ ...extra, isLoading: false, isInitialized: true } as Partial<AuthState>);

        if (typeof window === 'undefined') {
          finish();
          return;
        }

        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          finish({ user: null, isAuthenticated: false });
          return;
        }

        set({ isLoading: true });
        try {
          const payload = JSON.parse(atob(accessToken.split('.')[1]));
          if (Date.now() >= payload.exp * 1000) {
            clearTokens();
            finish({ user: null, isAuthenticated: false });
            return;
          }

          // Demo-mode tokens are validated locally, not against the backend
          if (accessToken.endsWith('.demo')) {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
              finish({ user: JSON.parse(storedUser), isAuthenticated: true });
              return;
            }
          }

          const response = await authApi.getMe();
          finish({ user: response.data, isAuthenticated: true });
        } catch {
          clearTokens();
          finish({ user: null, isAuthenticated: false });
        }
      },
    }),
    {
      name: 'litigation-auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    },
  ),
);

// UI Store
interface UIState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarOpen: true,
      theme: 'light',
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'litigation-ui',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
