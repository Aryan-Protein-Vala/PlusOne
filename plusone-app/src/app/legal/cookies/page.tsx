import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, Cookie } from "lucide-react";

export const metadata: Metadata = { title: "Cookie Policy", description: "Cookie Policy for PlusOne." };

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Cookie Policy</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-gold-500/10 border border-plus-gold-500/20 rounded-full text-plus-gold-300 text-xs font-medium mb-4"><Cookie size={11}/>Cookie Policy</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Cookie Policy</h1>
          <p className="text-white/30">Last Updated: October 1, 2024 · Version 1.0</p>
        </div>
        <div className="prose prose-invert prose-sm max-w-none space-y-4">
          <p className="text-white/40 text-sm leading-relaxed">This Cookie Policy explains how PlusOne Technologies Pvt. Ltd. uses cookies and similar technologies on our Platform at plusone.app and related services.</p>
          <div className="bg-plus-purple-500/5 border border-plus-purple-500/10 rounded-xl p-4"><p className="text-white/50 text-sm"><strong className="text-white/70">What Are Cookies?</strong> Cookies are small text files stored on your device when you visit a website. They enable core functionality, remember preferences, and help us analyze usage patterns.</p></div>
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4"><h2 className="text-white font-semibold text-sm mb-2">Essential Cookies (Required)</h2><p className="text-white/40 text-sm mb-2">These cookies are necessary for the Platform to function. They cannot be disabled.</p><ul className="space-y-1.5 text-white/40 text-sm list-disc pl-5"><li>Session management and authentication</li><li>Security tokens and CSRF protection</li><li>Shopping cart and booking processing</li><li>Cookie consent preferences</li></ul></div>
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4"><h2 className="text-white font-semibold text-sm mb-2">Analytics Cookies</h2><p className="text-white/40 text-sm mb-2">We use analytics cookies to understand how users interact with the Platform and improve our services.</p><ul className="space-y-1.5 text-white/40 text-sm list-disc pl-5"><li>Google Analytics (anonymized IP)</li><li>Page views and session duration</li><li>Feature usage and error tracking</li><li>Performance metrics</li></ul></div>
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4"><h2 className="text-white font-semibold text-sm mb-2">Personalization Cookies</h2><p className="text-white/40 text-sm">These cookies remember your preferences for a personalized experience: language, city, notification settings.</p></div>
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4"><h2 className="text-white font-semibold text-sm mb-2">Managing Cookies</h2><p className="text-white/40 text-sm mb-2">You can control cookies through your browser settings. Disabling essential cookies may affect Platform functionality. For questions, contact <a href="mailto:cookies@plusone.app" className="text-plus-purple-300 hover:text-plus-purple-200 underline">cookies@plusone.app</a>.</p></div>
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. All rights reserved.</p></div>
      </div>
    </div>
  );
}
