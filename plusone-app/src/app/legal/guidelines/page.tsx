import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, CheckCircle2, XCircle, AlertTriangle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "Community Guidelines for PlusOne — rules and expectations for all users of the verified social activity marketplace.",
};

export default function CommunityGuidelinesPage() {
  const allowed = [
    { emoji: "🎬", text: "Movies & cinema outings — book a buddy for the latest releases or classic films" },
    { emoji: "☕", text: "Cafes & coffee — grab a coffee with someone new and interesting" },
    { emoji: "✈️", text: "Travel companions — explore your city or travel somewhere new together" },
    { emoji: "📚", text: "Study sessions — find a study buddy for exams, projects, or learning" },
    { emoji: "💪", text: "Sports & fitness — gym, badminton, cycling, running, yoga, and more" },
    { emoji: "🛍️", text: "Shopping — shopping companion for malls, markets, or specific stores" },
    { emoji: "📸", text: "Photography walks — explore the city and capture photos together" },
    { emoji: "🎵", text: "Concerts & events — attend concerts, exhibitions, theater, and cultural events" },
    { emoji: "🏛️", text: "Museum & gallery visits — art lovers and history buffs welcome" },
    { emoji: "🎮", text: "Gaming — online or offline gaming sessions with fellow gamers" },
    { emoji: "🌳", text: "Walking & city exploration — discover your city with a local guide" },
    { emoji: "🐕", text: "Dog walking — find a dog-loving companion for walks" },
    { emoji: "📖", text: "Language exchange — practice a new language with a native speaker" },
    { emoji: "🎲", text: "Board games & puzzles — game nights and puzzle-solving" },
    { emoji: "🤝", text: "Professional networking — connect with professionals in your field" },
    { emoji: "🍳", text: "Cooking together — learn new recipes or cook together" },
    { emoji: "🎪", text: "Festival & event companionship — enjoy festivals and celebrations" },
  ];

  const notAllowed = [
    { text: "Sexual services, escorting, or prostitution of any kind", severity: "high" },
    { text: "Any form of solicitation for sexual or adult services", severity: "high" },
    { text: "Illegal activities of any kind, including drug-related activities", severity: "high" },
    { text: "Harassment, bullying, intimidation, or threatening behaviour", severity: "high" },
    { text: "Hate speech, discrimination, or content promoting hatred based on identity", severity: "high" },
    { text: "Requests or activities involving minors in any way", severity: "critical" },
    { text: "Fraud, deception, or scam activities", severity: "high" },
    { text: "Weapons, threats of violence, or violent content", severity: "critical" },
    { text: "Explicit sexual content or pornography", severity: "high" },
    { text: "Exchange of money or payments outside the platform", severity: "medium" },
    { text: "Spoofing, fake identities, or impersonation", severity: "high" },
    { text: "Activities that violate the laws of India or any applicable jurisdiction", severity: "high" },
    { text: "Circumventing platform rules, verification requirements, or bans", severity: "high" },
  ];

  const violations = [
    { level: 1, title: "Warning", description: "Minor first-time violations such as inappropriate profile content or minor policy breaches. A warning is issued and recorded.", icon: "⚠️", color: "text-amber-300", bg: "bg-amber-500/10" },
    { level: 2, title: "Temporary Suspension", description: "Repeated or moderate violations. Account access is suspended for a period determined by the severity and frequency of violations.", icon: "🚫", color: "text-rose-300", bg: "bg-rose-500/10" },
    { level: 3, title: "Permanent Removal", description: "Serious or repeated violations result in permanent account removal. The user cannot rejoin using the same identity.", icon: "⛔", color: "text-red-300", bg: "bg-red-500/10" },
    { level: 4, title: "Report to Authorities", description: "Where required by law, we will report serious violations — including those involving minors, violence, or illegal activity — to relevant law enforcement authorities.", icon: "📋", color: "text-plus-purple-300", bg: "bg-plus-purple-500/10" },
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
              Community Guidelines
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-green-500/10 border border-plus-green-500/20 rounded-full text-plus-green-300 text-xs font-medium mb-4">
            <Shield size={11} />
            Rules & Expectations
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Community Guidelines
          </h1>
          <p className="text-white/30 max-w-2xl">
            These guidelines keep our community safe and enjoyable for everyone. By using PlusOne, you agree to follow these rules. Violations can result in account suspension or permanent removal.
          </p>
        </div>

        {/* Allowed */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <CheckCircle2 size={16} className="text-plus-green-300" />
            <h2 className="text-white font-semibold text-xl">What You CAN Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {allowed.map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <span className="text-lg shrink-0">{item.emoji}</span>
                <span className="text-white/40 text-sm leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Not Allowed */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <XCircle size={16} className="text-rose-300" />
            <h2 className="text-white font-semibold text-xl">What Is NOT Allowed — Zero Tolerance</h2>
          </div>
          <div className="space-y-2">
            {notAllowed.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-rose-500/5 border border-rose-500/10">
                <span className="text-rose-400/60 text-sm mt-0.5 shrink-0 w-5">{item.severity === "critical" ? "🚨" : item.severity === "high" ? "🔴" : "🟡"}</span>
                <span className={`text-sm ${item.severity === "critical" ? "text-white font-medium" : "text-white/50"}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Violation Process */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <AlertTriangle size={16} className="text-amber-300" />
            <h2 className="text-white font-semibold text-xl">What Happens When Rules Are Broken</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {violations.map((v) => (
              <div key={v.level} className={`rounded-xl border p-4 ${v.bg} border-current/20`}>
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{v.icon}</span>
                  <div>
                    <div className={`font-medium text-sm ${v.color}`}>Level {v.level}: {v.title}</div>
                    <p className="text-white/40 text-xs mt-1 leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Commitment */}
        <div className="rounded-2xl border border-plus-purple-500/15 bg-plus-purple-500/5 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={16} className="text-plus-purple-300" />
            <h2 className="text-white font-semibold text-lg">Our Safety Commitment</h2>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-4">
            PlusOne is built around trust and safety. Every feature — identity verification, in-app payments, chat moderation, emergency SOS, reporting tools — is designed to protect our community. We review all reports and take appropriate action. We may report serious violations to law enforcement where legally required.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Identity Verified",
              "In-App Payments Only",
              "AI + Human Chat Moderation",
              "24/7 Emergency Support",
              "Report & Block Tools",
              "Human Review of Reports",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/40">
                <CheckCircle2 size={10} className="text-plus-green-400/60" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl">
          <p className="text-white/20 text-xs text-center leading-relaxed">
            These Community Guidelines are legally enforceable rules. Violation may result in account suspension, removal, or legal action.
            © {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
