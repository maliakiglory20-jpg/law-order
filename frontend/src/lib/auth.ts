import { User, AuthTokens } from '@/types';

export function getStoredTokens(): { accessToken: string | null; refreshToken: string | null } {
  if (typeof window === 'undefined') return { accessToken: null, refreshToken: null };
  return {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
  };
}

export function storeTokens(tokens: AuthTokens): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('accessToken', tokens.accessToken);
  localStorage.setItem('refreshToken', tokens.refreshToken);
  localStorage.setItem('user', JSON.stringify(tokens.user));
}

export function clearTokens(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
}

export function getStoredUser(): User | null {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  try {
    return JSON.parse(userStr) as User;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  const { accessToken } = getStoredTokens();
  if (!accessToken) return false;

  try {
    const payload = JSON.parse(atob(accessToken.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  } catch {
    return false;
  }
}

// Demo-mode accounts: used as a fallback when the backend API is unreachable,
// so the app remains fully browsable without PostgreSQL/Redis running.
const DEMO_ACCOUNTS: Array<{ email: string; password: string; user: User }> = [
  {
    email: 'admin@litigationplatform.com',
    password: 'Admin123!@#',
    user: { id: 'demo-admin', email: 'admin@litigationplatform.com', name: 'Demo Admin', role: 'SUPER_ADMIN', isActive: true, mfaEnabled: false, organization: 'LitigationPro', jobTitle: 'Administrator' },
  },
  {
    email: 'student@example.com',
    password: 'Student123!',
    user: { id: 'demo-student', email: 'student@example.com', name: 'Demo Student', role: 'STUDENT', isActive: true, mfaEnabled: false, organization: 'Law School', jobTitle: 'Student' },
  },
];

function makeDemoJwt(user: User): string {
  // Unsigned demo token with the same payload shape as the real backend JWT
  const header = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({ sub: user.id, email: user.email, role: user.role, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 }));
  return `${header}.${payload}.demo`;
}

export function tryDemoLogin(email: string, password: string): AuthTokens | null {
  const account = DEMO_ACCOUNTS.find((a) => a.email === email.toLowerCase().trim() && a.password === password);
  if (!account) return null;
  const token = makeDemoJwt(account.user);
  return { accessToken: token, refreshToken: token, user: account.user };
}

export function hasRole(userRole: string, requiredRole: string): boolean {
  const hierarchy: Record<string, number> = {
    SUPER_ADMIN: 4,
    ADMIN: 3,
    REVIEWER: 2,
    STUDENT: 1,
  };
  return (hierarchy[userRole] || 0) >= (hierarchy[requiredRole] || 0);
}
