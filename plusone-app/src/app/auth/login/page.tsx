"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Sparkles, Shield, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate login
    await new Promise((r) => setTimeout(r, 1500));

    if (email && password.length >= 6) {
      router.push("/dashboard");
    } else {
      setError("Please enter a valid email and password (min 6 characters).");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-999">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.1)_0%,transparent_60%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-plus-blue-500/10 via-plus-purple-500/10 to-plus-pink-500/10 relative flex-col justify-between p-12 overflow-hidden">
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
            "Your friends cancelled?<br />
            <span className="bg-gradient-to-r from-plus-blue-400 to-plus-purple-400 bg-clip-text text-transparent">We won't."</span>
          </blockquote>
          <p className="text-white/40 text-lg leading-relaxed max-w-md">
            The world's safest marketplace for finding verified people to share real-life activities.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            {[
              { value: "12K+", label: "Members" },
              { value: "4.97★", label: "Rating" },
              { value: "2,800+", label: "Bookings" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-white/30">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-xs text-white/20">
          <Shield size={14} className="text-plus-green-400/60" />
          <span>Identity verified · In-app payments · 24/7 safety support</span>
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

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Welcome back
            </h1>
            <p className="text-white/30">
              Log in to find your next activity partner.
            </p>
          </div>

          {/* Social Login */}
          <div className="flex gap-3 mb-6">
            {[
              { label: "Google", icon: "G" },
              { label: "Apple", icon: "" },
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
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
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
              <span className="bg-surface-950 px-3 text-white/20">or continue with email</span>
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
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              leftIcon={<Mail size={16} />}
              required
              autoComplete="email"
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              leftIcon={<Lock size={16} />}
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
              required
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-white/10 bg-white/5 text-plus-purple-500 focus:ring-plus-purple-500/30 focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-sm text-white/40">Remember me</span>
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-sm text-plus-purple-300 hover:text-plus-purple-200 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              size="lg"
              fullWidth
              isLoading={isLoading}
              className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 mt-2"
            >
              Log in
            </Button>
          </form>

          <p className="text-center text-white/20 text-sm mt-6">
            Don't have an account?{" "}
            <Link href="/auth/register" className="text-plus-purple-300 hover:text-plus-purple-200 font-medium transition-colors">
              Sign up free
            </Link>
          </p>

          {/* Legal */}
          <p className="text-center text-[10px] text-white/10 mt-8 leading-relaxed">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-white/30">Terms of Service</Link>
            {" "}and{" "}
            <Link href="/privacy" className="underline hover:text-white/30">Privacy Policy</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
