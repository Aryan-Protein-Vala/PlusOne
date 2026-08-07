import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, FileText, CheckCircle2, Clock, ArrowRight, MessageSquare } from "lucide-react";

export const metadata: Metadata = { title: "Dispute Resolution", description: "Dispute resolution process for PlusOne." };

export default function DisputesPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Disputes</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Dispute Resolution</h1>
          <p className="text-white/30">Here's how we handle disputes between users. Our goal is always a fair and prompt resolution.</p>
        </div>
        <div className="space-y-6">
          {[
            { step: "1", title: "Contact the Other Party", desc: "Many issues can be resolved directly. Use the in-app chat to communicate with the other party about the issue.", icon: MessageSquare, color: "text-plus-purple-300", bg: "bg-plus-purple-500/10" },
            { step: "2", title: "Report to PlusOne", desc: "If direct resolution fails, report the dispute through your booking or by emailing disputes@plusone.app. Include all relevant details.", icon: FileText, color: "text-plus-blue-300", bg: "bg-plus-blue-500/10" },
            { step: "3", title: "Our Investigation", desc: "Our Trust & Safety team reviews all evidence including chat history, booking details, and any reports. We aim to respond within 48 hours.", icon: Shield, color: "text-plus-green-300", bg: "bg-plus-green-500/10" },
            { step: "4", title: "Resolution", desc: "We will communicate our decision, which may include a refund, account action, or other resolution. Both parties will be notified.", icon: CheckCircle2, color: "text-plus-green-300", bg: "bg-plus-green-500/10" },
            { step: "5", title: "Appeal", desc: "If you disagree with our decision, you may submit an appeal within 14 days to disputes@plusone.app. A senior team member will review the case.", icon: ArrowRight, color: "text-amber-300", bg: "bg-amber-500/10" },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}><item.icon size={16} className={item.color}/></div>
              <div>
                <h2 className="text-white font-semibold text-sm mb-1">{item.title}</h2>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-plus-purple-500/15 bg-plus-purple-500/5 p-5">
          <h2 className="text-white font-semibold text-sm mb-2">What We Consider</h2>
          <p className="text-white/40 text-xs leading-relaxed">When resolving disputes, we consider: booking details and terms, chat communication history, user ratings and history, evidence provided by both parties, applicable laws and our policies, and precedent from similar cases.</p>
        </div>
        <div className="mt-6 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">Contact: <a href="mailto:disputes@plusone.app" className="text-plus-purple-300 hover:text-plus-purple-200 underline">disputes@plusone.app</a> · © {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd.</p></div>
      </div>
    </div>
  );
}
