"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import {
  Search,
  UserCheck,
  Calendar,
  CreditCard,
  MessageSquare,
  MapPin,
  Star,
  Shield,
  ArrowRight,
  Sparkles,
  Lock,
  Phone,
  AlertTriangle,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search & Discover",
    description: "Browse verified providers in your city. Filter by activity, price, rating, or availability. See their badges, reviews, and earnings.",
    color: "from-plus-blue-500/20 to-blue-500/10",
    border: "border-plus-blue-500/15",
    text: "text-plus-blue-300",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Check Their Profile",
    description: "Every provider is identity-verified. See their verification badges, trust score, past reviews, response time, and what other users say about them.",
    color: "from-plus-purple-500/20 to-purple-500/10",
    border: "border-plus-purple-500/15",
    text: "text-plus-purple-300",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Book & Pay Safely",
    description: "Choose your date, time, and duration. Review the safety reminder. Pay through our secure platform — money is held in escrow until the activity is done.",
    color: "from-plus-pink-500/20 to-rose-500/10",
    border: "border-plus-pink-500/15",
    text: "text-plus-pink-300",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Connect & Meet",
    description: "Chat with your activity partner before meeting. Share your live location with a trusted friend. Meet in a public place. The platform is there if you need help.",
    color: "from-cyan-500/20 to-sky-500/10",
    border: "border-cyan-500/15",
    text: "text-cyan-300",
  },
  {
    number: "05",
    icon: Star,
    title: "Rate & Review",
    description: "After the activity, rate your experience. Would you meet them again? Your feedback helps the community and builds trust for everyone.",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/15",
    text: "text-amber-300",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-plus-purple-500/[0.02] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-plus-purple-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-purple-500/10 border border-plus-purple-500/20 rounded-full text-plus-purple-300 text-sm mb-4">
            <Sparkles size={12} />
            How PlusOne works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            From "I'm alone" to "Let's go"
          </h2>
          <p className="text-white/30 text-lg max-w-xl mx-auto">
            Five simple steps. No awkwardness. No surprises. Just real people doing real things.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div
                className={cn(
                  "group relative rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1",
                  step.color,
                  step.border,
                  "bg-white/[0.02] hover:bg-white/[0.035]",
                )}
              >
                {/* Glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Step number & icon */}
                <div className="flex items-start gap-4 mb-4 relative">
                  <div
                    className={cn(
                      "w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0",
                      step.color,
                    )}
                  >
                    <step.icon size={20} className={cn("text-white", step.text)} />
                  </div>
                  <span className={cn("text-xs font-mono font-bold", step.text)}>
                    {step.number}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2 relative">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed relative">
                  {step.description}
                </p>

                <div className={cn("mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs relative", step.text)}>
                  <Lock size={12} className="opacity-50" />
                  <span className="text-white/30">Secure · Verified · Safe</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#find" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 rounded-2xl text-white font-semibold text-base shadow-2xl shadow-plus-purple-500/25 hover:shadow-plus-purple-500/40 hover:scale-[1.02] transition-all duration-300">
            Find Your PlusOne
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
