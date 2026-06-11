'use client';
import { useState } from 'react';
import { UserPlus, Search, MoreVertical, Shield, CheckCircle, XCircle, Download } from 'lucide-react';

const USERS = [
  { id: '1', name: 'Sarah Chen', email: 'sarah.chen@firm.com', role: 'REVIEWER', isActive: true, lastLogin: '2 hours ago', createdAt: 'Jun 1, 2026' },
  { id: '2', name: 'Marcus Thompson', email: 'm.thompson@lawschool.edu', role: 'STUDENT', isActive: true, lastLogin: '5 hours ago', createdAt: 'Jun 2, 2026' },
  { id: '3', name: 'Elena Rodriguez', email: 'e.rod@legalops.com', role: 'ADMIN', isActive: true, lastLogin: '1 day ago', createdAt: 'May 15, 2026' },
  { id: '4', name: 'James Park', email: 'j.park@biglaw.com', role: 'REVIEWER', isActive: false, lastLogin: '2 weeks ago', createdAt: 'Apr 10, 2026' },
  { id: '5', name: 'Priya Sharma', email: 'p.sharma@university.edu', role: 'STUDENT', isActive: true, lastLogin: '3 hours ago', createdAt: 'Jun 4, 2026' },
];

const ROLES = ['SUPER_ADMIN', 'ADMIN', 'REVIEWER', 'STUDENT'];
const roleColor: Record<string, string> = { SUPER_ADMIN: 'bg-red-900 text-red-300', ADMIN: 'bg-orange-900 text-orange-300', REVIEWER: 'bg-blue-900 text-blue-300', STUDENT: 'bg-slate-700 text-slate-300' };

export default function AdminUsersPage() {
  const [search, setSearch] = useState('');
  const [showInvite, setShowInvite] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('STUDENT');

  const filtered = USERS.filter((u) => !search || u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-white">User Management</h1><p className="text-slate-400 mt-1">Manage platform users and roles</p></div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 border border-slate-600 text-slate-300 rounded-lg text-sm hover:bg-slate-800 transition-colors"><Download className="h-4 w-4" />Export CSV</button>
          <button onClick={() => setShowInvite(true)} className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-slate-900 rounded-lg text-sm font-medium hover:bg-amber-300 transition-colors"><UserPlus className="h-4 w-4" />Invite User</button>
        </div>
      </div>

      {showInvite && (
        <div className="bg-slate-800 border border-amber-400 rounded-xl p-5">
          <h3 className="font-semibold text-white mb-4">Invite New User</h3>
          <div className="flex gap-3">
            <input type="email" placeholder="Email address" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)}
              className="flex-1 px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400" />
            <select value={inviteRole} onChange={(e) => setInviteRole(e.target.value)}
              className="px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400">
              {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <button className="px-4 py-2 bg-amber-400 text-slate-900 rounded-lg text-sm font-medium">Send Invite</button>
            <button onClick={() => setShowInvite(false)} className="px-4 py-2 border border-slate-600 text-slate-400 rounded-lg text-sm">Cancel</button>
          </div>
        </div>
      )}

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm pl-9 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400" />
      </div>

      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-900 border-b border-slate-700">
            <tr className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
              <th className="px-5 py-3">User</th><th className="px-5 py-3">Role</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Last Login</th><th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {filtered.map((u) => (
              <tr key={u.id} className="hover:bg-slate-750">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{u.name[0]}</div>
                    <div><p className="text-sm font-medium text-white">{u.name}</p><p className="text-xs text-slate-400">{u.email}</p></div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <select defaultValue={u.role} className="text-xs px-2 py-1 rounded-full bg-transparent border border-slate-600 text-slate-300 focus:outline-none focus:border-amber-400">
                    {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </td>
                <td className="px-5 py-4">
                  <div className={`inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full ${u.isActive ? 'bg-emerald-900 text-emerald-300' : 'bg-red-900 text-red-300'}`}>
                    {u.isActive ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                    {u.isActive ? 'Active' : 'Inactive'}
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-slate-400">{u.lastLogin}</td>
                <td className="px-5 py-4">
                  <button className="p-1.5 text-slate-400 hover:text-white transition-colors"><MoreVertical className="h-4 w-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
