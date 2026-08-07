"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  MapPin,
  Share2,
  Phone,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lock,
  Eye,
  CreditCard,
  FileText,
  Users,
  Flag as Report,
  Bookmark,
  ChevronRight,
  ArrowRight,
  Star,
  Heart,
  Radio,
  Send,
} from "lucide-react";

const safetyTips = [
  {
    icon: MapPin,
    title: "Meet in public places",
    description: "Always choose public, well-lit locations for your first few meetups. Coffee shops, cinemas, museums, and restaurants are great options.",
    color: "text-plus-blue-300",
    bg: "bg-plus-blue-500/10",
  },
  {
    icon: Share2,
    title: "Share your live location",
    description: "Share your live location with a trusted friend or family member during the meeting. It's a simple step that adds peace of mind.",
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Phone,
    title: "Tell someone where you're going",
    description: "Let a trusted person know who you're meeting, where, and when you expect to be back.",
    color: "text-plus-purple-300",
    bg: "bg-plus-purple-500/10",
  },
  {
    icon: CreditCard,
    title: "Keep payments on-platform",
    description: "All payments should happen through PlusOne. Never transfer money outside the platform — it voids your protection.",
    color: "text-amber-300",
    bg: "bg-amber-500/10",
  },
  {
    icon: ShieldAlert,
    title: "Use the Emergency SOS button",
    description: "Every active booking has an SOS button. One tap to share your location, alert your emergency contact, and notify our team.",
    color: "text-rose-300",
    bg: "bg-rose-500/10",
  },
  {
    icon: FileText,
    title: "Respect boundaries and guidelines",
    description: "Follow our Community Guidelines. No sexual services, no harassment, no illegal activity. Violations can result in account suspension or removal.",
    color: "text-plus-green-300",
    bg: "bg-plus-green-500/10",
  },
];

const guidelines = {
  allowed: [
    { icon: "🎬", text: "Movies & cinema outings" },
    { icon: "☕", text: "Cafes & coffee dates" },
    { icon: "✈️", text: "Travel companions" },
    { icon: "📚", text: "Study sessions" },
    { icon: "💪", text: "Sports & fitness activities" },
    { icon: "🛍️", text: "Shopping companions" },
    { icon: "📸", text: "Photography walks" },
    { icon: "🎵", text: "Concerts & events" },
    { icon: "🏛️", text: "Museum visits" },
    { icon: "🎮", text: "Gaming sessions" },
    { icon: "🌳", text: "Walking & city exploration" },
    { icon: "🐕", text: "Dog walking" },
    { icon: "📖", text: "Language exchange" },
    { icon: "🎲", text: "Board games" },
    { icon: "🤝", text: "Networking" },
  ],
  notAllowed: [
    { icon: "🚫", text: "Sexual services or escorting" },
    { icon: "🚫", text: "Prostitution or solicitation" },
    { icon: "🚫", text: "Illegal activities" },
    { icon: "🚫", text: "Drugs or substance-related activities" },
    { icon: "🚫", text: "Harassment or bullying" },
    { icon: "🚫", text: "Hate speech or discrimination" },
    { icon: "🚫", text: "Fraud or deception" },
    { icon: "🚫", text: "Requests involving minors" },
    { icon: "🚫", text: "Weapons or threats" },
    { icon: "🚫", text: "Explicit content exchange" },
    { icon: "🚫", text: "Anything outside lawful social activities" },
  ],
};

const emergencySteps = [
  { step: "1", title: "Tap SOS", description: "Press the SOS button in your active booking screen." },
  { step: "2", title: "Share Location", description: "Your live location is automatically shared with our safety team." },
  { step: "3", title: "Alert Contact", description: "Your emergency contact receives an alert with your location." },
  { step: "4", title: "Support Responds", description: "Our 24/7 safety team responds within 2 minutes." },
];

