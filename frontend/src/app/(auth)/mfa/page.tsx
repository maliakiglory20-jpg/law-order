'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Scale, Loader2, Shield } from 'lucide-react';

export default function MFAPage() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white">
            <Scale className="h-10 w-10 text-gold-400" />
            <span className="text-2xl font-bold">LitigationPro</span>
          </Link>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="inline-flex p-4 bg-navy-100 rounded-full mb-4">
            <Shield className="h-8 w-8 text-navy-700" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Two-Factor Authentication</h1>
          <p className="text-gray-500 mb-6">Enter the 6-digit code from your authenticator app</p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
            className="w-full text-center text-3xl font-mono tracking-widest border border-gray-300 rounded-lg px-4 py-4 outline-none focus:ring-2 focus:ring-navy-500 mb-6"
            placeholder="000000"
            maxLength={6}
          />
          <button
            disabled={code.length !== 6 || loading}
            className="w-full bg-navy-900 text-white py-3 rounded-lg font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="h-5 w-5 animate-spin" />}
            Verify Code
          </button>
          <Link href="/login" className="block mt-4 text-sm text-gray-500 hover:text-gray-700">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
