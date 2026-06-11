import React from 'react';
import Link from 'next/link';
import { Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Scale className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium">LitiLearn</span>
          </div>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-700 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-gray-700 transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Litigation Learning Platform</p>
        </div>
      </div>
    </footer>
  );
}
