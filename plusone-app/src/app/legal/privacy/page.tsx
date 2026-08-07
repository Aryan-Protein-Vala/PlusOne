import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, Lock, Eye, Database, Mail, Phone, MapPin, Smartphone, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for PlusOne — the verified social activity marketplace. Learn how we collect, use, and protect your data.",
};

const lastUpdated = "October 1, 2024";
const version = "1.0";

export default function PrivacyPage() {
  const sections = [
    {
      number: "01",
      title: "Introduction",
      content: [
        "PlusOne Technologies Pvt. Ltd. (\"PlusOne\", \"we\", \"us\", or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at plusone.app and our mobile applications (collectively, the \"Platform\").",
        "Please read this policy carefully. By using the Platform, you consent to the collection and use of information in accordance with this policy.",
        "This policy is designed to comply with applicable privacy laws in India, including the Digital Personal Data Protection Act 2023 (DPDPA), and international standards including the GDPR (for EU users) and CCPA (for California residents).",
      ],
    },
    {
      number: "02",
      title: "Information We Collect",
      content: [
        "We collect information in the following categories:",
        { type: "heading", text: "Information You Provide to Us" },
        "When you register an account, create a profile, book an activity, or communicate with other users, we collect:",
        "• Name, email address, phone number, date of birth, gender (optional), profile photo, bio, and other profile information you choose to provide.",
        "• Government-issued ID information when you complete identity verification, including ID document details and selfie images.",
        "• Payment information including payment method details, processed through our payment partners (not stored directly by us).",
        "• Availability preferences, activity categories, hourly rates, and other provider-specific information.",
        "• Messages sent through the Platform (only after a booking is confirmed).",
        "• Reviews and ratings you submit.",
        "• Emergency contact information you provide for your safety.",
        { type: "heading", text: "Information Automatically Collected" },
        "When you use the Platform, we automatically collect:",
        "• Device information: device type, operating system, browser type, unique device identifiers, and mobile network information.",
        "• Usage data: pages visited, time spent, clicks, searches, booking history, and interactions with features.",
        "• Location data: with your explicit consent, we may collect precise or approximate location data for activity matching and safety features.",
        "• IP address and access times.",
        "• Log data: referring URLs, platform interactions, and crash reports.",
        { type: "heading", text: "Information from Third Parties" },
        "We may receive information about you from:",
        "• Identity verification providers (during ID verification process).",
        "• Payment processors (transaction status and payment method verification).",
        "• Publicly available sources for fraud prevention and safety purposes.",
      ],
    },
    {
      number: "03",
      title: "How We Use Your Information",
      content: [
        "We use the information we collect to:",
        "• Operate and maintain the Platform, including processing bookings, payments, and communications.",
        "• Verify your identity and maintain the safety and integrity of the Platform.",
        "• Match you with activity partners and personalize your experience.",
        "• Process payments and manage your wallet.",
        "• Provide customer support and handle disputes.",
        "• Communicate with you about your account, bookings, and updates (with your consent where required by law).",
        "• Monitor for and prevent fraud, abuse, and policy violations.",
        "• Improve and develop our Platform and services.",
        "• Comply with legal obligations and enforce our Terms of Service.",
        "• Send you safety alerts and emergency notifications related to your bookings.",
      ],
    },
    {
      number: "04",
      title: "How We Share Your Information",
      content: [
        "We do not sell your personal data. We share your information only in the following circumstances:",
        { type: "heading", text: "With Other Users" },
        "When you book an activity or communicate with another user, we share:",
        "• Your profile information (name, photo, verification badges, rating, and activities) with the other user.",
        "• Your booking details (date, time, location) with the other party to the booking.",
        "• Your messages with the other party during an active booking.",
        { type: "heading", text: "With Service Providers" },
        "We share information with third-party service providers who perform services on our behalf, including:",
        "• Payment processors (Razorpay/Stripe) for payment processing.",
        "• Identity verification services for ID and selfie verification.",
        "• Cloud hosting providers (Cloudflare, AWS/Fly.io) for platform hosting.",
        "• Email and notification services (Firebase, SendGrid) for communications.",
        "• Analytics providers for platform performance and improvement.",
        { type: "heading", text: "For Safety and Legal Compliance" },
        "We may disclose information when:",
        "• Required by law, court order, or governmental authority.",
        "• Necessary to protect the safety of users or the public.",
        "• Necessary to investigate fraud, abuse, or policy violations.",
        "• In connection with a merger, acquisition, or sale of assets (users will be notified).",
        { type: "heading", text: "Aggregated and Anonymized Data" },
        "We may use and share aggregated or anonymized data that cannot reasonably identify you, for analytics, research, and business purposes.",
      ],
    },
    {
      number: "05",
      title: "Identity Verification Data",
      content: [
        "Our identity verification process is essential to the safety of our Platform. When you complete verification:",
        "• We collect and process your government ID document image and selfie photo.",
        "• This data is processed by our verified identity verification partners and is not stored permanently on our systems.",
        "• Verification results (pass/fail and verification level) are stored and displayed as badges on your profile.",
        "• We do not share your ID documents with other users — only the verification status is visible.",
        "• Identity verification data is processed in accordance with applicable ID verification regulations.",
      ],
    },
    {
      number: "06",
      title: "Your Data Rights (GDPR / DPDPA / CCPA)",
      content: [
        { type: "heading", text: "For All Users" },
        "You have the right to:",
        "• Access: Request a copy of the personal data we hold about you.",
        "• Correction: Request correction of inaccurate or incomplete data.",
        "• Deletion: Request deletion of your personal data, subject to legal retention requirements.",
        "• Portability: Request your data in a portable, machine-readable format.",
        "• Withdraw Consent: Withdraw consent where processing is based on consent.",
        "• Lodge a Complaint: File a complaint with our Data Protection Officer or relevant regulatory authority.",
        { type: "heading", text: "GDPR Rights (EU/EEA Users)" },
        "If you are in the European Economic Area, you additionally have the right to:",
        "• Request restriction of processing.",
        "• Object to processing based on legitimate interests.",
        "• Receive a copy of your data in a structured, commonly used, machine-readable format.",
        "• Withdraw consent at any time (without affecting lawfulness of prior processing).",
        "To exercise GDPR rights, contact us at privacy@plusone.app.",
        { type: "heading", text: "CCPA Rights (California Residents)" },
        "California residents have the right to:",
        "• Know what personal information is collected, used, shared, or sold.",
        "• Delete personal information (with some exceptions).",
        "• Opt-out of sale of personal information (we do not sell personal information).",
        "• Non-discrimination for exercising CCPA rights.",
        "To exercise CCPA rights, contact us at privacy@plusone.app.",
        { type: "heading", text: "How to Exercise Your Rights" },
        "To exercise any of these rights, contact us at privacy@plusone.app with your request. We will respond within 30 days (or as required by applicable law). We may require verification of your identity before processing your request.",
      ],
    },
    {
      number: "07",
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal data, including:",
        "• Encryption of data in transit (TLS/HTTPS) and at rest.",
        "• Access controls and authentication mechanisms.",
        "• Regular security assessments and monitoring.",
        "• Data minimization practices.",
        "• Secure processing of identity verification data by vetted third-party providers.",
        "Despite our efforts, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security of your information.",
      ],
    },
    {
      number: "08",
      title: "Data Retention",
      content: [
        "We retain your personal data for as long as necessary to:",
        "• Provide and improve our services.",
        "• Fulfill the purposes described in this policy.",
        "• Comply with legal obligations (including tax, accounting, and legal dispute retention requirements).",
        "• Enforce our Terms of Service and protect our rights.",
        "• Maintain safety records for booked activities.",
        "• After you delete your account, we may retain certain information as required by law or for legitimate business purposes.",
      ],
    },
    {
      number: "09",
      title: "Cookies and Similar Technologies",
      content: [
        "We use cookies and similar technologies for essential platform functions, analytics, and personalization. For detailed information, please see our Cookie Policy at /cookies.",
        "Essential cookies are necessary for the Platform to function and cannot be disabled. You can manage non-essential cookies through your browser settings or our cookie preferences tool.",
      ],
    },
    {
      number: "10",
      title: "Children's Privacy",
      content: [
        "The Platform is not directed to individuals under 18 years of age. We do not knowingly collect personal data from children under 18. If we learn that we have collected data from a child under 18 without parental consent, we will take steps to delete that data promptly.",
        "We do not permit adults to use the Platform to contact or arrange activities with minors. Any such use is a violation of our Terms and may be reported to authorities.",
      ],
    },
    {
      number: "11",
      title: "International Data Transfers",
      content: [
        "Your data may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We take appropriate measures to ensure your data receives an adequate level of protection, including entering into data processing agreements with our service providers.",
        "For users in the European Economic Area, we rely on Standard Contractual Clauses for international transfers where applicable.",
      ],
    },
    {
      number: "12",
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on the Platform and, where appropriate, by email or in-app notification. Your continued use of the Platform after updates constitutes acceptance of the revised policy.",
        "We encourage you to review this policy periodically.",
      ],
    },
    {
      number: "13",
      title: "Contact Us",
      content: [
        "If you have questions or concerns about this Privacy Policy or our data practices, please contact us:",
        "• Email: privacy@plusone.app",
        "• Data Protection Officer: dpo@plusone.app",
        "• Post: PlusOne Technologies Pvt. Ltd., 4th Floor, TechPark Building, Bandra Kurla Complex, Bandra (East), Mumbai, Maharashtra 400051, India",
        "• CIN: U72900MH2024PTC3XXXXX",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
              <ArrowLeft size={14} />
              Back to PlusOne
            </Link>
            <div className="flex items-center gap-2 text-xs text-white/20">
              <Shield size={12} />
              Privacy · v{version}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-purple-500/10 border border-plus-purple-500/20 rounded-full text-plus-purple-300 text-xs font-medium mb-4">
            <Shield size={11} />
            Privacy Policy
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-white/30">Last Updated: {lastUpdated} · Version {version}</p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.number}>
              <div className="flex items-start gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {section.number}
                </span>
                <h2 className="text-white font-semibold text-base sm:text-lg">{section.title}</h2>
              </div>
              <div className="pl-10 space-y-3">
                {section.content.map((item, i) =>
                  typeof item === "object" && item.type === "heading" ? (
                    <h3 key={i} className="text-white/70 font-medium text-sm mt-3 mb-1.5">{item.text}</h3>
                  ) : (
                    <p key={i} className="text-white/40 text-sm leading-relaxed">{item as string}</p>
                  )
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 p-6 bg-surface-900/50 border border-white/5 rounded-2xl">
          <p className="text-white/20 text-xs text-center leading-relaxed">
            This Privacy Policy is a legal document. It does not constitute legal advice. Consult a qualified attorney for advice specific to your circumstances.
            © {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
