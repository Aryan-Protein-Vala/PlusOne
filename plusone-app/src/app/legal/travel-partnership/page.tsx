import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = { title: "Travel Partnership", description: "Information about travel partnership for PlusOne." };

export default function TravelPartnershipPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Travel Partnership</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Travel Partnership</h1>
          <p className="text-white/30 max-w-2xl">Information about our travel partnership programme.</p>
        </div>
        <div className="rounded-2xl border border-plus-purple-500/15 bg-plus-purple-500/5 p-6 text-center">
          <p className="text-white/50 text-sm mb-4">This page is under construction. Stand by for travel partnership info.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 rounded-xl text-white font-medium text-sm hover:scale-[1.02] transition-all">Back to PlusOne</Link>
        </div>
        <div className="mt-6 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd.</p></div>
      </div>
    </div>
  );
}
