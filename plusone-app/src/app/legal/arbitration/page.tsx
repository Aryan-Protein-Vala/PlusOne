import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, Scale, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = { title: "Arbitration Agreement", description: "Arbitration agreement for PlusOne." };

export default function ArbitrationPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Arbitration</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-purple-500/10 border border-plus-purple-500/20 rounded-full text-plus-purple-300 text-xs font-medium mb-4"><Scale size={11}/>Dispute Resolution</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Arbitration Agreement</h1>
          <p className="text-white/30">Read carefully — this affects your rights</p>
        </div>
        <div className="space-y-5">
          <div className="rounded-2xl border border-amber-500/15 bg-amber-500/5 p-5">
            <div className="flex items-center gap-2 mb-3"><FileText size={14} className="text-amber-300"/><h2 className="text-white font-semibold">Binding Arbitration — Noticing Requirement</h2></div>
            <p className="text-white/40 text-sm leading-relaxed">This section describes how disputes between you and PlusOne Technologies Pvt. Ltd. will be resolved. By agreeing to these Terms, you agree to resolve disputes through binding arbitration rather than in court, except for certain limited exceptions. You have the right to opt out of this arbitration provision within 30 days of accepting these Terms by emailing <a href="mailto:hello@plusone.app" className="text-plus-purple-300 hover:text-plus-purple-200 underline">hello@plusone.app</a> with subject "Opt Out of Arbitration".</p>
          </div>
          {[
            { title: "Informal Resolution", text: "Before filing any arbitration, you agree to try to resolve the dispute informally by contacting our support team at hello@plusone.app. We will attempt to resolve the dispute within 30 days." },
            { title: "Arbitration Procedure", text: "If informal resolution fails, disputes will be resolved by binding arbitration administered by a neutral arbitration service in accordance with their rules. The arbitration will take place in Mumbai, Maharashtra, India, in the English language." },
            { title: " arbitrator Selection", text: "The arbitrator will be a neutral third party with expertise in technology platform disputes. Either party may request a panel of three arbitrators for disputes exceeding INR 10,00,000." },
            { title: "Limitations", text: "Either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent irreparable harm. Arbitration does not apply to intellectual property infringement claims or claims by us to enforce these Terms." },
            { title: "Award and Judgment", text: "The arbitrator's award shall be final and binding. Judgment may be entered on the award in any court with jurisdiction. Each party bears its own costs, except where the arbitrator determines otherwise." },
            { title: "Class Action Waiver", text: "YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION OR REPRESENTATIVE PROCEEDING. Disputes will be resolved on an individual basis only." },
            { title: "Small Claims Exception", text: "Either party may bring a dispute in small claims court if the dispute qualifies and is brought in the jurisdiction where you reside." },
            { title: "Opt-Out", text: "You may opt out of this arbitration agreement within 30 days by emailing hello@plusone.app with subject line 'Opt Out of Arbitration' and your account email address." },
          ].map((section, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              <h2 className="text-white font-semibold text-sm mb-1">{section.title}</h2>
              <p className="text-white/40 text-xs leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. · This is a legal document — consult an attorney for advice.</p></div>
      </div>
    </div>
  );
}
