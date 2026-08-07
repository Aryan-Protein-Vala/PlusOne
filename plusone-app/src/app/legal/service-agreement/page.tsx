import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, Users, CreditCard, Star, FileText } from "lucide-react";

export const metadata: Metadata = { title: "Service Agreement", description: "Service Agreement for PlusOne." };

export default function ServiceAgreementPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Service Agreement</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-purple-500/10 border border-plus-purple-500/20 rounded-full text-plus-purple-300 text-xs font-medium mb-4"><FileText size={11}/>Service Agreement</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Service Agreement</h1>
          <p className="text-white/30">Effective: October 1, 2024</p>
        </div>
        <div className="prose prose-invert prose-sm max-w-none space-y-5">
          {[
            { title: "Parties", text: "This Service Agreement (\"Agreement\") is entered into between PlusOne Technologies Pvt. Ltd., a company incorporated under the laws of India with CIN U72900MH2024PTC3XXXXX, having its registered office at 12/A, Green Estate, Andheri East, Mumbai, Maharashtra 400093 (\"Platform\" or \"Provider\"), and the user accessing or using the Platform (\"User\" or \"you\")." },
            { title: "Scope of Services", text: "The Provider operates an online marketplace technology platform that enables independent users to discover, connect with, and pay for lawful social and recreational activities with one another. The Provider does not employ, supervise, or control users, organize activities, or guarantee any outcome." },
            { title: "Acceptable Use", text: "Users agree to use the Platform only for lawful social activities. Prohibited uses include: sexual services, escort services, illegal activities, harassment, hate speech, fraud, activities involving minors, and any use violating applicable laws or these terms." },
            { title: "User Obligations", text: "Users shall: provide accurate information, comply with all applicable laws, respect other users, keep account credentials secure, not share accounts, not engage in fraudulent activity, and report suspicious behaviour promptly." },
            { title: "Fees and Payment", text: "The Provider charges a commission of 15% plus a platform fee of 2–5% on completed bookings. All payments must be made through the Platform. The Provider reserves the right to update fees with 30 days' notice." },
            { title: "Provider Relationship", text: "Providers are independent contractors, not employees, agents, or partners of the Provider. Providers are solely responsible for their activities and interactions with users." },
            { title: "Termination", text: "Either party may terminate this Agreement at any time. The Provider may suspend or terminate access for violations of these terms. Upon termination, all rights and obligations cease." },
            { title: "Disclaimer", text: "THE PLATFORM IS PROVIDED \"AS IS\" WITHOUT WARRANTIES OF ANY KIND. THE PROVIDER DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. THE PROVIDER DOES NOT WARRANT ANY PARTICULAR OUTCOME OF ANY USER INTERACTION." },
          ].map((section, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <h2 className="text-white font-semibold text-base mb-2 flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">{i+1}</span>{section.title}</h2>
              <p className="text-white/40 text-sm leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">This Service Agreement is governed by the laws of India. © {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. CIN: U72900MH2024PTC3XXXXX.</p></div>
      </div>
    </div>
  );
}
