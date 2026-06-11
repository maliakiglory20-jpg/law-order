'use client';
import { useState } from 'react';
import { User, Lock, Shield, Bell, Download } from 'lucide-react';
import { useAuthStore } from '@/store';

export default function ProfilePage() {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState('Profile');
  const [pwForm, setPwForm] = useState({ current: '', next: '', confirm: '' });

  const tabs = ['Profile', 'Security', 'Notifications'];

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Account Settings</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your profile and security settings</p>
      </div>

      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-amber-400 text-amber-600 dark:text-amber-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Profile' && (
        <div className="space-y-5">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                {user?.name?.[0] ?? 'U'}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{user?.name ?? 'User'}</h2>
                <p className="text-sm text-slate-500">{user?.email}</p>
                <span className="mt-1 inline-block text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-0.5 rounded-full">{user?.role?.replace('_', ' ')}</span>
              </div>
            </div>
            <div className="space-y-4">
              {[{ label: 'Full Name', value: user?.name ?? '', type: 'text' }, { label: 'Email Address', value: user?.email ?? '', type: 'email' }, { label: 'Organization', value: user?.organization ?? '', type: 'text' }, { label: 'Job Title', value: user?.jobTitle ?? '', type: 'text' }].map(({ label, value, type }) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{label}</label>
                  <input type={type} defaultValue={value} className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 dark:text-white" />
                </div>
              ))}
              <button className="px-4 py-2 bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:bg-amber-500 transition-colors">Save Changes</button>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Download className="h-4 w-4" /> Data Export</h3>
            <p className="text-sm text-slate-500 mb-4">Download all your data including notes, bookmarks, and quiz history.</p>
            <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Download My Data</button>
          </div>
        </div>
      )}

      {activeTab === 'Security' && (
        <div className="space-y-5">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Lock className="h-4 w-4" /> Change Password</h3>
            <div className="space-y-4">
              {[{ label: 'Current Password', key: 'current' }, { label: 'New Password', key: 'next' }, { label: 'Confirm New Password', key: 'confirm' }].map(({ label, key }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{label}</label>
                  <input type="password" value={(pwForm as any)[key]} onChange={(e) => setPwForm((p) => ({ ...p, [key]: e.target.value }))}
                    className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 dark:text-white" />
                </div>
              ))}
              <button className="px-4 py-2 bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:bg-amber-500 transition-colors">Update Password</button>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2"><Shield className="h-4 w-4" /> Two-Factor Authentication</h3>
            <p className="text-sm text-slate-500 mb-4">{user?.mfaEnabled ? 'MFA is enabled on your account.' : 'Add an extra layer of security to your account.'}</p>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 ${user?.mfaEnabled ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}`}>
              {user?.mfaEnabled ? '✓ MFA Enabled' : '⚠ MFA Disabled'}
            </div>
            <br />
            <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              {user?.mfaEnabled ? 'Disable MFA' : 'Enable MFA'}
            </button>
          </div>
        </div>
      )}

      {activeTab === 'Notifications' && (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Bell className="h-4 w-4" /> Notification Preferences</h3>
          <div className="space-y-4">
            {['New case added in my study area', 'Quiz results and recommendations', 'Weekly learning summary', 'System announcements'].map((pref) => (
              <label key={pref} className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-slate-700 dark:text-slate-300">{pref}</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:bg-amber-400 transition-colors" />
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5" />
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
