'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store';
import { hasRole } from '@/lib/auth';

export function useAuth() {
  const { user, isAuthenticated, isLoading, login, register, logout, initializeAuth } = useAuthStore();

  return {
    user,
    isAuthenticated,
    isLoading,
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
  const { isAuthenticated, isLoading, initializeAuth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    initializeAuth().then(() => {
      if (!isAuthenticated && !isLoading) {
        router.push(redirectTo);
      }
    });
  }, [isAuthenticated, isLoading, router, redirectTo, initializeAuth]);

  return { isAuthenticated, isLoading };
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
