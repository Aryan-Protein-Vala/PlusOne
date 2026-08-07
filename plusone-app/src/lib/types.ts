// ─── User & Auth ────────────────────────────────────────────────────────────

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  isProvider: boolean;
  isVerified: boolean;
  verificationLevel: VerificationLevel;
  createdAt: Date;
  trustScore: number;
  city: string;
  bio?: string;
  is_available?: boolean; // 🟢 GO AVAILABLE toggle state
}

export type VerificationLevel = "none" | "phone" | "id" | "selfie" | "social";

export interface VerificationBadge {
  level: VerificationLevel;
  label: string;
  description: string;
  icon: string;
  color: string;
}

// ─── Provider ────────────────────────────────────────────────────────────────

export interface ProviderProfile extends User {
  isProvider: true;
  hourlyRate: number;
  responseRate: number;
  responseTime: string;
  cancellationRate: number;
  completedActivities: number;
  totalEarnings: number;
  repeatCustomers: number;
  ratings: RatingSummary;
  reviews: Review[];
  activities: string[];
  languages: string[];
  availability: AvailabilitySlot[];
  gallery: string[];
  badges: ProviderBadge[];
  trustLevel: "Bronze" | "Silver" | "Gold" | "Diamond";
  featured: boolean;
  lastActive: Date;
  is_available?: boolean; // 🟢 GO AVAILABLE toggle state
}

export interface ProviderBadge {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface AvailabilitySlot {
  day: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

// ─── Plans & Applications (Fixed-Price Matching Engine) ──────────────────────

export type PlanStatus = 'live_match' | 'marketplace' | 'booked' | 'expired';

export interface PlanCustomer {
  id: string;
  name: string;
  avatar: string;
  rating: number;
}

export interface Plan {
  id: string;
  customer_id: string;
  activity_title: string;
  category: string;
  budget: number;
  location: string;
  date_time: string;
  is_urgent: boolean;
  status: PlanStatus;
  description?: string;
  distance?: string;
  customer?: PlanCustomer;
  created_at?: string;
}

export type ApplicationStatus = 'pending' | 'accepted' | 'rejected';

export interface PlanApplication {
  id: string;
  plan_id: string;
  host_id: string;
  applied_at: string;
  status: ApplicationStatus;
  plan?: Plan;
  host?: ProviderProfile;
}

// ─── Activities ──────────────────────────────────────────────────────────────

export interface Activity {
  id: string;
  providerId: string;
  category: string;
  title: string;
  description: string;
  pricePerHour: number;
  duration: number; // minutes
  location: string;
  date: Date;
  spots: number;
  image: string;
  rating: number;
  reviewCount: number;
}

// ─── Booking ─────────────────────────────────────────────────────────────────

export type BookingStatus =
  | "pending"
  | "confirmed"
  | "in_progress"
  | "completed"
  | "cancelled"
  | "disputed";

export interface Booking {
  id: string;
  seekerId: string;
  providerId: string;
  activityId: string;
  category: string;
  title: string;
  description: string;
  location: string;
  date: Date;
  startTime: string;
  endTime: string;
  duration: number;
  price: number;
  status: BookingStatus;
  paymentStatus: "pending" | "hold" | "captured" | "refunded";
  reviewStatus: "pending" | "completed" | "skipped";
  safetyChecked: boolean;
  emergencyContact: string;
  meetingPoint: string;
  createdAt: Date;
  updatedAt: Date;
}

// ─── Reviews ─────────────────────────────────────────────────────────────────

export interface RatingSummary {
  overall: number;
  communication: number;
  punctuality: number;
  friendliness: number;
  wouldMeetAgain: number; // 0-100 percentage
  count: number;
}

export interface Review {
  id: string;
  bookingId: string;
  reviewerId: string;
  reviewerName: string;
  reviewerAvatar: string;
  rating: RatingSummary;
  comment: string;
  createdAt: Date;
  verified: boolean;
}

// ─── Wallet ──────────────────────────────────────────────────────────────────

export interface WalletTransaction {
  id: string;
  type: "earn" | "payout" | "refund" | "bonus" | "penalty";
  amount: number;
  description: string;
  bookingId?: string;
  status: "pending" | "completed" | "failed";
  createdAt: Date;
}

export interface Wallet {
  providerId: string;
  balance: number;
  pending: number;
  available: number;
  currency: string;
  transactions: WalletTransaction[];
}

// ─── Messages ────────────────────────────────────────────────────────────────

export interface Message {
  id: string;
  bookingId: string;
  senderId: string;
  content: string;
  type: "text" | "image" | "system";
  createdAt: Date;
  read: boolean;
}

export interface Conversation {
  bookingId: string;
  provider: ProviderProfile;
  seeker: User;
  lastMessage: Message;
  unreadCount: number;
  updatedAt: Date;
}

// ─── Search & Discovery ──────────────────────────────────────────────────────

export interface SearchFilters {
  category?: string;
  city?: string;
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  verifiedOnly?: boolean;
  availableToday?: boolean;
  gender?: string;
  language?: string;
  instantBook?: boolean;
}

export interface SearchResult {
  providers: ProviderProfile[];
  activities: Activity[];
  total: number;
  page: number;
}

// ─── Admin ───────────────────────────────────────────────────────────────────

export interface AdminStats {
  totalUsers: number;
  totalProviders: number;
  totalBookings: number;
  todayBookings: number;
  revenue: number;
  pendingVerifications: number;
  reports: number;
  disputes: number;
  topCities: { city: string; count: number }[];
  topActivities: { category: string; count: number }[];
}

// ─── Leaderboard ─────────────────────────────────────────────────────────────

export interface LeaderboardEntry {
  rank: number;
  provider: ProviderProfile;
  metric: "rating" | "earnings" | "bookings" | "response" | "helpful";
  value: number;
}

// ─── Emergency ───────────────────────────────────────────────────────────────

export interface EmergencySession {
  id: string;
  bookingId: string;
  seekerId: string;
  location: { lat: number; lng: number } | null;
  contactAdded: boolean;
  activatedAt: Date | null;
}
