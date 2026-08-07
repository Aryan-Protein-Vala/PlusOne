import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, DollarSign, Star, Award } from "lucide-react";

export const metadata: Metadata = { title: "Host Pricing Guide", description: "Pricing guide for PlusOne hosts." };

export default function HostPricingPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Host Pricing</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Host Pricing Guide</h1>
          <p className="text-white/30">Set your own rates. Here's how pricing and fees work for hosts on PlusOne.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {[
            { title: "Set Your Own Rate", desc: "You choose your hourly rate. We enforce a minimum of ₹300/hour. Most hosts charge between ₹300 and ₹1,500 per hour depending on their activities and city.", icon: DollarSign, color: "text-plus-green-300", bg: "bg-plus-green-500/10" },
            { title: "Platform Commission", desc: "We charge 15% commission on each completed booking. This covers platform operations, safety features, and customer support.", icon: Star, color: "text-plus-purple-300", bg: "bg-plus-purple-500/10" },
            { title: "Platform Fee", desc: "An additional 2–5% platform fee is applied to cover payment processing costs. This is passed through at cost — we don't profit from it.", icon: Award, color: "text-amber-300", bg: "bg-amber-500/10" },
            { title: "Payout Timing", desc: "Earnings are held in escrow until the activity is completed. After completion and our verification, funds are released within 24 hours.", icon: DollarSign, color: "text-plus-blue-300", bg: "bg-plus-blue-500/10" },
          ].map((item) => (
            <div key={item.title} className={`rounded-2xl border p-5 ${item.bg} border-current/20`}>
              <div className="flex items-center gap-2 mb-3"><item.icon size={14} className={item.color}/><h2 className="text-white font-semibold text-sm">{item.title}</h2></div>
              <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <h2 className="text-white font-semibold text-sm mb-3">Example Calculation</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><div className="text-white/40 text-xs mb-1">Your hourly rate</div><div className="text-white font-semibold">₹600 / hour</div></div>
            <div><div className="text-white/40 text-xs mb-1">2-hour booking</div><div className="text-white font-semibold">₹1,200</div></div>
            <div className="border-t border-white/5 pt-2"><div className="text-white/40 text-xs mb-1">Platform commission (15%)</div><div className="text-white/50">-₹180</div></div>
            <div className="border-t border-white/5 pt-2"><div className="text-white/40 text-xs mb-1">Platform fee (3%)</div><div className="text-white/50">-₹36</div></div>
            <div className="border-t border-white/5 pt-2 mt-2"><div className="text-white font-bold text-base">You earn</div><div className="text-plus-green-300 font-bold text-lg">₹984</div></div>
          </div>
        </div>
        <div className="mt-6 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd.</p></div>
      </div>
    </div>
  );
}
