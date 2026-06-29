'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store';
import { hasRole } from '@/lib/auth';

export function useAuth() {
  const { user, isAuthenticated, isLoading, isInitialized, login, register, logout, initializeAuth } = useAuthStore();

  return {
    user,
    isAuthenticated,
    isLoading,
    isInitialized,
    login,
    register,
    logout,
    initializeAuth,
    isAdmin: user ? hasRole(user.role, 'ADMIN') : false,
    isSuperAdmin: user ? user.role === 'SUPER_ADMIN' : false,
    isReviewer: user ? hasRole(user.role, 'REVIEWER') : false,
  };
}

export function useRequireAuth(redirectTo = '/login') {
  const { isAuthenticated, isInitialized, initializeAuth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  useEffect(() => {
    // Redirect only after auth has settled (avoids a stale-closure false redirect).
    if (isInitialized && !isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isInitialized, isAuthenticated, redirectTo, router]);

  return { isAuthenticated, isInitialized };
}

export function useRequireRole(requiredRole: string, redirectTo = '/dashboard') {
  const { user, isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && user && !hasRole(user.role, requiredRole)) {
      router.push(redirectTo);
    }
  }, [user, isAuthenticated, requiredRole, redirectTo, router]);
}
