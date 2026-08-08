import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, MessageSquare, Phone, Mail, Clock, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";

export const metadata: Metadata = { title: "Help Center", description: "Help Center for PlusOne — get support and answers." };

export default function HelpPage() {
  const faqs = [
    { q: "What is PlusOne?", a: "PlusOne is a verified social activity marketplace that connects independent adults for lawful activities like movies, coffee, city exploration, museums, sports, and more. We're not a dating app or escort service — we're an activity companion platform." },
    { q: "How does verification work?", a: "Providers verify their identity using government ID, selfie with liveness detection, and phone verification. Verification badges are displayed on their profile. We may require additional verification at any time." },
    { q: "How do payments work?", a: "All payments are made through the Platform. Money is held in escrow until the activity is completed. The provider receives their earnings within 24 hours of completion, minus our 15% + 2–5% platform fee." },
    { q: "What is the cancellation policy?", a: "Cancelling more than 48 hours before: full refund. 24–48 hours: 50% refund. Less than 24 hours: no refund. See our full Refund Policy for details." },
    { q: "Is PlusOne safe?", a: "We've built safety into every feature: identity verification, in-app payments, live location sharing, emergency SOS, chat moderation, reporting tools, and 24/7 support. See our Safety Center for everything we do." },
    { q: "How do I report a user?", a: "You can report any user from their profile page or from within an active chat. Reports go directly to our Trust & Safety team for immediate review. We review all reports and take appropriate action." },
    { q: "Can I become a host?", a: "Yes! Anyone 18+ can apply to become a host. You'll need to complete identity verification. Once approved, you can set your hourly rate, list your activities, and start earning. Visit Earn money in the app to get started." },
    { q: "What activities are allowed?", a: "Allowed: movies, coffee, study, travel, sports, shopping, photography, museums, gaming, cooking, language exchange, board games, dog walking, city exploration, concerts, and more. Not allowed: sexual services, escorting, illegal activities, harassment, hate speech, or anything involving minors." },
  ];

  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Help Center</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-purple-500/10 border border-plus-purple-500/20 rounded-full text-plus-purple-300 text-xs font-medium mb-4"><Shield size={11}/>Help & Support</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Help Center</h1>
          <p className="text-white/30 max-w-xl">Answers to common questions. Can't find what you need? Contact us directly.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                  <span className="text-white font-medium text-sm">{faq.q}</span>
                  <ChevronRight size={16} className="text-white/20 group-open:rotate-90 transition-transform"/>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
          <div>
            <div className="rounded-2xl border border-plus-purple-500/15 bg-plus-purple-500/5 p-5 mb-4">
              <h2 className="text-white font-semibold text-base mb-3">Still need help?</h2>
              <div className="space-y-3">
                <a href="mailto:hello@plusone.app" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-left">
                  <Mail size={14} className="text-plus-purple-300 shrink-0"/>
                  <div><div className="text-white text-sm">Email Support</div><div className="text-white/20 text-xs">hello@plusone.app</div></div>
                </a>
                <a href="tel:+912245678900" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-left">
                  <Phone size={14} className="text-plus-green-300 shrink-0"/>
                  <div><div className="text-white text-sm">Phone Support</div><div className="text-white/20 text-xs">+91 22 4567 8900</div></div>
                </a>
                <a href="/safety" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-left">
                  <AlertTriangle size={14} className="text-rose-300 shrink-0"/>
                  <div><div className="text-white text-sm">Emergency / Safety Issue</div><div className="text-white/20 text-xs">Available 24/7</div></div>
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <h2 className="text-white font-semibold text-sm mb-3">Response Times</h2>
              <div className="space-y-2 text-sm">
                {[["General inquiries", "Within 24 hours", "plus-purple-300"], ["Booking issues", "Within 12 hours", "plus-green-300"], ["Safety reports", "Immediate", "rose-300"], ["Payment issues", "Within 48 hours", "amber-300"]].map(([type, time, color]) => (
                  <div key={type} className="flex items-center justify-between">
                    <span className="text-white/40">{type}</span>
                    <span className={`text-xs font-medium ${color === "plus-purple-300" ? "text-plus-purple-300" : color === "plus-green-300" ? "text-plus-green-300" : color === "rose-300" ? "text-rose-300" : "text-amber-300"}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd.</p></div>
      </div>
    </div>
  );
}
