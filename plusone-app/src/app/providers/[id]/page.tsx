"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Rating, RatingBars } from "@/components/ui/rating";
import { cn, formatPrice, formatNumber } from "@/lib/utils";
import { format } from "date-fns";
import {
  MapPin,
  Clock,
  Shield,
  Star,
  MessageSquare,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  Award,
  Zap,
  ThumbsUp,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Globe,
  Wifi,
  Phone,
  Lock,
  AlertTriangle,
  Check,
  Loader2,
  CreditCard,
  Users,
  Eye,
  ShieldCheck,
  Link as LinkIcon,
} from "lucide-react";
import { MOCK_PROVIDERS, MOCK_USER, SAFETY_REMINDER } from "@/lib/mock-data";
import { motion, AnimatePresence } from "framer-motion";

export const dynamic = "force-dynamic";

type BookingStep = "select" | "safety" | "payment" | "confirm";

export default function ProviderProfilePage() {
  const params = useParams();
  const provider = MOCK_PROVIDERS.find((p) => p.id === params.id) || MOCK_PROVIDERS[0];
  const [activeTab, setActiveTab] = useState<"about" | "reviews" | "availability" | "gallery">("about");
  const [bookingStep, setBookingStep] = useState<BookingStep>("select");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDuration, setSelectedDuration] = useState(2);
  const [selectedTime, setSelectedTime] = useState("15:00");
  const [showSafetyModal, setShowSafetyModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const totalPrice = provider.hourlyRate * selectedDuration;
  const platformFee = Math.round(totalPrice * 0.17);
  const totalWithFee = totalPrice + platformFee;

  const safetyTips = [
    "Meet in public places whenever possible",
    "Tell a trusted friend or family member where you're going",
    "Share your live location during the meetup",
    "Avoid transferring money outside the platform",
    "Respect boundaries and community guidelines",
    "Report suspicious behaviour immediately",
  ];

  return (
    <div className="min-h-screen bg-surface-999">
      {/* Top Bar */}
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <button className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors">
              <ArrowLeft size={14} />
              Back to search
            </button>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all">
                <Share2 size={14} />
              </button>
              <button className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all">
                <Bookmark size={14} />
              </button>
              <button
                onClick={() => setShowReportModal(true)}
                className="p-2 rounded-lg text-white/30 hover:text-red-300 hover:bg-red-500/10 transition-all"
                title="Report user"
              >
                <AlertTriangle size={14} className="text-red-400/60" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center sm:items-start gap-4 shrink-0">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-br from-plus-purple-500/20 to-plus-pink-500/20 p-[4px]">
                <div className="w-full h-full rounded-3xl bg-surface-800 overflow-hidden">
                  <Image
                    src={provider.avatar}
                    alt={provider.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
              {/* Badges around avatar */}
              <div className="absolute -top-1 -right-1">
                <Badge variant="success" size="lg" icon={<Shield size={12} />}>
                  Verified
                </Badge>
              </div>
              <div className="absolute -bottom-1 -left-1">
                <Badge variant="gold" size="lg">
                  {provider.trustLevel}
                </Badge>
              </div>
            </div>
            <div>
              <div className="text-xs text-white/20">Member since {format(new Date(provider.createdAt).getFullYear(), "yyyy")}</div>
            </div>
          </div>

          {/* Name & Info */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h1 className="text-2xl sm:text-3xl font-black text-white">{provider.name}</h1>
                  <Badge variant="gold">{provider.trustLevel}</Badge>
                  {provider.featured && (
                    <Badge variant="warning" icon={<Award size={10} />}>Featured Host</Badge>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-white/30 flex-wrap">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {provider.city}
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe size={12} />
                    {provider.languages.join(", ")}
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap size={12} className="text-plus-green-400" />
                    {provider.lastActive instanceof Date ? provider.lastActive.toLocaleString("en-IN", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }) : provider.lastActive}
                  </span>
                </div>
              </div>

              {/* Rating & Price */}
              <div className="flex items-center gap-6 shrink-0">
                <div className="text-center">
                  <div className="text-2xl font-black text-white">{formatPrice(provider.hourlyRate)}</div>
                  <div className="text-xs text-white/30">per hour</div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <Rating rating={provider.ratings.overall} size="md" />
                    <span className="text-white/30 text-sm">({formatNumber(provider.ratings.count)})</span>
                  </div>
                  <div className="text-xs text-white/20 mt-0.5">
                    <ThumbsUp size={10} className="inline mr-0.5" />
                    {formatNumber(provider.completedActivities)} activities
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-white/40 text-sm mt-4 leading-relaxed max-w-2xl">
              {provider.bio}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="purple" size="md" icon={<Wifi size={10} />}>
                Online
              </Badge>
              {provider.badges.map((badge) => (
                <Badge key={badge.id} variant="gold" size="md" icon={<Award size={10} />}>
                  {badge.label}
                </Badge>
              ))}
              <Badge variant="default" size="md">
                <Clock size={10} className="mr-1" />
                Responds {provider.responseTime}
              </Badge>
              <Badge variant="success" size="md">
                <CheckCircle2 size={10} className="mr-1" />
                {provider.ratings.wouldMeetAgain}% would meet again
              </Badge>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: "Total Earnings", value: formatPrice(provider.totalEarnings), icon: Award, color: "text-amber-300", bg: "bg-amber-500/10" },
            { label: "Completed Activities", value: formatNumber(provider.completedActivities), icon: CheckCircle2, color: "text-plus-green-300", bg: "bg-plus-green-500/10" },
            { label: "Repeat Customers", value: formatNumber(provider.repeatCustomers), icon: Users, color: "text-plus-blue-300", bg: "bg-plus-blue-500/10" },
            { label: "Cancellation Rate", value: `${provider.cancellationRate}%`, icon: Shield, color: "text-plus-purple-300", bg: "bg-plus-purple-500/10" },
          ].map((stat) => (
            <Card key={stat.label} padding="sm" className="text-center">
              <stat.icon size={14} className={cn(stat.color, "mx-auto mb-2")} />
              <div className="text-lg font-bold text-white">{stat.value}</div>
              <div className="text-[10px] text-white/30">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-4">
            {/* Tabs */}
            <div className="flex gap-1 bg-white/5 rounded-xl p-1 w-fit">
              {(["about", "reviews", "availability", "gallery"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-4 py-2 text-sm rounded-lg font-medium capitalize transition-all",
                    activeTab === tab
                      ? "bg-white/10 text-white shadow-sm"
                      : "text-white/40 hover:text-white/70"
                  )}
                >
                  {tab}
                </button>
              ))}
              <div className="w-px h-5 bg-white/10 mx-1" />
              <button
                onClick={() => setShowShareModal(true)}
                className="px-3 py-2 text-sm rounded-lg text-white/30 hover:text-white/60 transition-all flex items-center gap-1.5"
              >
                <Share2 size={13} />
                Share
              </button>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {activeTab === "about" && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {/* Activity Tags */}
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-3">Activities offered</h3>
                    <div className="flex flex-wrap gap-2">
                      {provider.activities.map((activity) => (
                        <span
                          key={activity}
                          className="px-3.5 py-2 bg-plus-purple-500/10 border border-plus-purple-500/20 rounded-xl text-sm text-plus-purple-200 cursor-pointer hover:bg-plus-purple-500/20 transition-all"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {provider.languages.map((lang) => (
                        <Badge key={lang} variant="info" size="md" icon={<Globe size={10} />}>
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Response Info */}
                  <Card padding="md" className="bg-white/[0.02]">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-plus-green-500/10 flex items-center justify-center">
                        <Zap size={16} className="text-plus-green-300" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium mb-0.5">{provider.responseRate}% response rate</div>
                        <div className="text-white/30 text-xs">Usually responds {provider.responseTime}</div>
                      </div>
                    </div>
                  </Card>

                  {/* Availability Summary */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-semibold text-sm">Availability</h3>
                      <Link href="#availability" className="text-xs text-plus-purple-300 hover:text-plus-purple-200">
                        See full schedule
                      </Link>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                        <div
                          key={day}
                          className={cn(
                            "text-center py-2 rounded-lg text-xs font-medium",
                            provider.availability[i]?.available
                              ? "bg-plus-purple-500/10 text-plus-purple-200 border border-plus-purple-500/20"
                              : "bg-white/5 text-white/20"
                          )}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verification Details */}
                  <Card padding="md" className="bg-plus-green-500/5 border-plus-green-500/10">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-plus-green-500/20 flex items-center justify-center shrink-0">
                        <ShieldCheck size={14} className="text-plus-green-300" />
                      </div>
                      <div>
                        <h4 className="text-plus-green-300 text-sm font-medium mb-1">Identity Verified</h4>
                        <p className="text-white/40 text-xs leading-relaxed">
                          {provider.isVerified
                            ? `Verified via ${provider.verificationLevel === "selfie" ? "government ID + selfie & liveness check" : provider.verificationLevel === "id" ? "government ID verification" : "phone verification"}.`
                            : "Not yet verified."}
                        </p>
                        {provider.isVerified && (
                          <div className="flex items-center gap-2 mt-2">
                            <Lock size={11} className="text-white/20" />
                            <span className="text-white/20 text-[10px]">Verification document securely stored and encrypted</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              {activeTab === "reviews" && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {/* Rating Summary */}
                  <Card padding="lg" className="bg-white/[0.02]">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                      <div className="text-center sm:text-left">
                        <div className="text-4xl font-black text-white mb-1">{provider.ratings.overall.toFixed(2)}</div>
                        <Rating rating={provider.ratings.overall} size="lg" />
                        <div className="text-white/30 text-sm mt-2">{provider.ratings.count} reviews</div>
                      </div>
                      <div>
                        <RatingBars
                          communication={provider.ratings.communication}
                          punctuality={provider.ratings.punctuality}
                          friendliness={provider.ratings.friendliness}
                          wouldMeetAgain={provider.ratings.wouldMeetAgain}
                        />
                      </div>
                    </div>
                  </Card>

                  {/* Reviews List */}
                  <div className="space-y-4">
                    {provider.reviews.map((review) => (
                      <Card key={review.id} padding="md" hover className="group">
                        <div className="flex gap-3">
                          <Avatar name={review.reviewerName} size="md" src={review.reviewerAvatar} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <div>
                                <span className="text-white text-sm font-medium">{review.reviewerName}</span>
                                <Badge variant="success" size="sm" className="ml-2" icon={<Shield size={8} />}>
                                  Verified booking
                                </Badge>
                              </div>
                              <span className="text-white/20 text-xs">
                                {format(new Date(review.createdAt), "MMM d, yyyy")}
                              </span>
                            </div>
                            <Rating rating={review.rating.overall} size="sm" className="mb-2" />
                            <p className="text-white/40 text-sm leading-relaxed">{review.comment}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "availability" && (
                <motion.div
                  key="availability"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <Card padding="lg">
                    <h3 className="text-white font-semibold text-base mb-4">Weekly Availability</h3>
                    <div className="space-y-3">
                      {provider.availability.map((slot) => (
                        <div
                          key={slot.day}
                          className={cn(
                            "flex items-center gap-3 p-3 rounded-xl transition-colors",
                            slot.available ? "bg-plus-green-500/5 border border-plus-green-500/10" : "bg-white/5 border border-white/5"
                          )}
                        >
                          <div
                            className={cn(
                              "w-2 h-10 rounded-full shrink-0",
                              slot.available ? "bg-plus-green-500" : "bg-white/10"
                            )}
                          />
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">{slot.day}</div>
                            <div className="text-white/30 text-xs">
                              {slot.available ? `${slot.startTime} - ${slot.endTime}` : "Not available"}
                            </div>
                          </div>
                          {slot.available && (
                            <Badge variant="success" size="sm" icon={<Check size={8} />}>
                              Open
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}

              {activeTab === "gallery" && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                >
                  {provider.gallery.map((img, i) => (
                    <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-white/5">
                      <Image
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-28" padding="lg">
              {bookingStep === "select" && (
                <>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-black text-white mb-1">
                      {formatPrice(provider.hourlyRate)}
                      <span className="text-base font-normal text-white/30">/hr</span>
                    </div>
                    <p className="text-white/30 text-xs">All-inclusive pricing · No hidden fees</p>
                  </div>

                  {/* Duration Selector */}
                  <div className="mb-5">
                    <label className="text-white text-sm font-medium mb-3 block">Duration</label>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((hours) => (
                        <button
                          key={hours}
                          onClick={() => setSelectedDuration(hours)}
                          className={cn(
                            "py-2.5 rounded-xl text-sm font-medium transition-all",
                            selectedDuration === hours
                              ? "bg-plus-purple-500/20 text-plus-purple-200 border-plus-purple-500/40"
                              : "bg-white/5 text-white/50 border border-white/5 hover:bg-white/10 hover:text-white/70"
                          )}
                        >
                          {hours}h
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date Selector */}
                  <div className="mb-5">
                    <label className="text-white text-sm font-medium mb-3 block">Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-plus-purple-500/30 focus:border-plus-purple-500/50 [color-scheme:dark]"
                    />
                  </div>

                  {/* Time */}
                  <div className="mb-5">
                    <label className="text-white text-sm font-medium mb-3 block">Time</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-plus-purple-500/30 focus:border-plus-purple-500/50 appearance-none cursor-pointer"
                    >
                      {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"].map((t) => (
                        <option key={t} value={t} className="bg-surface-800">{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Breakdown */}
                  <div className="border-t border-white/5 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">{provider.hourlyRate} × {selectedDuration}h</span>
                      <span className="text-white/70">{formatPrice(provider.hourlyRate * selectedDuration)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Platform fee (15% + 3%)</span>
                      <span className="text-white/70">{formatPrice(platformFee)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Security deposit (fully refundable)</span>
                      <span className="text-white/70">{formatPrice(200)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-white pt-2 border-t border-white/5 mt-2">
                      <span>Total</span>
                      <span>{formatPrice(totalWithFee)}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    fullWidth
                    size="lg"
                    className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 mt-5 w-full"
                    onClick={() => setBookingStep("safety")}
                  >
                    Continue
                    <ArrowRight size={16} />
                  </Button>

                  <p className="text-[10px] text-white/15 text-center mt-3 leading-relaxed">
                    By booking, you agree to our{" "}
                    <Link href="/terms" className="underline">Terms</Link>
                    {" "}and{" "}
                    <Link href="/refund-policy" className="underline">Refund Policy</Link>.
                  </p>
                </>
              )}

              {/* Booking Confirmation */}
              {bookingStep === "confirm" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-plus-green-500/20 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                  >
                    <Check size={28} className="text-plus-green-300" />
                  </motion.div>
                  <h2 className="text-2xl font-black text-white mb-2">Booking Confirmed!</h2>
                  <p className="text-white/30 text-sm mb-6">
                    We've sent the details to your phone and email.
                  </p>
                  <div className="bg-white/5 rounded-xl p-4 mb-6 text-left space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Activity</span>
                      <span className="text-white">{provider.activities[0]}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Date</span>
                      <span className="text-white">{selectedDate || "Selected date"}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Time</span>
                      <span className="text-white">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Duration</span>
                      <span className="text-white">{selectedDuration} hours</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Total paid</span>
                      <span className="text-plus-green-300 font-bold">{formatPrice(totalWithFee)}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="secondary" fullWidth onClick={() => window.location.href = "/app/messages"}>
                      <MessageSquare size={14} />
                      Open Chat
                    </Button>
                    <Button fullWidth onClick={() => window.location.href = "/app/bookings"}>
                      View Booking
                    </Button>
                  </div>
                </motion.div>
              )}
            </Card>

            {/* Meet Info */}
            <Card padding="sm" className="mt-4 bg-white/[0.02] border-plus-purple-500/10">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-plus-purple-500/20 flex items-center justify-center shrink-0">
                  <Shield size={12} className="text-plus-purple-300" />
                </div>
                <div className="text-xs text-white/30 leading-relaxed">
                  <strong className="text-white/50">Meeting tip:</strong> Meet at a public location you both agree on. Always share your live location with a trusted contact.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* ─── Safety Reminder Modal ─── */}
      <AnimatePresence>
        {showSafetyModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSafetyModal(false)}
          >
            <motion.div
              className="bg-surface-900 border border-white/10 rounded-3xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-plus-gold-500/20 flex items-center justify-center">
                  <Shield size={18} className="text-plus-gold-300" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg">Safety Reminder</h2>
                  <p className="text-white/30 text-xs">Please read before booking</p>
                </div>
              </div>

              <div className="bg-white/[0.02] rounded-2xl p-4 mb-6">
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  You're meeting another independent adult through our platform. Please take the following safety precautions:
                </p>
                <ul className="space-y-2.5">
                  {safetyTips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-plus-green-400/60 mt-0.5 shrink-0" />
                      <span className="text-white/50 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-plus-green-500/5 border border-plus-green-500/10 rounded-2xl p-4 mb-6">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck size={14} className="text-plus-green-300 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-plus-green-200 text-sm font-medium">You're in safe hands</p>
                    <p className="text-white/30 text-xs mt-1">
                      PlusOne has identity verification, in-app payments, chat moderation, an emergency SOS button, and 24/7 support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={() => setBookingStep("select")}
                >
                  Go back
                </Button>
                <Button
                  fullWidth
                  size="lg"
                  className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 flex-1"
                  onClick={() => {
                    setShowSafetyModal(false);
                    setBookingStep("payment");
                  }}
                >
                  I understand, continue
                  <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Share Modal ─── */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              className="bg-surface-900 border border-white/10 rounded-3xl max-w-sm w-full p-6 sm:p-8"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-white font-bold text-lg mb-2">Share this profile</h2>
              <p className="text-white/30 text-sm mb-6">{provider.name} on PlusOne</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Copy link", icon: LinkIcon, action: () => { navigator.clipboard.writeText(window.location.href); setShowShareModal(false); } },
                  { label: "Share on WhatsApp", icon: MessageSquare, action: () => {} },
                  { label: "Share on Instagram", icon: Star, action: () => {} },
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={option.action}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-left"
                  >
                    <option.icon size={16} className="text-white/40" />
                    <span className="text-white/70 text-sm">{option.label}</span>
                  </button>
                ))}
              </div>
              <Button
                variant="ghost"
                fullWidth
                className="mt-4"
                onClick={() => setShowShareModal(false)}
              >
                Cancel
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Report Modal ─── */}
      <AnimatePresence>
        {showReportModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowReportModal(false)}
          >
            <motion.div
              className="bg-surface-900 border border-white/10 rounded-3xl max-w-sm w-full p-6 sm:p-8"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                  <AlertTriangle size={18} className="text-rose-300" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg">Report User</h2>
                  <p className="text-white/30 text-xs">This goes directly to our trust & safety team</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Harassment or bullying",
                  "Fake identity or scam",
                  "Inappropriate behaviour",
                  "Off-platform activity",
                  "Violence or threats",
                  "Other",
                ].map((reason) => (
                  <label key={reason} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
                    <input type="radio" name="report" className="accent-plus-purple-500" />
                    <span className="text-white/70 text-sm">{reason}</span>
                  </label>
                ))}
              </div>

              <textarea
                placeholder="Add details (optional)..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-plus-purple-500/30 focus:border-plus-purple-500/50 resize-none h-24"
              />

              <div className="flex gap-3 mt-4">
                <Button variant="secondary" fullWidth onClick={() => setShowReportModal(false)}>
                  Cancel
                </Button>
                <Button
                  variant="danger"
                  fullWidth
                  className="flex-1"
                  onClick={() => setShowReportModal(false)}
                >
                  Submit Report
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
