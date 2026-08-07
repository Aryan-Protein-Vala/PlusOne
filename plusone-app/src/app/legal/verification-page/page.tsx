import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, CheckCircle2, Camera, Phone, FileText } from "lucide-react";

export const metadata: { title: string; description: string } = { title: "Verification Guide", description: "Guide to identity verification on PlusOne." };

export default function VerificationPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Verification</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Identity Verification Guide</h1>
          <p className="text-white/30">How verification works on PlusOne and why it matters.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-white font-semibold text-base mb-3 flex items-center gap-2"><Shield size={14} className="text-plus-purple-300"/>Verification Levels</h2>
            {[
              { level: "Phone Verified", icon: Phone, desc: "Your phone number has been confirmed via OTP. This is the basic level.", color: "text-plus-blue-300", bg: "bg-plus-blue-500/10" },
              { level: "ID Verified", icon: FileText, desc: "Government-issued ID has been verified. We check your identity document.", color: "text-plus-purple-300", bg: "bg-plus-purple-500/10" },
              { level: "Selfie Verified", icon: Camera, desc: "Selfie with liveness detection completed. This is our highest verification level.", color: "text-plus-green-300", bg: "bg-plus-green-500/10" },
            ].map((v) => (
              <div key={v.level} className={`rounded-xl border p-3 mb-2 ${v.bg} border-current/20`}>
                <div className="flex items-center gap-2"><v.icon size={12} className={v.color}/><span className="text-white text-sm font-medium">{v.level}</span></div>
                <p className="text-white/30 text-xs mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-white font-semibold text-base mb-3 flex items-center gap-2"><CheckCircle2 size={14} className="text-plus-green-300"/>Why Verify?</h2>
            <ul className="space-y-2 text-sm">
              {["Build trust with potential guests", "Display verification badges on your profile", "Access higher booking volumes", "Qualify for our Top Host programme", "Weighs positively in search rankings", "Required for payouts above a certain threshold"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-white/40"><CheckCircle2 size={12} className="text-plus-green-400/60 mt-0.5 shrink-0"/>{item}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl bg-plus-purple-500/5 border border-plus-purple-500/10 p-3">
              <p className="text-white/40 text-xs leading-relaxed">Your ID documents are processed by our secure verification partners. We do not store ID images on our servers. Verification data is encrypted and handled in compliance with applicable laws.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd.</p></div>
      </div>
    </div>
  );
}
