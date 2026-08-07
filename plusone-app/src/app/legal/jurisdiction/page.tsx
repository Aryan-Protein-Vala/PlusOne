import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, MapPin, Gavel } from "lucide-react";

export const metadata: { title: string; description: string } = { title: "Jurisdiction", description: "Jurisdiction and governing law for PlusOne." };

export default function JurisdictionPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Jurisdiction</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Jurisdiction & Governing Law</h1>
          <p className="text-white/30">Legal jurisdiction information for PlusOne.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h2 className="text-white font-semibold text-base mb-3 flex items-center gap-2"><Gavel size={14} className="text-plus-purple-300"/>Governing Law</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-3">These Terms of Service and all disputes arising out of or relating to your use of the Platform are governed by the laws of the Republic of India, without regard to its conflict of law provisions.</p>
            <div className="bg-white/[0.02] rounded-xl p-4">
              <p className="text-white/40 text-sm"><strong className="text-white/60">Applicable Laws:</strong> Information Technology Act 2000, Indian Contract Act 1872, Digital Personal Data Protection Act 2023, Consumer Protection Act 2019, and other applicable Indian laws.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h2 className="text-white font-semibold text-base mb-3 flex items-center gap-2"><MapPin size={14} className="text-plus-purple-300"/>Jurisdiction & Venue</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-3">Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the courts located in Mumbai, Maharashtra, India.</p>
            <div className="bg-white/[0.02] rounded-xl p-4">
              <p className="text-white/40 text-sm"><strong className="text-white/60">Exclusive Jurisdiction:</strong> Courts of Mumbai, Maharashtra, India have exclusive jurisdiction over all disputes arising from these Terms.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. · CIN: U72900MH2024PTC3XXXXX</p></div>
      </div>
    </div>
  );
}
