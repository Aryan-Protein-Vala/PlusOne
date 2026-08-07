import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = { title: "Contact Us", description: "Contact PlusOne." };

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Contact</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Contact Us</h1>
          <p className="text-white/30">We're here to help. Reach out using any of the channels below.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Mail, label: "General Inquiries", value: "hello@plusone.app", color: "text-plus-purple-300", bg: "bg-plus-purple-500/10" },
            { icon: Mail, label: "Safety Reports (24/7)", value: "safety@plusone.app", color: "text-rose-300", bg: "bg-rose-500/10" },
            { icon: Phone, label: "Phone Support", value: "+91 22 4567 8900", color: "text-plus-green-300", bg: "bg-plus-green-500/10" },
            { icon: Clock, label: "Response Time", value: "Within 24 hours", color: "text-amber-300", bg: "bg-amber-500/10" },
          ].map((item) => (
            <a key={item.label} href={item.label.includes("Mail") ? `mailto:${item.value}` : item.label.includes("Phone") ? `tel:${item.value}` : "#"} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-all text-center group">
              <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center mx-auto mb-2`}><item.icon size={14} className={item.color}/></div>
              <div className="text-white text-xs font-medium mb-0.5">{item.label}</div>
              <div className="text-white/30 text-xs">{item.value}</div>
            </a>
          ))}
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <h2 className="text-white font-semibold text-base mb-3">Our Offices</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-plus-purple-300 shrink-0 mt-0.5"/>
              <div><div className="text-white text-sm font-medium">Registered Office</div><div className="text-white/30 text-xs mt-1 leading-relaxed">PlusOne Technologies Pvt. Ltd.<br/>12/A, Green Estate, Andheri East<br/>Mumbai, Maharashtra 400093, India</div></div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-plus-purple-300 shrink-0 mt-0.5"/>
              <div><div className="text-white text-sm font-medium">Operations Center</div><div className="text-white/30 text-xs mt-1 leading-relaxed">4th Floor, TechPark Building<br/>Bandra Kurla Complex, Bandra (East)<br/>Mumbai, Maharashtra 400051, India</div></div>
            </div>
          </div>
        </div>
        <div className="mt-6 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">CIN: U72900MH2024PTC3XXXXX · © {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd.</p></div>
      </div>
    </div>
  );
}
