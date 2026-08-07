"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Phone,
  ArrowLeft,
  Shield,
  AlertCircle,
  Sparkles,
  Check,
  Star,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create your account",
    description: "Sign up with your email or phone number.",
  },
  {
    number: "02",
    title: "Verify your identity",
    description: "We'll verify your phone and optionally your government ID.",
  },
  {
    number: "03",
    title: "Find your PlusOne",
    description: "Search, book, and start doing things with verified people.",
  },
];

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (error) setError("");
  };

  const validate = () => {
    if (!form.name.trim() || form.name.length < 2) return "Please enter your full name.";
    if (!form.email.includes("@")) return "Please enter a valid email address.";
    if (form.phone && form.phone.length < 10) return "Please enter a valid phone number.";
    if (form.password.length < 8) return "Password must be at least 8 characters.";
    if (form.password !== form.confirmPassword) return "Passwords do not match.";
    if (!form.agreeToTerms) return "You must agree to the Terms of Service.";
    if (!form.agreeToPrivacy) return "You must agree to the Privacy Policy.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    router.push("/auth/verify?type=phone");
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-999">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(139,92,246,0.1)_0%,transparent_60%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Left panel */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-plus-purple-500/10 via-plus-pink-500/5 to-plus-blue-500/10 relative flex-col justify-between p-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 flex items-center justify-center">
              <span className="text-white font-black text-lg">+</span>
            </div>
            <span className="text-white font-bold text-xl">
              Plus<span className="text-plus-purple-400">One</span>
            </span>
          </Link>
        </div>

        <div className="relative z-10 space-y-6">
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-[1.1] tracking-tight">
            "Stop waiting.<br />
            <span className="bg-gradient-to-r from-plus-purple-400 to-plus-pink-400 bg-clip-text text-transparent">Start doing."</span>
          </blockquote>
          <p className="text-white/40 text-lg leading-relaxed max-w-sm">
            Join thousands of people who found their activity partner through PlusOne. Verified, safe, and genuinely fun.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            {[
              { icon: Shield, text: "100% Identity Verified" },
              { icon: Star, text: "4.97 Average Rating" },
              { icon: Sparkles, text: "Find matches in minutes" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/40 text-sm">
                <item.icon size={14} className="text-plus-purple-400/60" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <Link href="/" className="lg:hidden flex items-center gap-2.5 justify-center mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 flex items-center justify-center">
              <span className="text-white font-black text-lg">+</span>
            </div>
            <span className="text-white font-bold text-xl">
              Plus<span className="text-plus-purple-400">One</span>
            </span>
          </Link>

          {/* Steps */}
          <div className="flex items-center gap-2 mb-8">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    i < 1 ? "bg-plus-purple-500 text-white" : i === 1 ? "bg-white/10 text-white/40" : "bg-white/5 text-white/20"
                  }`}
                >
                  {i < 1 ? <Check size={12} /> : step.number}
                </div>
                <span className={`text-xs ${i <= 0 ? "text-white/40" : "text-white/15"}`}>
                  {step.title.split(" ")[0]}
                </span>
                {i < steps.length - 1 && (
                  <div className="w-8 h-px bg-white/10" />
                )}
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Create your account
            </h1>
            <p className="text-white/30">Free to join. No credit card required.</p>
          </div>

          {/* Social Login */}
          <div className="flex gap-3 mb-6">
            {[
              { label: "Continue with Google", icon: "G" },
              { label: "Continue with Apple", icon: "" },
            ].map((social) => (
              <button
                key={social.label}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                {social.icon === "G" ? (
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  </svg>
                ) : (
                  <span className="text-white/60 text-lg">{social.icon}</span>
                )}
                {social.label}
              </button>
            ))}
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-surface-950 px-3 text-white/20">or sign up with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm">
                <AlertCircle size={14} />
                {error}
              </div>
            )}

            <Input
              label="Full name"
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Aryan Kapoor"
              leftIcon={<User size={16} />}
              required
              autoComplete="name"
            />

            <Input
              label="Email address"
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="you@example.com"
              leftIcon={<Mail size={16} />}
              required
              autoComplete="email"
            />

            <Input
              label="Phone number"
              type="tel"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+91 98765 43210"
              leftIcon={<Phone size={16} />}
              hint="For identity verification (optional for now)"
              required
              autoComplete="tel"
            />

            <Input
              label="Password"
              type="password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="At least 8 characters"
              leftIcon={<Lock size={16} />}
              rightElement={
                <button
                  type="button"
                  onClick={() => {
                    const pw = form.password;
                    // just for show
                  }}
                  className="text-white/30 hover:text-white/60 transition-colors"
                >
                  <Eye size={16} />
                </button>
              }
              required
              autoComplete="new-password"
            />

            <Input
              label="Confirm password"
              type="password"
              value={form.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              placeholder="Confirm your password"
              leftIcon={<Lock size={16} />}
              required
              autoComplete="new-password"
            />

            <div className="space-y-2.5">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={form.agreeToTerms}
                  onChange={(e) => handleChange("agreeToTerms", e.target.checked)}
                  className="w-4 h-4 mt-0.5 shrink-0 rounded border-white/10 bg-white/5 text-plus-purple-500 focus:ring-plus-purple-500/30 focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
                  I agree to the{" "}
                  <Link href="/terms" className="text-plus-purple-300 hover:text-plus-purple-200 underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="text-plus-purple-300 hover:text-plus-purple-200 underline">Privacy Policy</Link>
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={form.agreeToPrivacy}
                  onChange={(e) => handleChange("agreeToPrivacy", e.target.checked)}
                  className="w-4 h-4 mt-0.5 shrink-0 rounded border-white/10 bg-white/5 text-plus-purple-500 focus:ring-plus-purple-500/30 focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
                  I want to receive activity recommendations and updates via email and SMS.{" "}
                  <Link href="/privacy" className="text-plus-purple-300 hover:text-plus-purple-200 underline">Manage preferences</Link>
                </span>
              </label>
            </div>

            <Button
              type="submit"
              size="lg"
              fullWidth
              isLoading={isLoading}
              disabled={!form.agreeToTerms || !form.agreeToPrivacy}
              className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 mt-2"
            >
              Create account
            </Button>
          </form>

          <p className="text-center text-white/20 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-plus-purple-300 hover:text-plus-purple-200 font-medium transition-colors">
              Log in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
