"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Plus, Shield, Star } from "lucide-react";

const memes = [
  { text: "Your friend cancelled?", sub: "We've got you." },
  { text: "Movie > Excuses.", sub: "Book. Watch. Repeat." },
  { text: "Go touch grass.", sub: "We'll find you a walking buddy." },
  { text: "No more 'Who's coming?'", sub: "We answer that." },
  { text: "Our reply time is faster than your situationship.", sub: "98% respond in under 1 hour." },
  { text: "Life's too short to miss the movie.", sub: "Find someone. Go watch it." },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-b from-plus-pink-500/10 via-plus-purple-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Meme quotes */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {memes.map((meme, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.035] hover:border-white/10 transition-all duration-300"
            >
              <p className="text-white font-medium text-base mb-1">"{meme.text}"</p>
              <p className="text-white/30 text-sm">{meme.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-6"
        >
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Ready to stop<br />
              <span className="bg-gradient-to-r from-plus-blue-400 via-plus-purple-400 to-plus-pink-400 bg-clip-text text-transparent">
                waiting and start doing?
              </span>
            </h2>
            <p className="text-white/40 text-lg">
              Join 12,000+ people who found their plus one.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/auth/register">
              <Button size="xl" className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 text-lg px-10">
                <Sparkles size={20} />
                Find My PlusOne
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/hosts">
              <Button variant="secondary" size="xl" className="px-10">
                <Plus size={20} />
                Become a Host
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Features strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
        >
          {[
            { icon: Shield, text: "Identity Verified" },
            { icon: Star, text: "4.97 Average Rating" },
            { icon: Shield, text: "Safe & Secure" },
          ].map((feature) => (
            <div key={feature.text} className="flex items-center gap-2 text-white/30">
              <feature.icon size={14} className="text-plus-green-400/60" />
              <span>{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
