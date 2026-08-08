"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  AtSign,
  X,
  Link as LinkIcon,
  Mail,
  Shield,
  CreditCard,
  Users,
  MessageSquare,
  Zap,
  ArrowUpRight,
  Star,
  Check,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  platform: [
    { label: "Find a PlusOne", href: "/#find" },
    { label: "Earn money", href: "/hosts" },
    { label: "How It Works", href: "/#how" },
    { label: "Safety Center", href: "/safety" },
    { label: "Community Guidelines", href: "/community-guidelines" },
    { label: "Top Earners", href: "/leaderboard" },
  ],
  for_earners: [
    { label: "Earn money", href: "/dashboard" },
    { label: "Earnings & Payouts", href: "/wallet" },
    { label: "Pricing Guide", href: "/host-pricing" },
    { label: "Earning resources", href: "/host-resources" },
    { label: "Verification Guide", href: "/verification" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Service Agreement", href: "/service-agreement" },
    { label: "DPA", href: "/data-processing" },
    { label: "GDPR", href: "/gdpr" },
    { label: "CCPA", href: "/ccpa" },
    { label: "DMCA", href: "/dmca" },
    { label: " arbitration", href: "/arbitration" },
    { label: "Responsible Disclosure", href: "/responsible-disclosure" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Contact Us", href: "/contact" },
    { label: "Report a Safety Issue", href: "/report" },
    { label: "Dispute Resolution", href: "/disputes" },
    { label: "COVID-19 Safety", href: "/covid-safety" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

const brands = [
  { name: "Instagram", href: "https://instagram.com/plusoneapp", icon: Mail },
  { name: "X", href: "https://x.com/plusoneapp", icon: X },
  { name: "LinkedIn", href: "https://linkedin.com/company/plusoneapp", icon: AtSign },
  { name: "YouTube", href: "https://youtube.com/@plusoneapp", icon: LinkIcon },
  { name: "Discord", href: "https://discord.gg/plusoneapp", icon: MessageSquare },
];

export default function Footer() {
  return (
    <footer className="relative bg-surface-950 border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-plus-purple-500/5 to-transparent rounded-full blur-3xl" />

      {/* Trust Bar */}
      <div className="relative z-10 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs text-white/30">
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-green-400" />
              <span className="text-white/40">Identity Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard size={14} className="text-plus-blue-400" />
              <span className="text-white/40">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-plus-purple-400" />
              <span className="text-white/40">Trust & Safety First</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-amber-400" />
              <span className="text-white/40">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 flex items-center justify-center">
                  <span className="text-white font-black text-lg">+</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">
                  Plus<span className="text-plus-purple-400">One</span>
                </span>
              </Link>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
                The world's safest marketplace for finding verified people to share real-life activities.
                Your friend cancelled? We've got you.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {brands.map((brand) => (
                  <a
                    key={brand.name}
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                    aria-label={brand.name}
                  >
                    <brand.icon size={16} />
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-white/25">
                <Star size={12} className="text-amber-400/60 fill-amber-400/20" />
                <span>Trusted by <strong className="text-white/40">12,000+</strong> happy users across India</span>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Platform</h4>
              <ul className="space-y-2.5">
                {footerLinks.platform.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Host Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">For Hosts</h4>
              <ul className="space-y-2.5">
                {footerLinks.for_earners.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href.startsWith("#") ? "/" : link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      {link.label.trim()}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
              <ul className="space-y-2.5">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/5 bg-white/[0.02] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs text-white/25">
              <span className="text-white/30">© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_COMPANY_NAME || "PlusOne Technologies Pvt. Ltd."}. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-xs">
              <Link href="/terms" className="text-white/25 hover:text-white/50 transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-white/25 hover:text-white/50 transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="text-white/25 hover:text-white/50 transition-colors">
                Cookies
              </Link>
              <Link href="/accessibility" className="text-white/25 hover:text-white/50 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-white/15">
            <span>Made with care in Mumbai 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
