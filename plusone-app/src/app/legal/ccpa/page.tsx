import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = { title: "CCPA Information", description: "CCPA/CPRA compliance information for PlusOne." };

export default function CCPAPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>CCPA</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-purple-500/10 border border-plus-purple-500/20 rounded-full text-plus-purple-300 text-xs font-medium mb-4"><Shield size={11}/>CCPA/CPRA Rights</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">California Privacy Rights</h1>
          <p className="text-white/30">For California residents under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA)</p>
        </div>
        <div className="prose prose-invert prose-sm max-w-none space-y-5">
          <p className="text-white/40 text-sm leading-relaxed">PlusOne Technologies Pvt. Ltd. values the privacy rights of California residents. This notice explains your rights under the CCPA/CPRA and how to exercise them.</p>
          {[
            { title: "Right to Know", text: "You have the right to know what personal information is collected, used, shared, or sold. We will disclose: categories of personal information collected in the last 12 months, sources, business purpose, and categories of third parties with whom it is shared." },
            { title: "Right to Delete", text: "You have the right to request deletion of personal information collected from you, subject to certain exceptions required by law." },
            { title: "Right to Opt-Out of Sale", text: "We do not sell personal information as defined by the CCPA. This notice is provided voluntarily." },
            { title: "Right to Non-Discrimination", text: "We will not discriminate against you for exercising your CCPA rights. We may offer different prices or services only where permitted by law and where the difference is reasonably related to the value of the data." },
            { title: "Right to Correct", text: "You have the right to request correction of inaccurate personal information." },
            { title: "Right to Limit Use of Sensitive Information", text: "We limit the use of sensitive personal information to purposes necessary to provide our services." },
          ].map((section, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              <h2 className="text-white font-semibold text-sm mb-1 flex items-center gap-2"><span className={`w-5 h-5 rounded-full bg-plus-purple-500/20 text-xs font-bold flex items-center justify-center shrink-0`}>{i+1}</span>{section.title}</h2>
              <p className="text-white/40 text-xs leading-relaxed">{section.text}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-plus-purple-500/15 bg-plus-purple-500/5 p-4">
            <h2 className="text-white font-semibold text-sm mb-2">How to Submit a Request</h2>
            <p className="text-white/40 text-xs leading-relaxed mb-2">Contact: <a href="mailto:privacy@plusone.app" className="text-plus-purple-300 hover:text-plus-purple-200 underline">privacy@plusone.app</a> | Phone: +91 22 4567 8900</p>
            <p className="text-white/40 text-xs">We will respond within 45 days. We may request verification of your identity. Authorized agents may submit requests with proper authorization.</p>
          </div>
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. · This page is informational and does not constitute legal advice.</p></div>
      </div>
    </div>
  );
}
