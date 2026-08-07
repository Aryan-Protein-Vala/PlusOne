"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Star, Shield, Award, TrendingUp, Users, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "12,400+", label: "Active Members", icon: Users, color: "text-white/80" },
  { value: "2,847", label: "Activities Completed", icon: CheckCircle2, color: "text-plus-green-300" },
  { value: "4.97", label: "Average Rating", icon: Star, color: "text-amber-300" },
  { value: "99.2%", label: "Safe Booking Rate", icon: Shield, color: "text-cyan-300" },
];

const leaders = [
  { name: "Riya Sharma", city: "Mumbai", rating: 4.98, earnings: "₹82,400", level: "💎 Diamond" },
  { name: "Zara Ahmed", city: "Delhi", rating: 4.99, earnings: "₹1.25L", level: "💎 Diamond" },
  { name: "Meera Iyer", city: "Goa", rating: 4.95, earnings: "₹1.25L", level: "🥇 Gold" },
  { name: "Karthik Venkat", city: "Bangalore", rating: 4.87, earnings: "₹48,700", level: "🥇 Gold" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-transparent via-plus-purple-500/[0.015] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={item} className="text-center">
              <stat.icon size={24} className={cn(stat.color, "mx-auto mb-3")} />
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-white/30 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Top Earners */}
        <div className="rounded-2xl border border-white/5 bg-surface-900/50 p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-amber-300 font-medium mb-1">
                <Award size={14} />
                Top Earners This Month
              </div>
              <h3 className="text-white font-semibold text-xl">Top creators are earning big</h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-amber-300">₹2.8L</div>
              <div className="text-xs text-white/30">Total earned by top 4</div>
            </div>
          </div>

          <div className="space-y-3">
            {leaders.map((leader, i) => (
              <div
                key={leader.name}
                className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200"
              >
                <span className="text-lg font-black text-white/20 w-6 text-center">{i + 1}</span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center text-lg shrink-0">
                  {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : "4"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium text-sm">{leader.name}</span>
                    <span className="text-white/20 text-xs">{leader.level}</span>
                  </div>
                  <div className="text-white/30 text-xs">{leader.city} · {leader.rating}★ · {leader.earnings} earned</div>
                </div>
                <TrendingUp size={14} className="text-plus-green-400/60" />
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-white/20 text-xs">
          {[
            "Government ID Verified",
            "Liveness Detection",
            "Phone Verified",
            "In-App Payments",
            "24/7 Trust & Safety",
            "Audit Log",
            "Human Moderation",
            "Encrypted Chat",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <Shield size={12} className="text-plus-green-400/60" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
