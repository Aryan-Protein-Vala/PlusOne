"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  DollarSign,
  Star,
  Clock,
  Users,
  Award,
  Zap,
  CheckCircle2,
  Sparkles,
  ThumbsUp,
  CreditCard,
  MapPin,
  Trophy,
  TrendingUp,
  Smartphone,
} from "lucide-react";

const earningExamples = [
  { hours: 10, rate: 500, earnings: 4250, label: "10 hrs/week at ₹500/hr" },
  { hours: 20, rate: 600, earnings: 10200, label: "20 hrs/week at ₹600/hr" },
  { hours: 15, rate: 800, earnings: 10200, label: "15 hrs/week at ₹800/hr" },
];

const steps = [
  { number: "01", title: "Create your account", desc: "Sign up for free. No credit card required.", icon: Users },
  { number: "02", title: "Verify your identity", desc: "Complete phone and ID verification. Takes ~5 minutes.", icon: Shield },
  { number: "03", title: "Create your profile", desc: "Add your photo, bio, activities, and set your hourly rate.", icon: Star },
  { number: "04", title: "Go live and start earning", desc: "Your profile goes live. Bookings start coming in.", icon: Zap },
];

export default function HostsPage() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen bg-surface-999">
      {/* Nav */}
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
              <ArrowRight size={14} style={{ transform: "rotate(180deg)" }} />
              Back
            </Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Become a Host</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-green-500/10 border border-plus-green-500/20 rounded-full text-plus-green-300 text-xs font-medium mb-4">
            <DollarSign size={11}/>
            Earn on your own terms
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Become a <span className="bg-gradient-to-r from-plus-blue-400 via-plus-purple-400 to-plus-pink-400 bg-clip-text text-transparent">PlusOne Host</span>
          </h1>
          <p className="text-white/30 text-lg max-w-2xl mx-auto">
            Turn your free time into income. Set your own rates, choose your activities, and meet interesting people in your city.
          </p>
          <div className="flex items-center justify-center gap-8 mt-6 text-sm">
            {[
              { icon: Shield, text: "100% Verified" },
              { icon: DollarSign, text: "Weekly Payouts" },
              { icon: Star, text: "Average ₹5,000/week" },
              { icon: Clock, text: "Set your hours" },
            ].map((stat) => (
              <div key={stat.text} className="flex items-center gap-1.5 text-white/30">
                <stat.icon size={12} className="text-plus-green-400/60"/>
                {stat.text}
              </div>
            ))}
          </div>
        </div>

        {/* Earning Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <Card padding="lg" className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <TrendingUp size={16} className="text-plus-green-300"/>
              <span className="text-plus-green-200 font-medium text-sm">Earning Potential</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {earningExamples.map((ex, i) => (
                <div key={i} className={`rounded-xl p-4 border transition-all ${i === 1 ? "border-plus-purple-500/30 bg-plus-purple-500/5" : "border-white/5 bg-white/[0.02]"}`}>
                  <div className="text-white/30 text-xs mb-1">{ex.label}</div>
                  <div className="text-2xl font-black text-white">{ex.earnings >= 1000 ? `₹${(ex.earnings/1000).toFixed(1)}K` : `₹${ex.earnings}`}</div>
                  <div className="text-white/20 text-xs mt-1">per month estimated</div>
                </div>
              ))}
            </div>
            <div className="text-xs text-white/20">*Estimates based on 15% platform commission. Actual earnings vary by demand, rating, and activity type.</div>
          </Card>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-white font-semibold text-xl flex items-center gap-2">
              <Sparkles size={16} className="text-plus-purple-300"/>
              How to Get Started
            </h2>
            {steps.map((step, i) => (
              <div key={step.number} className={`rounded-2xl border p-5 transition-all ${i <= currentStep ? "border-plus-purple-500/20 bg-plus-purple-500/5" : "border-white/5 bg-white/[0.02]"}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${i <= currentStep ? "bg-gradient-to-br from-plus-blue-500 to-plus-purple-500 text-white" : "bg-white/5 text-white/20"}`}>
                    {i < currentStep ? <CheckCircle2 size={14} className="text-white"/> : step.number}
                  </div>
                  <div>
                    <h3 className={`text-sm font-medium mb-0.5 ${i <= currentStep ? "text-white" : "text-white/30"}`}>{step.title}</h3>
                    <p className="text-white/30 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-white font-semibold text-xl flex items-center gap-2">
              <Award size={16} className="text-amber-300"/>
              Why Host on PlusOne?
            </h2>
            {[
              { icon: DollarSign, title: "Set Your Own Rate", desc: "Choose your hourly rate from ₹300+. Most hosts earn ₹300–₹1,500 per hour.", color: "text-plus-green-300", bg: "bg-plus-green-500/10" },
              { icon: Clock, title: "Work on Your Schedule", desc: "You choose when you're available. No fixed shifts, no boss.", color: "text-plus-blue-300", bg: "bg-plus-blue-500/10" },
              { icon: Users, title: "Meet Interesting People", desc: "Connect with people in your city who share your interests.", color: "text-plus-purple-300", bg: "bg-plus-purple-500/10" },
              { icon: CreditCard, title: "Secure In-App Payments", desc: "All payments happen on the platform. Money held in escrow until activity completion.", color: "text-amber-300", bg: "bg-amber-500/10" },
              { icon: Star, title: "Build Your Reputation", desc: "Every booking adds to your rating. Top-rated hosts earn more and get more bookings.", color: "text-amber-300", bg: "bg-amber-500/10" },
              { icon: Shield, title: "Safety First", desc: "Identity verification, chat moderation, emergency SOS, and 24/7 support.", color: "text-plus-green-300", bg: "bg-plus-green-500/10" },
            ].map((item, i) => (
              <div key={item.title} className={`rounded-2xl border p-4 transition-all ${i === 0 ? "border-plus-purple-500/20" : "border-white/5"} ${i === 0 ? "bg-plus-purple-500/5" : "bg-white/[0.02]"}`}>
                <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center mb-2`}><item.icon size={14} className={item.color}/></div>
                <h3 className="text-white text-sm font-medium mb-1">{item.title}</h3>
                <p className="text-white/30 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Card padding="lg" className="max-w-2xl mx-auto bg-gradient-to-br from-plus-purple-500/10 via-plus-pink-500/5 to-transparent border-plus-purple-500/20">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Ready to start earning?
            </h2>
            <p className="text-white/30 mb-6 max-w-md mx-auto">
              Join thousands of hosts already earning on PlusOne. Setup takes 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/auth/register?role=host">
                <Button size="xl" className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 text-lg px-10">
                  Start Hosting — It's Free
                  <ArrowRight size={18}/>
                </Button>
              </Link>
              <Button variant="secondary" size="xl" className="px-10">
                <Zap size={18}/>
                Learn More
              </Button>
            </div>
            <p className="text-white/15 text-xs mt-4">No upfront cost. No commitment. Cancel anytime.</p>
          </Card>
        </motion.div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-white/20">
          {[
            "Identity Verified",
            "In-App Payments",
            "24/7 Support",
            "Weekly Payouts",
            "Fraud Protection",
            "Community Guidelines",
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <CheckCircle2 size={10} className="text-plus-green-400/60"/>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
