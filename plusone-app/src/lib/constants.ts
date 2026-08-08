export const PLATFORM_NAME = "PlusOne";
export const PLATFORM_TAGLINE = "Find someone for any plan.";

// Initial launch market. The backend enforces this through migration 00004.
// Keep this in one place so the first release can expand cleanly later.
export const LAUNCH_MARKET = {
  countryCode: "IN",
  countryName: "India",
  currency: "INR",
  currencySymbol: "₹",
} as const;
export const PLATFORM_URL = "https://plusone.app";

export const VERIFICATION_BADGES = {
  none: { label: "Unverified", icon: "○", color: "gray", description: "Identity not yet verified" },
  phone: { label: "Phone Verified", icon: "📱", color: "blue", description: "Phone number confirmed" },
  id: { label: "ID Verified", icon: "🪪", color: "purple", description: "Government ID verified" },
  selfie: { label: "Selfie Verified", icon: "📸", color: "green", description: "Selfie & liveness check complete" },
  social: { label: "Social Verified", icon: "🔗", color: "orange", description: "Linked social accounts" },
};

export const TRUST_LEVELS = {
  Bronze: { min: 50, color: "#d97706", icon: "🥉", description: "Getting started" },
  Silver: { min: 70, color: "#9ca3af", icon: "🥈", description: "Trusted member" },
  Gold: { min: 85, color: "#fbbf24", icon: "🥇", description: "Highly trusted" },
  Diamond: { min: 95, color: "#06b6d4", icon: "💎", description: "Elite trust level" },
};

export const EARNINGS_TIERS = [
  { min: 0, label: "Starter", icon: "🌱", color: "#6b7280" },
  { min: 10000, label: "Rising", icon: "📈", color: "#3b82f6" },
  { min: 50000, label: "Pro", icon: "⚡", color: "#8b5cf6" },
  { min: 100000, label: "Elite", icon: "💎", color: "#fbbf24" },
];

export const RESPONSE_TIME_LABELS = {
  "< 15 min": { label: "Very Fast", color: "green" },
  "< 30 min": { label: "Fast", color: "green" },
  "< 1 hr": { label: "Good", color: "blue" },
  "< 2 hr": { label: "Average", color: "orange" },
  "< 24 hr": { label: "Slow", color: "red" },
};

export const BOOKING_STATUS_LABELS = {
  pending: { label: "Pending", color: "orange", icon: "⏳" },
  confirmed: { label: "Confirmed", color: "blue", icon: "✅" },
  in_progress: { label: "In Progress", color: "purple", icon: "🔄" },
  completed: { label: "Completed", color: "green", icon: "🎉" },
  cancelled: { label: "Cancelled", color: "red", icon: "❌" },
  disputed: { label: "Disputed", color: "red", icon: "⚠️" },
};

export const PLATFORM_COMMISSION = 15;
export const PLATFORM_FEE_MIN = 2;
export const PLATFORM_FEE_MAX = 5;
export const MIN_HOURLY_RATE = 300;

export const SAFETY_REMINDER = `You're meeting another independent adult through our platform.

Please:
• Meet in public places whenever possible.
• Tell a trusted friend or family member where you're going.
• Share your live location during the meetup.
• Avoid transferring money outside the platform.
• Respect boundaries and community guidelines.
• Report suspicious behaviour immediately.

By continuing, you confirm that you understand these recommendations.`;

export const COMMUNITY_GUIDELINES = {
  allowed: [
    "Movies & cinema",
    "Cafes & coffee",
    "Travel companions",
    "Study sessions",
    "Sports & fitness",
    "Shopping companions",
    "Photography walks",
    "Concerts & events",
    "Museum visits",
    "Gaming sessions",
    "Cooking together",
    "Language exchange",
    "Board games",
    "Dog walking",
    "City exploration",
    "Festival companions",
    "Networking",
    "Cycling",
    "Workout partners",
  ],
  notAllowed: [
    "Sexual services or escorting",
    "Prostitution or solicitation",
    "Illegal activities of any kind",
    "Drugs or substance-related activities",
    "Harassment or bullying",
    "Hate speech or discrimination",
    "Fraud or deception",
    "Requests involving minors",
    "Weapons or threats",
    "Explicit content exchange",
    "Anything not covered by lawful social activities",
  ],
  violations: [
    { level: 1, title: "Warning", description: "Minor first-time violations" },
    { level: 2, title: "Temporary Suspension", description: "Repeated or moderate violations" },
    { level: 3, title: "Permanent Removal", description: "Severe or repeated serious violations" },
    { level: 4, title: "Report to Authorities", description: "Illegal or harmful activity as required by law" },
  ],
};

export const REFUND_POLICY = {
  seekerCancelEarly: { hoursBefore: 48, refund: "Full refund" },
  seekerCancelMid: { hoursBefore: 24, refund: "50% refund" },
  seekerCancelLate: { hoursBefore: 0, refund: "No refund" },
  hostCancel: { refund: "Full refund + disadvantage on host profile" },
  hostNoShow: { refund: "Full refund + penalty on host" },
  seekerNoShow: { refund: "No refund + penalty on seeker" },
};


export const SUPPORT_EMAIL = "hello@plusone.app";
export const PRIVACY_EMAIL = "privacy@plusone.app";
export const DMCA_EMAIL = "dmca@plusone.app";
export const COOKIES_EMAIL = "cookies@plusone.app";

export const COMPANY_NAME = "PlusOne Technologies Pvt. Ltd.";
export const COMPANY_REGISTRATION = "CIN: U72900MH2024PTC3XXXXX";
export const COMPANY_ADDRESS =
  "4th Floor, TechPark Building, Bandra Kurla Complex, Bandra (East), Mumbai, Maharashtra 400051, India";
export const COMPANY_REG_OFFICE =
  "12/A, Green Estate, Andheri East, Mumbai, Maharashtra 400093, India";

export const GDPR_LEAD = "Our privacy team is available at privacy@plusone.app for any GDPR-related inquiries.";
export const CCPA_LEAD = "California residents may submit DSR requests to privacy@plusone.app.";

export const TERMS_VERSION = "1.0";
export const TERMS_EFFECTIVE_DATE = "October 1, 2024";
export const PRIVACY_VERSION = "1.0";
export const PRIVACY_LAST_UPDATED = "October 1, 2024";
