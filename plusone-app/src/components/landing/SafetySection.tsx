"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Phone,
  MapPin,
  Share2,
  AlertTriangle,
  Smile,
  Star,
  CheckCircle2,
  XCircle,
  Users,
  Award,
  Eye,
  CreditCard,
  FileText,
} from "lucide-react";

const safetyFeatures = [
  {
    icon: Shield,
    title: "Identity Verification",
    description: "All providers verify their identity with government ID, selfie, and liveness checks. Badges shown on every profile.",
    color: "text-plus-green-300",
    bg: "bg-plus-green-500/10",
    border: "border-plus-green-500/20",
  },
  {
    icon: CreditCard,
    title: "In-App Payments Only",
    description: "All payments happen inside the platform. No cash, no external transfers. Your money is held safely until the activity is confirmed complete.",
    color: "text-plus-blue-300",
    bg: "bg-plus-blue-500/10",
    border: "border-plus-blue-500/20",
  },
  {
    icon: MapPin,
    title: "Live Location Sharing",
    description: "During every booking, you can share your live location with a trusted contact. Safety first, always.",
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Phone,
    title: "Emergency SOS Button",
    description: "Every booking comes with an emergency button. One tap to share your location, contact your emergency person, or report an issue.",
    color: "text-plus-pink-300",
    bg: "bg-plus-pink-500/10",
    border: "border-plus-pink-500/20",
  },
  {
    icon: FileText,
    title: "Community Guidelines",
    description: "Clear rules that every user agrees to. No sexual services. No harassment. No illegal activity. Violations mean removal.",
    color: "text-amber-300",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: ShieldAlert,
    title: "Report & Block",
    description: "See something wrong? Report any user instantly. Our team reviews all reports. Repeat bad actors are banned.",
    color: "text-rose-300",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

const doList = [
  "Meet in public places whenever possible",
  "Tell a trusted friend where you're going",
  "Share your live location during the meetup",
  "Keep all communication and payments on the platform",
  "Respect other users' boundaries",
  "Report anything suspicious immediately",
];

const dontList = [
  "Request or offer sexual services",
  "Exchange money outside the platform",
  "Harass, threaten, or bully other users",
  "Share explicit content",
  "Use fake identities or false information",
  "Involve minors in any activity",
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function SafetySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="safety" ref={ref} className="relative py-24 sm:py-32 bg-surface-950/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-b from-plus-green-500/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-green-500/10 border border-plus-green-500/20 rounded-full text-plus-green-300 text-sm mb-4">
            <ShieldCheck size={12} />
            Safety is our #1 priority
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Built different. Built safe.
          </h2>
          <p className="text-white/30 text-lg max-w-2xl mx-auto">
            We don't just say we're safe. We design for it. Every feature, every policy, every decision — through the lens of "would I feel comfortable sending a friend?"
          </p>
        </motion.div>

        {/* Safety Features */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {safetyFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className={cn(
                "group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1",
                feature.bg,
                feature.border,
                "bg-white/[0.02]"
              )}
            >
              <feature.icon size={20} className={cn("mb-3", feature.color)} />
              <h3 className="text-white font-semibold text-sm mb-1.5">{feature.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Do's and Don'ts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* DO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="rounded-2xl border border-plus-green-500/15 bg-plus-green-500/5 p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-plus-green-500/20 flex items-center justify-center">
                <CheckCircle2 size={16} className="text-plus-green-300" />
              </div>
              <h3 className="text-plus-green-300 font-semibold text-base">DO This</h3>
            </div>
            <ul className="space-y-3">
              {doList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-plus-green-400/60 mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DON'T */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-2xl border border-rose-500/15 bg-rose-500/5 p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center">
                <XCircle size={16} className="text-rose-300" />
              </div>
              <h3 className="text-rose-300 font-semibold text-base">Don't Do This</h3>
            </div>
            <ul className="space-y-3">
              {dontList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle size={14} className="text-rose-400/60 mt-0.5 shrink-0" />
                  <span className="text-white/50 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Safety Reminder Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 rounded-2xl border border-white/5 bg-surface-800/50 p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-plus-purple-500/20 flex items-center justify-center shrink-0">
              <AlertTriangle size={18} className="text-plus-purple-300" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Safety Reminder Before Every Booking</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                You're meeting another independent adult through our platform. Please meet in public places, tell a trusted friend where you're going, share your live location, and avoid transferring money outside the platform.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/30">
                <Shield size={12} />
                <span>This reminder appears before every single booking. No exceptions.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
