import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, CheckCircle2, User, Mail, Database } from "lucide-react";

export const metadata: Metadata = { title: "GDPR Information", description: "GDPR compliance information for PlusOne." };

export default function GDPRPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>GDPR</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-medium mb-4"><Shield size={11}/>GDPR Compliance</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">GDPR Information</h1>
          <p className="text-white/30">For users in the European Economic Area (EEA) and United Kingdom</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { title: "Lawful Basis for Processing", items: ["Consent: For marketing communications and optional features", "Contract: To provide booked services and process payments", "Legal Obligation: For tax, accounting, and legal compliance", "Legitimate Interest: For safety, fraud prevention, and service improvement"] },
              { title: "Data Controller", items: ["PlusOne Technologies Pvt. Ltd.", "4th Floor, TechPark Building, BKC, Bandra East, Mumbai 400051, India", "Email: privacy@plusone.app", "DPO: dpo@plusone.app"] },
              { title: "Your Rights", items: ["Right of Access: Request a copy of your data", "Right to Rectification: Correct inaccurate data", "Right to Erasure: Request deletion of your data", "Right to Restrict Processing: Limit how we use your data", "Right to Portability: Receive your data in a portable format", "Right to Object: Object to processing based on legitimate interests", "Right to Withdraw Consent: Withdraw consent at any time"] },
            ].map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <h2 className="text-white font-semibold text-sm mb-3">{group.title}</h2>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/40 text-sm"><CheckCircle2 size={12} className="text-plus-green-400/60 mt-0.5 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-plus-purple-500/15 bg-plus-purple-500/5 p-4">
              <h2 className="text-white font-semibold text-sm mb-2">International Transfers</h2>
              <p className="text-white/40 text-xs leading-relaxed">If you are in the EEA, your data may be transferred to India for processing. We rely on EU Standard Contractual Clauses (SCCs) and other appropriate safeguards to ensure adequate protection.</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              <h2 className="text-white font-semibold text-sm mb-2">Retention Periods</h2>
              <ul className="space-y-1.5 text-white/40 text-xs list-disc pl-5"><li>Account data: Until account deletion + 3 years for legal compliance</li><li>Booking records: 7 years for tax and legal purposes</li><li>Identity verification data: Deleted within 30 days of verification completion</li><li>Chat messages: 90 days after booking completion</li><li>Cookies: As per your browser settings or cookie consent</li></ul>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              <h2 className="text-white font-semibold text-sm mb-2">How to Exercise Your Rights</h2>
              <p className="text-white/40 text-xs leading-relaxed mb-2">To exercise any GDPR right, contact us at <a href="mailto:privacy@plusone.app" className="text-plus-purple-300 hover:text-plus-purple-200 underline">privacy@plusone.app</a> with your request. We will respond within 30 days. We may need to verify your identity.</p>
              <p className="text-white/20 text-xs">You have the right to lodge a complaint with your local data protection authority.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. · This page is informational and does not constitute legal advice.</p></div>
      </div>
    </div>
  );
}