export default function SafetyPage() {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [emergencyActivated, setEmergencyActivated] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-plus-green-500/20 flex items-center justify-center">
          <ShieldCheck size={18} className="text-plus-green-300" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Safety Center</h1>
          <p className="text-white/30">We designed every feature with your safety in mind.</p>
        </div>
      </div>

      {/* Emergency Button - Always Visible */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card padding="lg" className="bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent border-rose-500/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => setShowEmergencyModal(true)}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:scale-105 active:scale-95 transition-all duration-200 shrink-0"
            >
              <AlertTriangle size={24} className="text-white" />
            </button>
            <div className="flex-1">
              <h2 className="text-white font-bold text-lg mb-1">Emergency Support</h2>
              <p className="text-white/40 text-sm max-w-lg">
                If you feel unsafe at any point during a booking, tap the SOS button. Your location will be shared with our safety team and your emergency contact immediately.
              </p>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5 text-xs text-plus-green-300">
                  <span className="w-1.5 h-1.5 bg-plus-green-400 rounded-full inline-block animate-pulse" />
                  24/7 Support
                </div>
                <span className="text-white/20">·</span>
                <div className="flex items-center gap-1.5 text-xs text-white/30">
                  <Shield size={10} />
                  Average response: 2 min
                </div>
              </div>
            </div>
            <Button variant="danger" size="sm" onClick={() => setShowEmergencyModal(true)}>
              <AlertTriangle size={14} />
              Activate SOS
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Safety Tips */}
      <div className="mb-10">
        <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
          <Shield size={16} className="text-plus-purple-300" />
          Safety Tips for Every Booking
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {safetyTips.map((tip) => (
            <Card key={tip.title} padding="md" hover className="group">
              <div className={cn("w-8 h-8 rounded-lg", tip.bg, "flex items-center justify-center mb-3")}>
                <tip.icon size={16} className={tip.color} />
              </div>
              <h3 className="text-white text-sm font-medium mb-1">{tip.title}</h3>
              <p className="text-white/30 text-xs leading-relaxed">{tip.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Emergency Quick Guide */}
      <Card padding="lg" className="mb-8 bg-white/[0.02]">
        <div className="flex items-center gap-2 mb-4">
          <Radio size={16} className="text-plus-red-300" />
          <h2 className="text-white font-semibold text-base">Emergency Quick Guide</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {emergencySteps.map(({ step, title, description }) => (
            <div key={step} className="text-center">
              <div className="w-8 h-8 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-sm font-bold flex items-center justify-center mx-auto mb-2">
                {step}
              </div>
              <div className="text-white text-sm font-medium mb-1">{title}</div>
              <div className="text-white/30 text-xs leading-relaxed">{description}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Community Guidelines */}
      <div className="mb-8">
        <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
          <FileText size={16} className="text-plus-purple-300" />
          Community Guidelines
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Allowed */}
          <Card padding="md" className="bg-plus-green-500/5 border-plus-green-500/10">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 size={14} className="text-plus-green-300" />
              <h3 className="text-plus-green-200 font-medium text-sm">Allowed Activities</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {guidelines.allowed.map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-white/40 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Not Allowed */}
          <Card padding="md" className="bg-rose-500/5 border-rose-500/10">
            <div className="flex items-center gap-2 mb-4">
              <XCircle size={14} className="text-rose-300" />
              <h3 className="text-rose-200 font-medium text-sm">Not Allowed — Zero Tolerance</h3>
            </div>
            <div className="space-y-1.5">
              {guidelines.notAllowed.map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span className="text-rose-400/60">{item.icon}</span>
                  <span className="text-white/40 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-rose-500/10">
              <p className="text-xs text-rose-300/60">
                Violations may result in: Warning → Temporary Suspension → Permanent Removal → Report to Authorities
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Safety Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: ShieldCheck, title: "Identity Verification", desc: "Government ID, selfie & liveness detection on all providers.", color: "text-plus-green-300", bg: "bg-plus-green-500/10" },
          { icon: CreditCard, title: "In-App Payments Only", desc: "Money held in escrow until activity completion. No off-platform transfers.", color: "text-plus-blue-300", bg: "bg-plus-blue-500/10" },
          { icon: MapPin, title: "Live Location Sharing", desc: "Share your live location with a trusted contact during every booking.", color: "text-cyan-300", bg: "bg-cyan-500/10" },
          { icon: Report, title: "Report & Block Any User", desc: "Instant reporting with human review. Repeat offenders removed quickly.", color: "text-amber-300", bg: "bg-amber-500/10" },
          { icon: Eye, title: "Profile Moderation", desc: "AI + human review of all profiles before they go live.", color: "text-plus-purple-300", bg: "bg-plus-purple-500/10" },
          { icon: Lock, title: "End-to-End Encrypted Chat", desc: "Your messages stay private. Only activated after confirmed booking.", color: "text-plus-pink-300", bg: "bg-plus-pink-500/10" },
        ].map((feature) => (
          <Card key={feature.title} padding="md" hover className="group">
            <div className={cn("w-8 h-8 rounded-lg", feature.bg, "flex items-center justify-center mb-3")}>
              <feature.icon size={16} className={feature.color} />
            </div>
            <h3 className="text-white text-sm font-medium mb-1">{feature.title}</h3>
            <p className="text-white/30 text-xs leading-relaxed">{feature.desc}</p>
          </Card>
        ))}
      </div>

      {/* Quick Safety Resources */}
      <Card padding="lg" className="mt-8">
        <h2 className="text-white font-semibold text-base mb-4">Quick Safety Resources</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: Phone, label: "Emergency Contact", href: "tel:+911123456789", color: "text-rose-300", bg: "bg-rose-500/10" },
            { icon: Share2, label: "Share Live Location", desc: "Quick share", color: "text-cyan-300", bg: "bg-cyan-500/10" },
            { icon: Report, label: "Report a User", desc: "To safety team", color: "text-amber-300", bg: "bg-amber-500/10" },
            { icon: FileText, label: "Community Guidelines", desc: "Full policy", color: "text-plus-purple-300", bg: "bg-plus-purple-500/10" },
          ].map((resource) => (
            <button
              key={resource.label}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all hover:-translate-y-0.5 text-center",
                resource.bg,
                "border-transparent hover:border-current/20"
              )}
            >
              <div className={cn("w-9 h-9 rounded-xl", resource.bg, "flex items-center justify-center")}>
                <resource.icon size={16} className={resource.color} />
              </div>
              <span className="text-white text-xs font-medium">{resource.label}</span>
              <span className="text-white/20 text-[10px]">{resource.desc || ""}</span>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
