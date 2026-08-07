import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, BookOpen, HelpCircle, Star, DollarSign } from "lucide-react";

export const metadata: { title: string; description: string } = { title: "Host Resources", description: "Resources for PlusOne hosts." };

export default function HostResourcesPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Host Resources</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Host Resources</h1>
          <p className="text-white/30">Everything you need to be a successful PlusOne host.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Hosting Best Practices", desc: "Tips for creating great experiences and getting 5-star reviews.", icon: BookOpen, color: "text-plus-purple-300", bg: "bg-plus-purple-500/10", href: "/host-resources/best-practices" },
            { title: "Safety Guidelines", desc: "Keep yourself and your guests safe. Read our host safety guide.", icon: Shield, color: "text-plus-green-300", bg: "bg-plus-green-500/10", href: "/safety" },
            { title: "Profile Optimization", desc: "Create a compelling profile that attracts bookings.", icon: Star, color: "text-amber-300", bg: "bg-amber-500/10", href: "/host-resources/profile-tips" },
            { title: "Managing Bookings", desc: "How to accept, confirm, and manage your bookings.", icon: HelpCircle, color: "text-plus-blue-300", bg: "bg-plus-blue-500/10", href: "/host-resources/managing-bookings" },
            { title: "Getting Great Reviews", desc: "What leads to 5-star reviews and how to earn them.", icon: Star, color: "text-amber-300", bg: "bg-amber-500/10", href: "/host-resources/reviews" },
            { title: "Payout Guide", desc: "How earnings work, how to withdraw, and tax info.", icon: DollarSign, color: "text-plus-green-300", bg: "bg-plus-green-500/10", href: "/wallet" },
          ].map((item) => (
            <a key={item.title} href={item.href} className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all group">
              <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}><item.icon size={16} className={item.color}/></div>
              <div>
                <h2 className="text-white text-sm font-medium mb-1 group-hover:text-plus-purple-200 transition-colors">{item.title}</h2>
                <p className="text-white/30 text-xs leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-plus-purple-300/40 group-hover:text-plus-purple-300 transition-colors ml-auto shrink-0">→</span>
            </a>
          ))}
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd.</p></div>
      </div>
    </div>
  );
}
