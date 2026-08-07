"use client";

import Link from "next/link";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Rating } from "@/components/ui/rating";
import { cn, formatPrice } from "@/lib/utils";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  MessageSquare,
  Wallet,
  Settings,
  Shield,
  ChevronRight,
  Users,
  Award,
  TrendingUp,
  Zap,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Eye,
  Edit3,
  LogOut,
} from "lucide-react";
import { MOCK_USER, MOCK_PROVIDERS, MOCK_BOOKINGS } from "@/lib/mock-data";

const stats = [
  { label: "Total Earnings", value: "₹82,400", change: "+12% this month", icon: TrendingUp, color: "text-plus-green-300", bg: "bg-plus-green-500/10" },
  { label: "Active Bookings", value: "2", change: "1 confirmed, 1 pending", icon: Calendar, color: "text-plus-blue-300", bg: "bg-plus-blue-500/10" },
  { label: "Rating", value: "4.98 ★", change: "127 reviews", icon: Star, color: "text-amber-300", bg: "bg-amber-500/10" },
  { label: "Completed", value: "127", change: "0% cancellation rate", icon: CheckCircle2, color: "text-plus-purple-300", bg: "bg-plus-purple-500/10" },
];

const upcomingBookings = MOCK_BOOKINGS.filter((b) => b.status === "confirmed").map((b) => ({
  ...b,
  provider: MOCK_PROVIDERS.find((p) => p.id === b.providerId),
}));

const recentReviews = MOCK_PROVIDERS[0].reviews.slice(0, 3);

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Welcome back, <span className="bg-gradient-to-r from-plus-purple-400 to-plus-pink-400 bg-clip-text text-transparent">Aryan</span>
          </h1>
          <p className="text-white/30 mt-1">Here's what's happening with your PlusOne account.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/app/profile">
            <Button variant="secondary" size="sm">
              <Settings size={14} />
              Edit Profile
            </Button>
          </Link>
          <Link href="/app/hosts">
            <Button size="sm" className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500">
              <Award size={14} />
              Become a Host
            </Button>
          </Link>
        </div>
      </div>

      {/* User Card */}
      <Card className="mb-8 overflow-hidden" hover={false} glow={false}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative">
            <Avatar name="Aryan Kapoor" size="xl" verified />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-plus-green-500 border-2 border-[#050508] rounded-full flex items-center justify-center">
              <CheckCircle2 size={10} className="text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl font-bold text-white">Aryan Kapoor</h2>
              <Badge variant="success" icon={<Shield size={10} />}>Phone Verified</Badge>
              <Badge variant="default">Member since Jan 2024</Badge>
            </div>
            <p className="text-white/30 text-sm mt-1">Mumbai · Looking for activities</p>
            <div className="flex items-center gap-4 mt-2 text-xs text-white/20">
              <span>⚡ Ready to book</span>
              <span>·</span>
              <span>12 completed bookings</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/app/profile">
              <Button variant="ghost" size="sm">
                <Edit3 size={14} />
                Edit
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} hover className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full -translate-y-8 translate-x-8" />
            <div className="flex items-start justify-between mb-3">
              <div className={cn(stat.bg, "w-8 h-8 rounded-lg flex items-center justify-center")}>
                <stat.icon size={14} className={stat.color} />
              </div>
              <span className="text-[10px] text-white/20">{stat.change}</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white mb-0.5">{stat.value}</div>
            <div className="text-xs text-white/30">{stat.label}</div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Bookings */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold text-lg">Upcoming Activities</h2>
            <Link href="/app/bookings" className="text-sm text-plus-purple-300 hover:text-plus-purple-200 flex items-center gap-1 transition-colors">
              View all
              <ChevronRight size={14} />
            </Link>
          </div>

          {upcomingBookings.length === 0 ? (
            <Card className="py-12 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center">
                <Calendar size={20} className="text-white/20" />
              </div>
              <p className="text-white/40 text-sm mb-4">No upcoming activities</p>
              <Link href="/#find">
                <Button variant="secondary" size="sm">
                  Find your next activity
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="space-y-3">
              {upcomingBookings.map((booking) => (
                <Link key={booking.id} href={`/app/booking/${booking.id}`}>
                  <Card hover className="group" padding="md">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-plus-purple-500/20 to-plus-pink-500/20 flex items-center justify-center shrink-0 text-xl`}
                      >
                        {booking.category === "Movies" ? "🎬" : booking.category === "City Exploration" ? "🏙️" : "📍"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-white font-semibold text-sm group-hover:text-plus-purple-300 transition-colors">
                                {booking.title}
                              </h3>
                              <Badge
                                variant={booking.status === "confirmed" ? "info" : booking.status === "pending" ? "warning" : "default"}
                                size="sm"
                              >
                                {booking.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-white/30 mt-1">
                              <span>{format(new Date(booking.date), "EEE, d MMM")}</span>
                              <span className="flex items-center gap-1">
                                <Clock size={10} />
                                {booking.startTime} - {booking.endTime}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={10} />
                                {booking.location.split(",")[0]}
                              </span>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="text-white font-semibold text-sm">{formatPrice(booking.price)}</div>
                            <div className="text-white/20 text-xs">total</div>
                          </div>
                        </div>
                        {booking.provider && (
                          <div className="flex items-center gap-2 mt-2">
                            <Avatar name={booking.provider.name} size="xs" src={booking.provider.avatar} />
                            <span className="text-white/40 text-xs">with {booking.provider.name}</span>
                            <Badge variant="success" size="sm" icon={<Shield size={8} />}>Verified</Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Recent Reviews */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold text-lg">Recent Reviews</h2>
            <Link href="/app/reviews" className="text-sm text-plus-purple-300 hover:text-plus-purple-200 flex items-center gap-1 transition-colors">
              All reviews
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="space-y-3">
            {recentReviews.map((review) => (
              <Card key={review.id} padding="md">
                <div className="flex items-start gap-3">
                  <Avatar name={review.reviewerName} size="sm" src={review.reviewerAvatar} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span className="text-white text-sm font-medium">{review.reviewerName}</span>
                        <span className="text-white/20 text-xs ml-1">· {format(new Date(review.createdAt), "MMM d, yyyy")}</span>
                      </div>
                      <Rating rating={review.rating.overall} size="sm" />
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{review.comment}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-6 space-y-2">
            {[
              { href: "/app/wallet", icon: Wallet, label: "Wallet & Earnings" },
              { href: "/app/safety", icon: Shield, label: "Safety Center" },
              { href: "/app/messages", icon: MessageSquare, label: "Messages" },
              { href: "/app/profile", icon: Settings, label: "Settings" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-plus-purple-500/20 transition-colors">
                    <link.icon size={14} className="text-white/40 group-hover:text-plus-purple-300 transition-colors" />
                  </div>
                  <span className="text-white/60 text-sm group-hover:text-white transition-colors">{link.label}</span>
                  <ChevronRight size={12} className="text-white/15 ml-auto group-hover:text-white/30 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
