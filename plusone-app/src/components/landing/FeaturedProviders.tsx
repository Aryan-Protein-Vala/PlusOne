"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { cn, formatPrice, formatNumber } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Clock,
  Star,
  Shield,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Zap,
  Award,
  ThumbsUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const providers = [
  {
    id: "prv_001",
    name: "Riya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    city: "Mumbai",
    hourlyRate: 600,
    rating: 4.98,
    reviewCount: 127,
    completed: 127,
    responseTime: "< 30 min",
    categories: ["Movies", "Coffee", "City Exploration", "Museums", "Photography"],
    isVerified: true,
    verificationLevel: "selfie",
    isFeatured: true,
    trustLevel: "Diamond",
    earnings: "₹82,400",
    badges: ["Top Earner", "Fast Responder"],
    lastActive: "Active now",
    bio: "Film buff & coffee addict. Let's explore Mumbai together.",
    color: "from-plus-purple-500 to-plus-pink-500",
  },
  {
    id: "prv_003",
    name: "Zara Ahmed",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    city: "Delhi NCR",
    hourlyRate: 700,
    rating: 4.99,
    reviewCount: 203,
    completed: 203,
    responseTime: "< 15 min",
    categories: ["Museums", "City Exploration", "Historical Tours", "Food Tours"],
    isVerified: true,
    verificationLevel: "selfie",
    isFeatured: true,
    trustLevel: "Diamond",
    earnings: "₹1.25L",
    badges: ["Top Rated", "Super Host"],
    lastActive: "Active now",
    bio: "Delhi historian. I'll show you the city you never knew existed.",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "prv_005",
    name: "Meera Iyer",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    city: "Goa",
    hourlyRate: 800,
    rating: 4.95,
    reviewCount: 156,
    completed: 156,
    responseTime: "< 45 min",
    categories: ["City Exploration", "Beach Activities", "Photography", "Food Tours"],
    isVerified: true,
    verificationLevel: "selfie",
    isFeatured: true,
    trustLevel: "Gold",
    earnings: "₹1.25L",
    badges: ["Top Earner", "Super Host"],
    lastActive: "Active now",
    bio: "Born in Goa. I know every beach, every cafe, every hidden spot.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "prv_002",
    name: "Karthik Venkat",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    city: "Bangalore",
    hourlyRate: 450,
    rating: 4.87,
    reviewCount: 89,
    completed: 89,
    responseTime: "< 1 hr",
    categories: ["Sports", "Gaming", "Coffee", "City Exploration"],
    isVerified: true,
    verificationLevel: "id",
    isFeatured: false,
    trustLevel: "Gold",
    earnings: "₹48,700",
    badges: ["New Host"],
    lastActive: "2 hours ago",
    bio: "Cricket, gaming, and food — your weekend companion in Bangalore.",
    color: "from-emerald-500 to-teal-500",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeaturedProviders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="providers" ref={ref} className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 text-sm text-plus-purple-300 font-medium mb-2">
              <Sparkles size={14} />
              <span>Top Providers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Popular in your city
            </h2>
          </div>
          <Link href="/providers" className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
            View all providers
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Provider Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {providers.map((provider) => (
            <motion.div key={provider.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link href={`/providers/${provider.id}`}>
                <div className="group bg-surface-900/60 border border-white/5 hover:border-white/10 hover:bg-surface-900/80 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 cursor-pointer">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Avatar with gradient border */}
                    <div className="relative shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${provider.color} p-[3px] flex-shrink-0`}
                      >
                        <div className="w-full h-full rounded-2xl bg-surface-800 p-0.5">
                          <Image
                            src={provider.avatar}
                            alt={provider.name}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover rounded-2xl"
                            unoptimized
                          />
                        </div>
                      </div>
                      {provider.isFeatured && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-plus-gold-500 rounded-full flex items-center justify-center" title="Featured">
                          <Star size={10} className="text-white fill-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-white text-base group-hover:text-plus-purple-300 transition-colors">
                          {provider.name}
                        </h3>
                        <Badge variant="success" size="sm" icon={<Shield size={10} />}>
                          {provider.isVerified ? "Verified" : "Unverified"}
                        </Badge>
                        <Badge variant="gold" size="sm">
                          {provider.trustLevel}
                        </Badge>
                        {provider.isFeatured && (
                          <Badge variant="warning" size="sm" icon={<Award size={10} />}>
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-white/30 text-xs mt-1">
                        <MapPin size={12} />
                        {provider.city}
                        <span className="mx-1">·</span>
                        <span className="flex items-center gap-1">
                          <Zap size={12} className="text-plus-green-400/60" />
                          {provider.lastActive}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-white/40 text-sm mb-4 line-clamp-2">{provider.bio}</p>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {provider.categories.slice(0, 4).map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-0.5 bg-white/5 border border-white/5 rounded-full text-xs text-white/40"
                      >
                        {cat}
                      </span>
                    ))}
                    {provider.categories.length > 4 && (
                      <span className="px-2.5 py-0.5 bg-plus-purple-500/10 border border-plus-purple-500/20 rounded-full text-xs text-plus-purple-300">
                        +{provider.categories.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center gap-4 py-3 border-t border-white/5 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <Rating rating={provider.rating} size="sm" showValue={false} />
                      <span className="text-sm font-semibold text-white">{provider.rating.toFixed(2)}</span>
                      <span className="text-xs text-white/30">({formatNumber(provider.reviewCount)})</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/30 text-xs">
                      <Clock size={12} />
                      Responds {provider.responseTime}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/30 text-xs">
                      <ThumbsUp size={12} />
                      {formatNumber(provider.completed)} activities
                    </div>
                    <div className="flex items-center gap-1.5 text-white/30 text-xs ml-auto">
                      <Award size={12} className="text-plus-gold-400/60" />
                      Earned {provider.earnings}
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                    <div>
                      <span className="text-xs text-white/30">From</span>
                      <p className="text-xl font-bold text-white">{formatPrice(provider.hourlyRate)}<span className="text-sm font-normal text-white/30">/hr</span></p>
                    </div>
                    <Button size="sm" variant="primary" className="group">
                      Book Now
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
