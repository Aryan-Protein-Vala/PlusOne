import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, ShieldCheck, Mail, Lock, Award, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = { title: "Responsible Disclosure Policy", description: "Responsible disclosure policy for PlusOne security vulnerabilities." };

export default function ResponsibleDisclosurePage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Security</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-green-500/10 border border-plus-green-500/20 rounded-full text-plus-green-300 text-xs font-medium mb-4"><ShieldCheck size={11}/>Responsible Disclosure</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Security Vulnerability Disclosure Policy</h1>
          <p className="text-white/30 max-w-2xl">We take security seriously. If you discover a security vulnerability in our Platform, please help us by reporting it responsibly.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="rounded-2xl border border-plus-green-500/15 bg-plus-green-500/5 p-5">
              <h2 className="text-white font-semibold text-base mb-3 flex items-center gap-2"><Award size={14} className="text-plus-green-300"/>What We Encourage</h2>
              <ul className="space-y-2 text-sm">
                {["Research and report security vulnerabilities in our Platform", "Provide detailed information to help us reproduce and fix issues", "Allow us a reasonable time to fix issues before public disclosure", "Respect our users' privacy and data during your research"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/40"><ShieldCheck size={12} className="text-plus-green-400/60 mt-0.5 shrink-0"/>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-500/15 bg-amber-500/5 p-5">
              <h2 className="text-white font-semibold text-base mb-3 flex items-center gap-2"><Shield size={14} className="text-amber-300"/>What We Ask You NOT to Do</h2>
              <ul className="space-y-2 text-sm">
                {["Access or modify user data beyond what is necessary to demonstrate the vulnerability", "Disrupt our services or deny access to legitimate users", "Publicly disclose vulnerabilities before we have had a chance to fix them", "Use social engineering, phishing, or physical security attacks", "Test vulnerabilities on accounts you don't own without permission", "Demand financial compensation as a condition of disclosure"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/40"><Shield size={12} className="text-rose-400/60 mt-0.5 shrink-0"/>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-plus-purple-500/15 bg-plus-purple-500/5 p-5">
              <h2 className="text-white font-semibold text-base mb-3">How to Report</h2>
              <p className="text-white/40 text-sm mb-3">Please send details to:</p>
              <a href="mailto:security@plusone.app" className="block w-full px-4 py-3 bg-plus-purple-500/10 border border-plus-purple-500/20 rounded-xl text-plus-purple-200 text-sm font-medium text-center hover:bg-plus-purple-500/20 transition-colors mb-3">security@plusone.app</a>
              <p className="text-white/30 text-xs">Please include: description of the vulnerability, steps to reproduce, potential impact, and your contact information for follow-up.</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <h2 className="text-white font-semibold text-base mb-3">What to Expect</h2>
              <ul className="space-y-2 text-sm">
                {["Acknowledgement of your report within 24 hours", "Assessment of the vulnerability within 3 business days", "Regular updates on our progress", "Notification when a fix is deployed", "Option to be credited (if you choose) for your discovery"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/40"><CheckCircle2 size={12} className="text-plus-green-400/60 mt-0.5 shrink-0"/>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <h2 className="text-white font-semibold text-base mb-2">Legal Safe Harbour</h2>
              <p className="text-white/40 text-xs leading-relaxed">We will not pursue legal action against researchers who follow this policy and act in good faith. We consider activity that complies with this policy to be authorised and will not initiate legal proceedings.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. · We run a bug bounty programme — contact us for details.</p></div>
      </div>
    </div>
  );
}
