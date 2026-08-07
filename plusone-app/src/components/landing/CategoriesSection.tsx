"use client";

import { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const categories = [
  { id: "movies", label: "Movies", icon: "🎬", color: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/20", text: "text-purple-300", count: 847 },
  { id: "coffee", label: "Coffee", icon: "☕", color: "from-amber-500/20 to-orange-500/20", border: "border-amber-500/20", text: "text-amber-300", count: 623 },
  { id: "study", label: "Study", icon: "📚", color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-500/20", text: "text-blue-300", count: 412 },
  { id: "gaming", label: "Gaming", icon: "🎮", color: "from-pink-500/20 to-rose-500/20", border: "border-pink-500/20", text: "text-pink-300", count: 389 },
  { id: "gym", label: "Gym", icon: "💪", color: "from-emerald-500/20 to-green-500/20", border: "border-emerald-500/20", text: "text-emerald-300", count: 556 },
  { id: "travel", label: "Travel", icon: "✈️", color: "from-sky-500/20 to-blue-500/20", border: "border-sky-500/20", text: "text-sky-300", count: 298 },
  { id: "museum", label: "Museum", icon: "🏛️", color: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/20", text: "text-violet-300", count: 234 },
  { id: "photography", label: "Photography", icon: "📸", color: "from-teal-500/20 to-cyan-500/20", border: "border-teal-500/20", text: "text-teal-300", count: 378 },
  { id: "cooking", label: "Cooking", icon: "🍳", color: "from-red-500/20 to-rose-500/20", border: "border-red-500/20", text: "text-red-300", count: 198 },
  { id: "shopping", label: "Shopping", icon: "🛍️", color: "from-pink-500/20 to-fuchsia-500/20", border: "border-pink-500/20", text: "text-pink-300", count: 312 },
  { id: "language", label: "Language Exchange", icon: "🗣️", color: "from-cyan-500/20 to-sky-500/20", border: "border-cyan-500/20", text: "text-cyan-300", count: 167 },
  { id: "concerts", label: "Concerts", icon: "🎵", color: "from-violet-500/20 to-fuchsia-500/20", border: "border-violet-500/20", text: "text-violet-300", count: 245 },
];

export default function CategoriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="activities" ref={ref} className="relative py-24 sm:py-32 bg-surface-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 text-sm text-plus-blue-300 font-medium mb-2">
              <Sparkles size={14} />
              <span>100+ Activity Types</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What do you feel like doing?
            </h2>
            <p className="text-white/30 mt-2 max-w-lg">
              From movies to museums, coffee to concerts — find someone who wants to do the same thing.
            </p>
          </div>
          <Link
            href="/activities"
            className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors shrink-0"
          >
            All activities
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35 }}
            >
              <Link
                href={`/activities?category=${cat.id}`}
                className={cn(
                  "group relative flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                  cat.color,
                  cat.border,
                  "bg-white/[0.02] hover:bg-white/[0.04]"
                )}
              >
                {/* Background decoration on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div
                  className={cn(
                    "text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                    cat.text
                  )}
                >
                  {cat.icon}
                </div>
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors text-center">
                  {cat.label}
                </span>
                <span className="text-[10px] text-white/20">{formatCount(cat.count)} bookings</span>
              </Link>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
  );
}

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K+`;
  return `${n}+`;
}
