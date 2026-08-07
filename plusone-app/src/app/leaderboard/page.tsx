"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice, formatNumber } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Trophy, Star, Award, TrendingUp, Users, Shield, ArrowUp } from "lucide-react";
import { MOCK_PROVIDERS } from "@/lib/mock-data";

const topRated = [...MOCK_PROVIDERS].sort((a, b) => b.ratings.overall - a.ratings.overall).slice(0, 8);
const topEarners = [...MOCK_PROVIDERS].sort((a, b) => b.totalEarnings - a.totalEarnings).slice(0, 8);
const mostBooked = [...MOCK_PROVIDERS].sort((a, b) => b.completedActivities - a.completedActivities).slice(0, 8);

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

function LeaderboardRow({ provider, rank, type }: { provider: typeof MOCK_PROVIDERS[0]; rank: number; type: "rating" | "earnings" | "bookings" }) {
  const medals = ["🥇", "🥈", "🥉"];
  const medal = rank <= 3 ? medals[rank - 1] : `#${rank}`;

  return (
    <Link href={`/providers/${provider.id}`} className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${rank <= 3 ? "bg-gradient-to-br from-amber-500/20 to-amber-500/5 text-amber-300" : "bg-white/5 text-white/20"}`}>
        {medal}
      </div>
      <div className="w-10 h-10 rounded-full bg-surface-800 overflow-hidden shrink-0">
        <Image src={provider.avatar} alt={provider.name} width={40} height={40} className="w-full h-full object-cover" unoptimized />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-medium group-hover:text-plus-purple-200 transition-colors">{provider.name}</span>
          {provider.featured && <Trophy size={10} className="text-amber-400/60"/>}
          <span className="text-white/20 text-xs">{provider.city}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/20 mt-0.5">
          <span className="flex items-center gap-1"><Star size={9} className="text-amber-400/60"/>{provider.ratings.overall.toFixed(2)}★</span>
          <span>{formatNumber(provider.completedActivities)} activities</span>
        </div>
      </div>
      <div className="text-right shrink-0">
        {type === "rating" && (
          <>
            <div className="text-white font-bold text-sm">{provider.ratings.overall.toFixed(2)}</div>
            <div className="text-white/20 text-xs">{provider.ratings.count} reviews</div>
          </>
        )}
        {type === "earnings" && (
          <>
            <div className="text-plus-green-300 font-bold text-sm">{formatPrice(provider.totalEarnings)}</div>
            <div className="text-white/20 text-xs">total earned</div>
          </>
        )}
        {type === "bookings" && (
          <>
            <div className="text-white font-bold text-sm">{formatNumber(provider.completedActivities)}</div>
            <div className="text-white/20 text-xs">completed</div>
          </>
        )}
      </div>
    </Link>
  );
}

export default function LeaderboardPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"><ArrowRight size={14} style={{ transform: "rotate(180deg)" }}/>Back</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>Leaderboard</div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-300 text-xs font-medium mb-4">
            <Trophy size={11}/>
            Monthly Leaderboard
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Top PlusOne Hosts</h1>
          <p className="text-white/30">Updated weekly. Only verified, top-performing hosts make the cut.</p>
        </div>

        <div className="space-y-8">
          {[
            { title: "Top Rated", icon: Star, color: "text-amber-300", bg: "bg-amber-500/10", data: topRated, type: "rating" as const, subtitle: "Highest average rating" },
            { title: "Top Earners", icon: TrendingUp, color: "text-plus-green-300", bg: "bg-plus-green-500/10", data: topEarners, type: "earnings" as const, subtitle: "Highest earnings this month" },
            { title: "Most Booked", icon: Users, color: "text-plus-purple-300", bg: "bg-plus-purple-500/10", data: mostBooked, type: "bookings" as const, subtitle: "Most activities completed" },
          ].map((section) => (
            <div key={section.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <section.icon size={14} className={section.color}/>
                    <h2 className="text-white font-semibold text-base">{section.title}</h2>
                  </div>
                  <p className="text-white/20 text-xs">{section.subtitle}</p>
                </div>
                <Link href={`/providers?sort=${section.type}`} className="text-xs text-plus-purple-300 hover:text-plus-purple-200 flex items-center gap-1">
                  View all <ArrowRight size={10}/>
                </Link>
              </div>
              <div className="space-y-1">
                {section.data.map((provider, i) => (
                  <motion.div key={provider.id} variants={item}>
                    <LeaderboardRow provider={provider} rank={i + 1} type={section.type} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/hosts" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 rounded-2xl text-white font-semibold hover:scale-[1.02] transition-all shadow-lg shadow-plus-purple-500/25">
            Become a Top Host
            <ArrowRight size={16}/>
          </Link>
        </div>
      </div>
    </div>
  );
}
