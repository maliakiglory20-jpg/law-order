'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen, Briefcase, Brain, BarChart3, Bookmark, Search, LayoutDashboard, X, BookA, Scale,
} from 'lucide-react';
import { useAuthStore, useUIStore } from '@/store';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/library', label: 'Library', icon: BookOpen },
  { href: '/dictionary', label: 'Legal Dictionary', icon: BookA },
  { href: '/statutes', label: 'Statute Library', icon: Scale },
  { href: '/cases', label: 'Cases', icon: Briefcase },
  { href: '/quizzes', label: 'Quizzes', icon: Brain },
  { href: '/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/cases?bookmarked=true', label: 'Bookmarks', icon: Bookmark },
  { href: '/search', label: 'Search', icon: Search },
];

const getRoleBadgeVariant = (role: string) => {
  switch (role) {
    case 'SUPER_ADMIN': return 'default';
    case 'ADMIN': return 'destructive';
    case 'REVIEWER': return 'info';
    default: return 'secondary';
  }
};

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuthStore();
  const { sidebarOpen, setSidebarOpen } = useUIStore();

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={cn(
          'fixed left-0 top-16 bottom-0 z-40 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          'lg:translate-x-0'
        )}
      >
        {/* Mobile close */}
        <button
          className="lg:hidden absolute top-3 right-3 p-1 rounded-md text-gray-400 hover:text-gray-600"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="h-4 w-4" />
        </button>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href.split('?')[0]));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                  isActive
                    ? 'bg-[#0f172a] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                )}
              >
                <item.icon className={cn('h-4 w-4 shrink-0', isActive ? 'text-amber-400' : 'text-gray-400')} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User role at bottom */}
        {user && (
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#0f172a] flex items-center justify-center text-white text-xs font-semibold shrink-0">
                {user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                <Badge
                  variant={getRoleBadgeVariant(user.role) as any}
                  className="text-xs mt-0.5"
                >
                  {user.role.replace('_', ' ')}
                </Badge>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
