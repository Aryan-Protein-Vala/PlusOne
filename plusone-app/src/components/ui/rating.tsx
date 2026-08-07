"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface RatingProps {
  rating: number;
  max?: number;
  showValue?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "default" | "gold" | "cyan" | "purple";
  interactive?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

const starColors = {
  default: { filled: "#fbbf24", half: "url(#goldGradient)", empty: "rgba(255,255,255,0.15)" },
  gold: { filled: "#fbbf24", half: "url(#goldGradient)", empty: "rgba(255,255,255,0.15)" },
  cyan: { filled: "#06b6d4", half: "url(#cyanGradient)", empty: "rgba(255,255,255,0.15)" },
  purple: { filled: "#8b5cf6", half: "url(#purpleGradient)", empty: "rgba(255,255,255,0.15)" },
};

const sizes = {
  sm: 14,
  md: 18,
  lg: 22,
  xl: 28,
};

export function Rating({
  rating,
  max = 5,
  showValue = true,
  size = "md",
  color = "gold",
  interactive = false,
  onChange,
  className,
}: RatingProps) {
  const s = sizes[size];
  const colors = starColors[color];
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = interactive && hoverRating ? hoverRating : rating;

  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <svg
        viewBox={`0 0 ${max * s} ${s + 4}`}
        width={max * s}
        height={s + 4}
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="goldGradient">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="cyanGradient">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="purpleGradient">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {Array.from({ length: max }).map((_, i) => {
          const starRating = displayRating;
          const isFilled = starRating > i + 1;
          const isHalf = starRating > i && starRating <= i + 1;

          return (
            <motion.path
              key={i}
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              transform={`translate(${i * s + s / 2}, 2) scale(${s / 24})`}
              fill={
                isFilled
                  ? colors.filled
                  : isHalf
                  ? "url(#goldGradient)"
                  : colors.empty
              }
              stroke={isFilled ? colors.filled : "rgba(255,255,255,0.1)"}
              strokeWidth={0.5}
              className="cursor-pointer transition-colors"
              {...(interactive && {
                onClick: () => onChange?.(i + 1),
                onMouseEnter: () => setHoverRating(i + 1),
                onMouseLeave: () => setHoverRating(0),
                whileHover: { scale: 1.15 },
                whileTap: { scale: 0.9 },
              })}
              style={{ transformOrigin: `${s / 2}px 2px` }}
            />
          );
        })}
      </svg>
      {showValue && (
        <span
          className="text-sm font-semibold ml-1.5"
          style={{ color: color === "gold" ? "#fbbf24" : color === "cyan" ? "#06b6d4" : color === "purple" ? "#a78bfa" : "white" }}
        >
          {rating.toFixed(2)}
        </span>
      )}
    </div>
  );
}

export function StarRatingDisplay({ rating, count, size = "md" }: { rating: number; count: number; size?: "sm" | "md" | "lg" }) {
  return (
    <div className="flex items-center gap-2">
      <Rating rating={rating} size={size} />
      <span className="text-white/40 text-sm">({count} reviews)</span>
    </div>
  );
}

export function RatingBars({
  communication,
  punctuality,
  friendliness,
  wouldMeetAgain,
}: {
  communication: number;
  punctuality: number;
  friendliness: number;
  wouldMeetAgain: number;
}) {
  const bars = [
    { label: "Communication", value: communication },
    { label: "Punctuality", value: punctuality },
    { label: "Friendliness", value: friendliness },
    { label: "Would Meet Again", value: wouldMeetAgain },
  ];

  return (
    <div className="space-y-3">
      {bars.map((bar) => (
        <div key={bar.label}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-white/60">{bar.label}</span>
            <span className="text-white/80 font-medium">
              {bar.value === wouldMeetAgain ? `${bar.value}%` : `${bar.value.toFixed(1)}`}
            </span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-plus-purple-500 to-plus-pink-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${bar.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
