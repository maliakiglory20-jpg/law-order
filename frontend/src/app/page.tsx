'use client';
import Link from 'next/link';
import { Scale, BookOpen, Brain, TrendingUp, Shield, Award, ArrowRight, Search, Users, FileText } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: '35+ Litigation Types',
    description: 'Comprehensive coverage from civil rights to international arbitration, each with detailed analysis and real cases.',
  },
  {
    icon: FileText,
    title: '175+ Landmark Cases',
    description: 'Study real landmark cases with full case documents, judicial reasoning, and procedural history.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Claude AI provides case summaries, ruling explanations, and custom quiz generation tailored to your learning level.',
  },
  {
    icon: TrendingUp,
    title: 'Progress Analytics',
    description: 'Track your progress with detailed analytics, score trends, and personalized study recommendations.',
  },
  {
    icon: Shield,
    title: 'Role-Based Access',
    description: 'Designed for law students, practicing attorneys, and legal educators with role-appropriate content.',
  },
  {
    icon: Award,
    title: 'Certification Quizzes',
    description: '500+ questions across multiple quiz types including scenario-based and evidence identification.',
  },
];

const litigationCategories = [
  { name: 'Civil Rights', icon: '⚖️', cases: 8, color: 'from-blue-600 to-blue-800' },
  { name: 'Commercial', icon: '💼', cases: 12, color: 'from-green-600 to-green-800' },
  { name: 'Intellectual Property', icon: '💡', cases: 10, color: 'from-purple-600 to-purple-800' },
  { name: 'Employment', icon: '👥', cases: 9, color: 'from-orange-600 to-orange-800' },
  { name: 'Criminal Defense', icon: '🛡️', cases: 11, color: 'from-red-700 to-red-900' },
  { name: 'Constitutional', icon: '📜', cases: 7, color: 'from-indigo-600 to-indigo-800' },
];

const stats = [
  { label: 'Litigation Types', value: '35+' },
  { label: 'Landmark Cases', value: '175+' },
  { label: 'Quiz Questions', value: '500+' },
  { label: 'Active Learners', value: '10,000+' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-navy-900/95 backdrop-blur-sm border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-gold-400" />
              <span className="text-white font-bold text-xl">LitigationPro</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors text-sm">Features</Link>
              <Link href="#library" className="text-gray-300 hover:text-white transition-colors text-sm">Library</Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm">Pricing</Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="bg-gold-500 hover:bg-gold-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 rounded-full px-4 py-1.5 mb-6">
              <Scale className="h-4 w-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">The Professional Legal Education Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Master Litigation.
              <span className="block text-gold-400">Study Real Cases.</span>
              Excel in Law.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              The most comprehensive litigation learning platform with 35+ practice areas, 175+ landmark cases,
              AI-powered analysis, and interactive assessments designed for legal professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50"
              >
                Start Learning Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/20 backdrop-blur-sm"
              >
                <Search className="h-5 w-5" />
                Explore Library
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-4xl font-bold text-gold-400 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Everything You Need to Master Litigation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for law students, associates, and senior attorneys who want to deepen their litigation expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex p-3 bg-navy-100 rounded-xl mb-4">
                  <feature.icon className="h-7 w-7 text-navy-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Litigation Library Preview */}
      <section id="library" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Comprehensive Litigation Library
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From foundational tort law to complex international arbitration — every major practice area covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {litigationCategories.map((category) => (
              <div
                key={category.name}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                <p className="text-white/70 text-sm">{category.cases} landmark cases</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/library"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              View All 35 Practice Areas
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Excel in Litigation?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of legal professionals mastering litigation through real landmark cases and AI-powered learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Start Learning Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-white/20"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-gold-400" />
              <span className="text-white font-semibold">LitigationPro</span>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <p className="text-sm">© 2024 Litigation Learning Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
