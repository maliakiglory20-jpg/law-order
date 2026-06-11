'use client';
import { Users, BookOpen, Scale, HelpCircle, TrendingUp, UserPlus } from 'lucide-react';
import Link from 'next/link';

const STATS = [
  { label: 'Total Users', value: '1,284', icon: Users, change: '+12 this week', color: 'text-blue-400' },
  { label: 'Active Users (30d)', value: '847', icon: TrendingUp, change: '66% of total', color: 'text-emerald-400' },
  { label: 'Total Cases', value: '175', icon: Scale, change: '35 categories', color: 'text-amber-400' },
  { label: 'Published Quizzes', value: '52', icon: HelpCircle, change: '18 AI-generated', color: 'text-purple-400' },
];

const RECENT_USERS = [
  { name: 'Sarah Chen', email: 'sarah.chen@firm.com', role: 'REVIEWER', joinedAt: '2 hours ago' },
  { name: 'Marcus Thompson', email: 'm.thompson@lawschool.edu', role: 'STUDENT', joinedAt: '5 hours ago' },
  { name: 'Elena Rodriguez', email: 'e.rod@legalops.com', role: 'ADMIN', joinedAt: '1 day ago' },
  { name: 'James Park', email: 'j.park@biglaw.com', role: 'REVIEWER', joinedAt: '2 days ago' },
];

const QUICK_ACTIONS = [
  { label: 'Add Case', icon: Scale, href: '/admin/cases', color: 'bg-blue-500' },
  { label: 'Add User', icon: UserPlus, href: '/admin/users', color: 'bg-emerald-500' },
  { label: 'Generate Quiz', icon: HelpCircle, href: '/admin/quizzes', color: 'bg-purple-500' },
  { label: 'Manage Content', icon: BookOpen, href: '/admin/content', color: 'bg-amber-500' },
];

const roleColor: Record<string, string> = {
  SUPER_ADMIN: 'bg-red-900 text-red-300', ADMIN: 'bg-orange-900 text-orange-300',
  REVIEWER: 'bg-blue-900 text-blue-300', STUDENT: 'bg-slate-700 text-slate-300',
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
        <p className="text-slate-400 mt-1">Platform overview and management</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-slate-800 rounded-xl border border-slate-700 p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-slate-400">{s.label}</p>
              <s.icon className={`h-5 w-5 ${s.color}`} />
            </div>
            <p className="text-3xl font-bold text-white">{s.value}</p>
            <p className="text-xs text-slate-500 mt-1">{s.change}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {QUICK_ACTIONS.map((a) => (
            <Link key={a.label} href={a.href} className="bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-slate-500 transition-colors flex items-center gap-3">
              <div className={`${a.color} p-2 rounded-lg`}><a.icon className="h-4 w-4 text-white" /></div>
              <span className="text-sm font-medium text-slate-200">{a.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Registrations */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-white">Recent Registrations</h2>
          <Link href="/admin/users" className="text-sm text-amber-400 hover:text-amber-300">View all →</Link>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider border-b border-slate-700 pb-2">
              <th className="pb-2">User</th><th className="pb-2">Role</th><th className="pb-2">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {RECENT_USERS.map((u) => (
              <tr key={u.email} className="py-3">
                <td className="py-3">
                  <p className="text-sm font-medium text-white">{u.name}</p>
                  <p className="text-xs text-slate-400">{u.email}</p>
                </td>
                <td className="py-3"><span className={`text-xs px-2 py-1 rounded-full font-medium ${roleColor[u.role]}`}>{u.role}</span></td>
                <td className="py-3 text-sm text-slate-400">{u.joinedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
