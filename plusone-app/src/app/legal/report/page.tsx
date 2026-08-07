import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, AlertTriangle, FileText } from "lucide-react";

export const metadata: Metadata = { title: "Report a Safety Issue", description: "Report safety issues to PlusOne." };

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Report</div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-300 text-xs font-medium mb-4"><AlertTriangle size={11}/>Safety Report</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Report a Safety Issue</h1>
          <p className="text-white/30">Our Trust & Safety team reviews every report. For emergencies, call local emergency services immediately.</p>
        </div>
        {[
          { type: "Safety Emergency", desc: "If you feel in immediate danger, contact local emergency services first, then use the SOS button in your booking.", color: "text-rose-300", bg: "bg-rose-500/10" },
          { type: "User Misconduct", desc: "Harassment, inappropriate behaviour, hate speech, or violation of community guidelines.", color: "text-amber-300", bg: "bg-amber-500/10" },
          { type: "Fake Identity / Scam", desc: "Suspected fake profile, impersonation, or scam activity.", color: "text-plus-purple-300", bg: "bg-plus-purple-500/10" },
          { type: "Illegal Activity", desc: "Any activity that may be illegal or against our community guidelines.", color: "text-rose-300", bg: "bg-rose-500/10" },
          { type: "Payment Issue", desc: "Fraudulent transaction, unauthorized charge, or payment dispute.", color: "text-plus-blue-300", bg: "bg-plus-blue-500/10" },
          { type: "Content Issue", desc: "Inappropriate profile content, photos, or descriptions.", color: "text-cyan-300", bg: "bg-cyan-500/10" },
        ].map((item) => (
          <a key={item.type} href={`mailto:safety@plusone.app?subject=Report: ${item.type}`} className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all mb-2">
            <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}><AlertTriangle size={14} className={item.color}/></div>
            <div className="flex-1"><div className="text-white text-sm font-medium">{item.type}</div><div className="text-white/30 text-xs">{item.desc}</div></div>
            <span className="text-plus-purple-300 text-xs font-medium">Report now →</span>
          </a>
        ))}
        <div className="mt-8 rounded-2xl border border-plus-green-500/10 bg-plus-green-500/5 p-5">
          <h2 className="text-plus-green-200 font-semibold text-sm mb-2">Emergency Contacts</h2>
          <div className="space-y-2 text-sm text-white/40">
            <div className="flex items-center gap-2"><span className="text-rose-300 font-medium">India Emergency:</span> 112 (Police, Fire, Ambulance)</div>
            <div className="flex items-center gap-2"><span className="text-plus-purple-300">PlusOne Safety Team:</span> safety@plusone.app (monitored 24/7)</div>
            <div className="flex items-center gap-2"><span className="text-white/30">In-app SOS:</span> Available in every active booking</div>
          </div>
        </div>
        <div className="mt-6 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd.</p></div>
      </div>
    </div>
  );
}
