import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, Thermometer, Hand, CheckCircle2 } from "lucide-react";

export const metadata: { title: string; description: string } = { title: "COVID-19 Safety", description: "COVID-19 safety guidelines for PlusOne." };

export default function COVIDSafetyPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>COVID-19</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">COVID-19 Safety Guidelines</h1>
          <p className="text-white/30">Stay safe while using PlusOne. Following health guidelines is everyone's responsibility.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-plus-green-500/15 bg-plus-green-500/5 p-5">
            <h2 className="text-white font-semibold text-base mb-3 flex items-center gap-2"><CheckCircle2 size={14} className="text-plus-green-300"/>Before You Meet</h2>
            <ul className="space-y-2 text-sm">
              {["Check local health guidelines for your area", "Ensure you and your activity partner are comfortable with the meeting", "Consider outdoor activities when possible", "Meet in well-ventilated, public places", "Keep the activity to the planned duration"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-white/40"><CheckCircle2 size={12} className="text-plus-green-400/60 mt-0.5 shrink-0"/>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h2 className="text-white font-semibold text-base mb-3 flex items-center gap-2"><Shield size={14} className="text-plus-purple-300"/>During Your Activity</h2>
            <ul className="space-y-2 text-sm">
              {["Follow local health and safety guidelines", "Respect your partner's comfort level with physical contact", "Maintain appropriate distance if preferred", "Stay home if you feel unwell", "Cancel if either party is not comfortable"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-white/40"><Shield size={12} className="text-plus-purple-400/60 mt-0.5 shrink-0"/>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">These guidelines are general recommendations. Always follow local health authority guidance. © {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd.</p></div>
      </div>
    </div>
  );
}
