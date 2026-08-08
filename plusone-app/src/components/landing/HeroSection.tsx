"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Shield,
  MapPin,
  Clock,
  Star,
  Plus,
  ChevronDown,
  Zap,
  Users,
  Award,
} from "lucide-react";

const searchCategories = [
  { id: "movies", label: "Movies", icon: "🎬" },
  { id: "coffee", label: "Coffee", icon: "☕" },
  { id: "study", label: "Study", icon: "📚" },
  { id: "gaming", label: "Gaming", icon: "🎮" },
  { id: "gym", label: "Gym", icon: "💪" },
  { id: "travel", label: "Travel", icon: "✈️" },
  { id: "museum", label: "Museum", icon: "🏛️" },
  { id: "photography", label: "Photography", icon: "📸" },
];

export default function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchActive, setSearchActive] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.12)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(139,92,246,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(236,72,153,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-plus-purple-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-plus-blue-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-48 h-48 bg-plus-pink-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 px-4 py-2 bg-plus-green-500/10 border border-plus-green-500/20 rounded-full text-plus-green-300 text-sm mb-8"
        >
          <Sparkles size={14} />
          <span>Trusted by <strong className="text-white">12,000+</strong> active users nationwide</span>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6">
            <span className="text-white">Find someone</span>
            <br />
            <span className="bg-gradient-to-r from-plus-blue-400 via-plus-purple-400 to-plus-pink-400 bg-clip-text text-transparent">
              for any plan.
            </span>
          </h1>
          <p className="text-white/40 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Your friend cancelled again? <span className="text-white/70">We won't.</span>
            Find verified people to watch movies, grab coffee, explore your city, or share any activity.
          </p>
        </motion.div>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="bg-surface-900/80 border border-white/10 backdrop-blur-2xl rounded-3xl p-2 shadow-2xl shadow-black/30">
            <div className="bg-surface-800/50 rounded-2xl p-4 sm:p-6">
              {/* Search Tabs */}
              <div className="flex gap-1 mb-4 bg-white/5 rounded-xl p-1 w-fit">
                <button
                  onClick={() => { setSelectedCategory(null); setSelectedCity(null); }}
                  className={cn(
                    "px-4 py-2 text-sm rounded-lg font-medium transition-all",
                    !selectedCategory && !selectedCity
                      ? "bg-white/10 text-white shadow-sm"
                      : "text-white/50 hover:text-white/80"
                  )}
                >
                  All activities
                </button>
                <button
                  onClick={() => { setSelectedCategory("today"); setSelectedCity(null); }}
                  className={cn(
                    "px-4 py-2 text-sm rounded-lg font-medium transition-all",
                    selectedCategory === "today"
                      ? "bg-plus-purple-500/20 text-plus-purple-300 shadow-sm"
                      : "text-white/50 hover:text-white/80"
                  )}
                >
                  Available today
                </button>
                <button
                  onClick={() => { setSelectedCategory("verified"); setSelectedCity(null); }}
                  className={cn(
                    "px-4 py-2 text-sm rounded-lg font-medium transition-all",
                    selectedCategory === "verified"
                      ? "bg-plus-green-500/20 text-plus-green-300 shadow-sm"
                      : "text-white/50 hover:text-white/80"
                  )}
                >
                  Verified only
                </button>
              </div>

              {/* Search Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div>
                  <label className="text-xs text-white/30 mb-1.5 block font-medium">What activity?</label>
                  <div className="relative">
                    <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                    <select
                      value={selectedCategory || ""}
                      onChange={(e) => setSelectedCategory(e.target.value || null)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-plus-purple-500/30 focus:border-plus-purple-500/50 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-surface-800">Any activity</option>
                      {searchCategories.map((cat) => (
                        <option key={cat.id} value={cat.id} className="bg-surface-800">
                          {cat.icon} {cat.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-white/30 mb-1.5 block font-medium">Where?</label>
                  <div className="relative">
                    <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                    <select
                      value={selectedCity || ""}
                      onChange={(e) => setSelectedCity(e.target.value || null)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-plus-purple-500/30 focus:border-plus-purple-500/50 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-surface-800">Any city</option>
                      <option value="mumbai" className="bg-surface-800">Mumbai</option>
                      <option value="delhi" className="bg-surface-800">Delhi NCR</option>
                      <option value="bangalore" className="bg-surface-800">Bangalore</option>
                      <option value="pune" className="bg-surface-800">Pune</option>
                      <option value="hyderabad" className="bg-surface-800">Hyderabad</option>
                      <option value="goa" className="bg-surface-800">Goa</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-white/30 mb-1.5 block font-medium">When?</label>
                  <div className="relative">
                    <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                    <input
                      type="date"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-plus-purple-500/30 focus:border-plus-purple-500/50 [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 text-base"
                  onClick={() => setSearchActive(true)}
                >
                  <Sparkles size={18} />
                  Find My PlusOne
                  <ArrowRight size={16} />
                </Button>
                <Link href="/app/earn">
                  <Button variant="secondary" size="lg" className="flex-1 sm:flex-none">
                    <Plus size={16} />
                    Earn money
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-16 text-center"
        >
          {[
            { value: "12K+", label: "Active Members", icon: Users },
            { value: "4.97★", label: "Average Rating", icon: Star },
            { value: "2,800+", label: "Bookings Completed", icon: Award },
            { value: "100%", label: "Safe & Verified", icon: Shield },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="flex flex-col items-center gap-1"
            >
              <div className="flex items-center gap-1.5 text-white/30 mb-1">
                <stat.icon size={14} />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white">{stat.value}</span>
              <span className="text-xs text-white/30">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll down CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <Link href="#features" className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors group">
            See how it works
            <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
