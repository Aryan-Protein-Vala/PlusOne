import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ArrowLeft, Shield, CheckCircle2, Clock, AlertTriangle, CreditCard, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund Policy for PlusOne — the verified social activity marketplace.",
};

export default function RefundPolicyPage() {
  const scenarios = [
    {
      situation: "You cancel more than 48 hours before the activity",
      refund: "Full refund of the total booking amount",
      note: "The full amount, including platform fees, is refunded to your original payment method within 5–7 business days.",
      icon: CheckCircle2,
      color: "text-plus-green-300",
      bg: "bg-plus-green-500/10",
    },
    {
      situation: "You cancel between 24 and 48 hours before the activity",
      refund: "50% refund of the booking amount",
      note: "A 50% cancellation fee applies to cover the provider's reserved time. The remaining 50% is refunded within 5–7 business days.",
      icon: Clock,
      color: "text-amber-300",
      bg: "bg-amber-500/10",
    },
    {
      situation: "You cancel less than 24 hours before the activity",
      refund: "No refund",
      note: "Late cancellations do not qualify for a refund. This protects providers who have reserved their time for you.",
      icon: AlertTriangle,
      color: "text-rose-300",
      bg: "bg-rose-500/10",
    },
    {
      situation: "The provider cancels the activity",
      refund: "Full refund + penalty on provider",
      note: "You receive a full refund immediately. The provider's trust score is negatively impacted, and repeated cancellations may lead to suspension.",
      icon: CheckCircle2,
      color: "text-plus-green-300",
      bg: "bg-plus-green-500/10",
    },
    {
      situation: "The provider does not show up",
      refund: "Full refund + penalty on provider",
      note: "You receive a full refund. The provider is subject to penalties and possible suspension for no-show behaviour.",
      icon: CheckCircle2,
      color: "text-plus-green-300",
      bg: "bg-plus-green-500/10",
    },
    {
      situation: "You do not show up and have not cancelled",
      refund: "No refund + penalty on your account",
      note: "Missing a booking without notice does not qualify for a refund. Repeated no-shows may result in account penalties.",
      icon: AlertTriangle,
      color: "text-rose-300",
      bg: "bg-rose-500/10",
    },
    {
      situation: "Activity is cancelled due to a platform issue",
      refund: "Full refund + alternative arrangement",
      note: "If we cancel an activity due to a platform issue, you receive a full refund and our team will help you find an alternative.",
      icon: CheckCircle2,
      color: "text-plus-green-300",
      bg: "bg-plus-green-500/10",
    },
    {
      situation: "Safety concern — you need to leave early",
      refund: "Pro-rated refund + safety review",
      note: "If you need to leave an activity early due to a legitimate safety concern, contact support immediately. We review each situation individually.",
      icon: Shield,
      color: "text-plus-blue-300",
      bg: "bg-plus-blue-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
              <ArrowLeft size={14} />
              Back to PlusOne
            </Link>
            <div className="flex items-center gap-2 text-xs text-white/20">
              <Shield size={12} />
              Refund Policy
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-blue-500/10 border border-plus-blue-500/20 rounded-full text-plus-blue-300 text-xs font-medium mb-4">
            <CreditCard size={11} />
            Financial Policy
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Refund Policy
          </h1>
          <p className="text-white/30 max-w-2xl">
            We want every booking to be a great experience. Here's how refunds work on PlusOne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <Clock size={16} className="text-plus-purple-300" />
              Cancellation Scenarios
            </h2>
            <div className="space-y-3">
              {scenarios.map((s, i) => (
                <div key={i} className={`rounded-xl border p-4 transition-all ${s.bg} border-current/20`}>
                  <div className="flex items-start gap-3">
                    <s.icon size={16} className={cn(s.color, "mt-0.5 shrink-0")} />
                    <div>
                      <h3 className="text-white text-sm font-medium mb-1">{s.situation}</h3>
                      <p className={`text-sm font-medium ${s.color}`}>{s.refund}</p>
                      <p className="text-white/30 text-xs mt-1 leading-relaxed">{s.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-plus-purple-500/5 border border-plus-purple-500/10 rounded-2xl p-5 mb-6">
              <h2 className="text-white font-semibold text-base mb-3 flex items-center gap-2">
                <Shield size={15} className="text-plus-purple-300" />
                How Refunds Work
              </h2>
              <ul className="space-y-3 text-sm">
                {[
                  { step: "1", text: "Request a refund through your booking confirmation or by contacting support@plusone.app." },
                  { step: "2", text: "Our team reviews your request against these policies within 24 hours." },
                  { step: "3", text: "Approved refunds are processed to your original payment method." },
                  { step: "4", text: "Refunds typically appear in your account within 5–7 business days, depending on your bank." },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{item.step}</span>
                    <span className="text-white/40">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <h2 className="text-white font-semibold text-base mb-3">Important Notes</h2>
              <ul className="space-y-2 text-sm">
                {[
                  "Platform fees are non-refundable in some cases — see specific scenario above.",
                  "Security deposits are fully refundable when the activity is completed as booked.",
                  "Refunds for recurring bookings follow the same policies as single bookings.",
                  "Gift bookings and corporate bookings may have specific terms noted at purchase.",
                  "Disputes are reviewed case-by-case by our trust & safety team.",
                ].map((note) => (
                  <li key={note} className="flex items-start gap-2 text-white/40">
                    <span className="text-plus-purple-300 mt-0.5">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl">
          <p className="text-white/20 text-xs text-center leading-relaxed">
            This Refund Policy is part of our Terms of Service. In case of conflict, the Terms of Service take precedence.
            © {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
