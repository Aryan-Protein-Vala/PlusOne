import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, CheckCircle2, Eye, Keyboard, Volume2 } from "lucide-react";

export const metadata: { title: string; description: string } = { title: "Accessibility Statement", description: "Accessibility statement for PlusOne." };

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Accessibility</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Accessibility Statement</h1>
          <p className="text-white/30">We are committed to making PlusOne accessible to everyone.</p>
        </div>
        <div className="space-y-5">
          <div className="rounded-2xl border border-plus-green-500/15 bg-plus-green-500/5 p-5">
            <h2 className="text-white font-semibold text-base mb-3">Our Commitment</h2>
            <p className="text-white/40 text-sm leading-relaxed">PlusOne Technologies Pvt. Ltd. is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h2 className="text-white font-semibold text-base mb-3">Accessibility Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Eye, title: "Screen Reader Support", desc: "Optimised for screen readers including NVDA, JAWS, and VoiceOver." },
                { icon: Keyboard, title: "Keyboard Navigation", desc: "All functionality accessible via keyboard shortcuts." },
                { icon: Volume2, title: "Text Alternatives", desc: "All images include alt text descriptions." },
                { icon: CheckCircle2, title: "Colour Contrast", desc: "Text meets WCAG AA contrast requirements." },
                { icon: Keyboard, title: "Focus Indicators", desc: "Clear focus states for all interactive elements." },
                { icon: CheckCircle2, title: "Responsive Design", desc: "Works on all screen sizes and orientations." },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-plus-green-500/10 flex items-center justify-center shrink-0"><CheckCircle2 size={12} className="text-plus-green-300"/></div>
                  <div><div className="text-white text-xs font-medium">{feature.title}</div><div className="text-white/30 text-xs">{feature.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h2 className="text-white font-semibold text-base mb-2">Contact Us</h2>
            <p className="text-white/40 text-sm">If you encounter accessibility barriers on PlusOne, please let us know at <a href="mailto:accessibility@plusone.app" className="text-plus-purple-300 hover:text-plus-purple-200 underline">accessibility@plusone.app</a>. We will respond within 5 business days.</p>
          </div>
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. · WCAG 2.1 AA Target</p></div>
      </div>
    </div>
  );
}
