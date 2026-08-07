import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, AlertTriangle, Mail } from "lucide-react";

export const metadata: Metadata = { title: "DMCA / Copyright", description: "DMCA copyright policy for PlusOne." };

export default function DMCA_page() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>DMCA</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-purple-500/10 border border-plus-purple-500/20 rounded-full text-plus-purple-300 text-xs font-medium mb-4"><AlertTriangle size={11}/>Copyright & DMCA</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">DMCA & Copyright Policy</h1>
          <p className="text-white/30">PlusOne respects intellectual property rights and responds to valid DMCA takedown notices.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <h2 className="text-white font-semibold text-base mb-3">Reporting Copyright Infringement</h2>
              <p className="text-white/40 text-sm leading-relaxed mb-3">If you believe content on PlusOne infringes your copyright, please submit a written notice to our DMCA agent containing:</p>
              <ol className="space-y-2 text-sm">
                {["Identification of the copyrighted work claimed to be infringed", "Identification of the infringing material with sufficient detail for us to locate it", "Your contact information (address, phone, email)", "A statement that you have a good faith belief the use is not authorised", "A statement that the information in the notice is accurate, under penalty of perjury", "Your physical or electronic signature"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/40"><span className="text-plus-purple-300 font-bold shrink-0">{i+1}.</span>{item}</li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-plus-purple-500/15 bg-plus-purple-500/5 p-5">
              <h2 className="text-white font-semibold text-base mb-2 flex items-center gap-2"><Mail size={14} className="text-plus-purple-300"/>DMCA Agent Contact</h2>
              <p className="text-white/40 text-sm mb-1">Email: <a href="mailto:dmca@plusone.app" className="text-plus-purple-300 hover:text-plus-purple-200 underline">dmca@plusone.app</a></p>
              <p className="text-white/40 text-sm">Mail: PlusOne Technologies Pvt. Ltd., Attn: DMCA Agent, 4th Floor, TechPark Building, Bandra Kurla Complex, Bandra (East), Mumbai, Maharashtra 400051, India</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <h2 className="text-white font-semibold text-base mb-3">Counter-Notice</h2>
              <p className="text-white/40 text-sm leading-relaxed">If you believe your content was removed by mistake, you may submit a counter-notice to our DMCA agent with: your contact information, identification of the removed content, a statement under penalty of perjury that you have a good faith belief the content was removed mistakenly, and your consent to local jurisdiction.</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <h2 className="text-white font-semibold text-base mb-3">Repeat Infringers</h2>
              <p className="text-white/40 text-sm leading-relaxed">We may terminate accounts of users who are repeat infringers of copyright. We may also remove content that is the subject of multiple valid takedown notices.</p>
            </div>
            <div className="rounded-2xl border border-plus-green-500/10 bg-plus-green-500/5 p-5">
              <h2 className="text-plus-green-200 font-semibold text-base mb-2">Safe Harbour</h2>
              <p className="text-white/40 text-sm leading-relaxed">PlusOne complies with the safe harbour provisions of the DMCA. We do not actively monitor content uploaded by users. We promptly remove content upon receipt of valid takedown notices.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. This page is informational.</p></div>
      </div>
    </div>
  );
}
