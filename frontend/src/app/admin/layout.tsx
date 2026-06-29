'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Users, BookOpen, Scale, HelpCircle, BarChart3, Settings, ChevronRight } from 'lucide-react';
import { useAuthStore } from '@/store';

const adminNav = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/users', label: 'User Management', icon: Users },
  { href: '/admin/content', label: 'Content', icon: BookOpen },
  { href: '/admin/cases', label: 'Cases', icon: Scale },
  { href: '/admin/quizzes', label: 'Quizzes', icon: HelpCircle },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, isInitialized, initializeAuth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  useEffect(() => {
    // Wait until auth is initialized before deciding whether to redirect.
    if (!isInitialized) return;
    if (!isAuthenticated || !['SUPER_ADMIN', 'ADMIN'].includes(user?.role ?? '')) {
      router.replace('/dashboard');
    }
  }, [isInitialized, isAuthenticated, user, router]);

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="h-10 w-10 rounded-full border-4 border-slate-700 border-t-amber-400 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated || !['SUPER_ADMIN', 'ADMIN'].includes(user?.role ?? '')) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Admin Sidebar */}
      <div className="w-64 flex-shrink-0 bg-slate-950 border-r border-slate-800 flex flex-col">
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center">
              <Scale className="h-4 w-4 text-slate-900" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">LitiLearn</p>
              <p className="text-xs text-slate-400">Admin Panel</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {adminNav.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors text-sm">
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-slate-800">
          <Link href="/dashboard" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors">
            ← Back to Dashboard
          </Link>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 overflow-auto bg-slate-900 p-8">{children}</main>
    </div>
  );
}
