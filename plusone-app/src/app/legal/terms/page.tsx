import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for PlusOne — the verified social activity marketplace.",
};

const effectiveDate = "October 1, 2024";
const version = "1.0";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      {/* Top Bar */}
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
              <ArrowLeft size={14} />
              Back to PlusOne
            </Link>
            <div className="flex items-center gap-2 text-xs text-white/20">
              <Shield size={12} />
              Legal · v{version}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 px-3 py-1 bg-plus-purple-500/10 border border-plus-purple-500/20 rounded-full text-plus-purple-300 text-xs font-medium mb-4">
            <Shield size={11} />
            Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-white/30">
            Effective Date: {effectiveDate} · Version {version}
          </p>
          <p className="text-white/20 text-sm mt-2 max-w-2xl">
            By accessing or using PlusOne ("the Platform"), you agree to be bound by these Terms of Service.
            If you do not agree, do not use the Platform.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-plus-purple-500/5 border border-plus-purple-500/10 rounded-2xl p-5 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 size={14} className="text-plus-purple-300" />
            <span className="text-plus-purple-200 text-sm font-medium">Key Points — Read This First</span>
          </div>
          <ul className="space-y-2 text-sm">
            {[
              "PlusOne is a marketplace connecting independent adults for lawful social activities — not a dating app, not an escort service, not a matrimonial platform.",
              "You must be 18+ to use this platform. All providers must verify their identity.",
              "All bookings and payments stay on the platform. Off-platform payments void your protection.",
              "You are responsible for your own conduct and decisions. The platform provides technology — not supervision.",
              "Violating our Community Guidelines can result in account suspension or permanent removal.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-white/50">
                <span className="text-plus-purple-300 mt-0.5 shrink-0">{i + 1}.</span>
                <span dangerouslySetInnerHTML={{ __html: point.replace(/\n/g, "<br/>") }} />
              </li>
            ))}
          </ul>
        </div>

        {/* Full Terms */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">1</span>
              <h2 className="text-white font-semibold text-lg">Acceptance of Terms</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 mb-3 leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the PlusOne platform, including the website at plusone.app, any mobile applications, and all related services (collectively, the "Platform").
              </p>
              <p className="text-white/40 leading-relaxed">
                By creating an account, browsing, booking, or otherwise using the Platform, you represent that you are at least 18 years old, capable of entering into binding contracts, and agree to be bound by these Terms. If you are using the Platform on behalf of an organization, you represent that you have authority to bind that organization.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">2</span>
              <h2 className="text-white font-semibold text-lg">Description of Service</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed mb-3">
                PlusOne operates an online marketplace that enables independent users to discover, connect with, and pay for lawful social and recreational activities with one another. We do not employ, supervise, or control users, nor do we organize, conduct, guarantee, or warrant the quality, legality, safety, or outcome of any user interaction.
              </p>
              <p className="text-white/40 leading-relaxed mb-3">
                <strong>PlusOne is NOT:</strong>
              </p>
              <ul className="space-y-1.5 text-white/40 pl-5 list-disc">
                <li>A dating app or matchmaking service</li>
                <li>A matrimonial platform</li>
                <li>An escort or sex work platform</li>
                <li>An adult service provider</li>
                <li>An employment or staffing agency</li>
                <li>A guarantee of any romantic or personal outcome</li>
              </ul>
              <p className="text-white/40 leading-relaxed">
                <strong>PlusOne IS:</strong> A technology platform that helps verified adults find each other for activities like movies, coffee, city exploration, museums, sports, gaming, study sessions, and other lawful social pursuits.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">3</span>
              <h2 className="text-white font-semibold text-lg">Eligibility</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed mb-3">
                You must be at least 18 years old and located in a jurisdiction where the Platform is available to use PlusOne. By using the Platform, you represent and warrant that you meet these requirements.
              </p>
              <p className="text-white/40 leading-relaxed">
                You may not use the Platform if you are prohibited from receiving services under applicable law, including but not limited to individuals subject to blocking orders, sanctions, or legal restrictions.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">4</span>
              <h2 className="text-white font-semibold text-lg">Account Registration and Verification</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed mb-3">
                To use certain features of the Platform, you must create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information updated.
              </p>
              <p className="text-white/40 leading-relaxed mb-3">
                <strong>Identity Verification:</strong> Providers on the Platform may be required to complete identity verification, which may include government-issued ID verification, selfie with liveness detection, phone verification, and/or social account linking. We reserve the right to require additional verification at any time.
              </p>
              <p className="text-white/40 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">5</span>
              <h2 className="text-white font-semibold text-lg">User Conduct and Community Guidelines</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed mb-3">
                You agree to use the Platform in compliance with all applicable laws and these Terms. You must not:
              </p>
              <ul className="space-y-1.5 text-white/40 pl-5 list-disc mb-3">
                <li>Use the Platform to solicit or offer sexual services, escort services, or any illegal activity</li>
                <li>Harass, threaten, intimidate, or bully other users</li>
                <li>Use hate speech, discriminatory language, or content that promotes hatred</li>
                <li>Attempt to communicate with minors through the Platform</li>
                <li>Share explicit or illegal content</li>
                <li>Create fake accounts, impersonate others, or use deceptive information</li>
                <li>Circumvent any technical measures or restrictions</li>
                <li>Use the Platform for any purpose other than lawful social activities</li>
                <li>Transfer money or payments outside the Platform</li>
              </ul>
              <p className="text-white/40 leading-relaxed">
                We may suspend or terminate your account at any time, without prior notice, for conduct we reasonably believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">6</span>
              <h2 className="text-white font-semibold text-lg">Platform Role and Disclaimers</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed mb-3">
                <strong>Our Role:</strong> PlusOne provides a technology platform that enables users to discover each other for lawful activities. We are not a party to any user interaction. We do not organize activities, supervise users, guarantee outcomes, or endorse any particular user or activity.
              </p>
              <p className="text-white/40 leading-relaxed mb-3">
                <strong>User Responsibility:</strong> Each user is solely responsible for their own conduct, decisions, and interactions with other users. You assume all risks associated with meeting another independent adult through the Platform.
              </p>
              <p className="text-white/40 leading-relaxed mb-3">
                <strong>No Guarantee:</strong> We do not guarantee that any specific activity will occur, that any user will be suitable, or that any interaction will be safe or satisfactory. User ratings and reviews are subjective opinions and should not be relied upon as guarantees of future performance.
              </p>
              <p className="text-white/40 leading-relaxed">
                <strong>Your Safety:</strong> You are responsible for taking appropriate safety precautions when meeting other users. We encourage but cannot require any specific safety behavior. For safety recommendations, see our Safety Center.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">7</span>
              <h2 className="text-white font-semibold text-lg">Payments</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed mb-3">
                All payments for bookings must be made through the Platform. We do not permit or facilitate off-platform payments.
              </p>
              <p className="text-white/40 leading-relaxed mb-3">
                <strong>Platform Fees:</strong> The Platform charges a commission of 15% plus a platform fee of 2–5% on each completed booking. Provider hourly rates are set by providers. The Platform may enforce a minimum hourly rate.
              </p>
              <p className="text-white/40 leading-relaxed">
                <strong>Escrow:</strong> Payments are held in escrow until the activity is confirmed as completed. Funds are released to the provider within 24 hours of activity completion, subject to our review process.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">8</span>
              <h2 className="text-white font-semibold text-lg">Cancellation and Refunds</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed">
                Cancellation policies vary by booking. In general:
              </p>
              <ul className="space-y-1.5 text-white/40 pl-5 list-disc mb-3">
                <li>Cancelling more than 48 hours before the activity: Full refund</li>
                <li>Cancelling 24–48 hours before: 50% refund may apply</li>
                <li>Cancelling less than 24 hours before: No refund</li>
                <li>If a host cancels: Full refund to the customer + penalty on the host's account</li>
                <li>If a customer no-shows: No refund + penalty on the customer's account</li>
              </ul>
              <p className="text-white/40 text-xs mt-3">
                Full refund policy available at /refund-policy.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">9</span>
              <h2 className="text-white font-semibold text-lg">Content and Intellectual Property</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed">
                The Platform and its original content, features, functionality, and design are owned by PlusOne Technologies Pvt. Ltd. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="text-white/40 leading-relaxed">
                User-generated content (profiles, reviews, messages) remains the property of the respective users, subject to the licenses granted to us in these Terms. By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display that content in connection with operating the Platform.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">10</span>
              <h2 className="text-white font-semibold text-lg">Disclaimer of Warranties</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed">
                THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">11</span>
              <h2 className="text-white font-semibold text-lg">Limitation of Liability</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PLUSONE TECHNOLOGIES PVT. LTD., ITS AFFILIATES, OFFICERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE PLATFORM.
              </p>
              <p className="text-white/40 leading-relaxed mt-3">
                Our total liability to you for any claim arising out of or relating to these Terms or the Platform shall not exceed the total amount you have paid to us in the 12 months preceding the claim.
              </p>
              <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 mt-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle size={14} className="text-amber-300 mt-0.5 shrink-0" />
                  <p className="text-amber-200/70 text-xs leading-relaxed">
                    <strong>Important:</strong> Some jurisdictions do not allow limitations on liability. To the extent permitted by law, the above limitations apply. Nothing in these Terms limits liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 12 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">12</span>
              <h2 className="text-white font-semibold text-lg">Termination</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed">
                We may terminate or suspend your account and access to the Platform immediately, without prior notice, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the Platform ceases immediately. Provisions of these Terms that by their nature should survive termination shall survive.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">13</span>
              <h2 className="text-white font-semibold text-lg">Governing Law and Disputes</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed mb-3">
                These Terms are governed by the laws of India, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra, India.
              </p>
              <p className="text-white/40 leading-relaxed">
                For information about our dispute resolution process and arbitration provisions, please see our{" "}
                <Link href="/legal/arbitration" className="text-plus-purple-300 underline hover:text-plus-purple-200">Arbitration Agreement</Link>.
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">14</span>
              <h2 className="text-white font-semibold text-lg">Changes to Terms</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed">
                We reserve the right to modify these Terms at any time. Material changes will be notified via email or in-app notification. Your continued use of the Platform after changes becomes effective constitutes acceptance of the updated Terms. We encourage you to review these Terms regularly.
              </p>
            </div>
          </section>

          {/* Section 15 */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-plus-purple-500/20 text-plus-purple-300 text-xs font-bold flex items-center justify-center">15</span>
              <h2 className="text-white font-semibold text-lg">Contact Us</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/40 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-white/[0.02] rounded-xl p-4 mt-3 space-y-1.5">
                <div className="text-white/60 text-sm">Email: <a href="mailto:hello@plusone.app" className="text-plus-purple-300 hover:text-plus-purple-200">hello@plusone.app</a></div>
                <div className="text-white/60 text-sm">Registered Office: 4th Floor, TechPark Building, Bandra Kurla Complex, Bandra (East), Mumbai, Maharashtra 400051, India</div>
                <div className="text-white/60 text-sm">CIN: U72900MH2024PTC3XXXXX</div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-6 bg-surface-900/50 border border-white/5 rounded-2xl">
          <p className="text-white/30 text-sm text-center leading-relaxed">
            These Terms are a legal agreement. By using PlusOne, you confirm you have read, understood, and agree to be bound by them.
            This document is for informational purposes and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation.
          </p>
        </div>
      </div>
    </div>
  );
}
