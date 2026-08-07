import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, Copyright } from "lucide-react";

export const metadata: { title: string; description: string } = { title: "IP Disclaimer", description: "Intellectual property disclaimer for PlusOne." };

export default function IPDisclaimerPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>IP Disclaimer</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Intellectual Property Disclaimer</h1>
          <p className="text-white/30">Information about intellectual property rights on PlusOne.</p>
        </div>
        <div className="prose prose-invert prose-sm max-w-none space-y-4">
          {[
            { title: "Platform IP", text: "The PlusOne platform, including its design, code, branding, logos, name, and all original content, is owned by PlusOne Technologies Pvt. Ltd. and is protected by Indian and international intellectual property laws including copyright, trademark, and trade secret laws." },
            { title: "User Content", text: "Content uploaded by users (profiles, photos, reviews, messages) remains the property of the respective users. By posting content, users grant PlusOne a non-exclusive, royalty-free license to use that content in connection with operating the Platform." },
            { title: "Third-Party IP", text: "The Platform may contain content, trademarks, or other intellectual property owned by third parties. Such content is used with permission or under applicable fair use doctrines. We do not claim ownership of third-party IP." },
            { title: "Reporting IP Infringement", text: "If you believe your intellectual property rights have been infringed on the Platform, please contact our DMCA agent at dmca@plusone.app. Please provide details of the infringement." },
            { title: "Restrictions", text: "You may not copy, reproduce, modify, distribute, sell, or create derivative works of any content from the Platform except as expressly permitted by these Terms or with our prior written consent." },
          ].map((section, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              <h2 className="text-white font-semibold text-sm mb-1">{section.title}</h2>
              <p className="text-white/40 text-xs leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. All rights reserved. PlusOne® is a registered trademark.</p></div>
      </div>
    </div>
  );
}
