import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatCurrency(amount: number, currency = "INR"): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
  }).format(amount);
}

export function formatNumber(num: number): string {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
}

export function formatRating(rating: number): string {
  return rating.toFixed(2);
}

export function timeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
}

export function getTrustLevel(score: number): {
  level: "Bronze" | "Silver" | "Gold" | "Diamond";
  color: string;
  icon: string;
} {
  if (score >= 95) return { level: "Diamond", color: "#06b6d4", icon: "💎" };
  if (score >= 85) return { level: "Gold", color: "#fbbf24", icon: "🥇" };
  if (score >= 70) return { level: "Silver", color: "#9ca3af", icon: "🥈" };
  return { level: "Bronze", color: "#d97706", icon: "🥉" };
}

export const CATEGORIES = [
  { id: "movies", label: "Movies", icon: "🎬", color: "#8b5cf6" },
  { id: "coffee", label: "Coffee", icon: "☕", color: "#d97706" },
  { id: "study", label: "Study", icon: "📚", color: "#3b82f6" },
  { id: "gaming", label: "Gaming", icon: "🎮", color: "#ec4899" },
  { id: "gym", label: "Gym", icon: "💪", color: "#10b981" },
  { id: "walking", label: "Walking", icon: "🚶", color: "#06b6d4" },
  { id: "travel", label: "Travel", icon: "✈️", color: "#f97316" },
  { id: "museum", label: "Museum", icon: "🏛️", color: "#6366f1" },
  { id: "photography", label: "Photography", icon: "📸", color: "#14b8a6" },
  { id: "cooking", label: "Cooking", icon: "🍳", color: "#ef4444" },
  { id: "shopping", label: "Shopping", icon: "🛍️", color: "#ec4899" },
  { id: "language", label: "Language Exchange", icon: "🗣️", color: "#06b6d4" },
  { id: "boardgames", label: "Board Games", icon: "🎲", color: "#f59e0b" },
  { id: "concerts", label: "Concerts", icon: "🎵", color: "#8b5cf6" },
  { id: "networking", label: "Networking", icon: "🤝", color: "#3b82f6" },
  { id: "dogwalking", label: "Dog Walking", icon: "🐕", color: "#10b981" },
  { id: "cycling", label: "Cycling", icon: "🚴", color: "#06b6d4" },
  { id: "sports", label: "Sports", icon: "⚽", color: "#22c55e" },
  { id: "city", label: "City Exploration", icon: "🏙️", color: "#6366f1" },
  { id: "festival", label: "Festival Companion", icon: "🎪", color: "#f97316" },
] as const;

export const SAFETY_TIPS = [
  "Meet in public places whenever possible",
  "Tell a trusted friend where you're going",
  "Share your live location during the meetup",
  "Avoid transferring money outside the platform",
  "Respect boundaries and community guidelines",
  "Report suspicious behavior immediately",
];

export const ACTIVITY_TYPES = CATEGORIES.map((c) => c.label);

export const POPULAR_CITIES = [
  { name: "Mumbai", code: "MUM", count: 2847, image: "🌴" },
  { name: "Delhi NCR", code: "DEL", count: 3102, image: "🏛️" },
  { name: "Bangalore", code: "BLR", count: 2651, image: "🌆" },
  { name: "Pune", code: "PUNE", count: 1423, image: "🏔️" },
  { name: "Hyderabad", code: "HYD", count: 1187, image: "🕌" },
  { name: "Chennai", code: "CHEN", count: 982, image: "🌊" },
  { name: "Kolkata", code: "KOL", count: 876, image: "🎭" },
  { name: "Goa", code: "GOA", count: 743, image: "🏖️" },
];
