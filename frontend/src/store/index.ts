import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User, DashboardStats, UserProgress } from '@/types';
import { authApi } from '@/lib/api';
import { storeTokens, clearTokens } from '@/lib/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
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
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) return;

        try {
          const payload = JSON.parse(atob(accessToken.split('.')[1]));
          if (Date.now() >= payload.exp * 1000) {
            clearTokens();
            set({ user: null, isAuthenticated: false });
            return;
          }

          const response = await authApi.getMe();
          set({ user: response.data, isAuthenticated: true });
        } catch {
          clearTokens();
          set({ user: null, isAuthenticated: false });
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
