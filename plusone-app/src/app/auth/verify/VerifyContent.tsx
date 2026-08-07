"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Mail, Phone, Camera, Check, Loader2, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

export function VerifyContent() {
  const searchParams = useSearchParams();
  const verificationType = searchParams.get("type") || "phone";
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"enter" | "sending" | "verifying" | "success" | "id">("enter");
  const [currentIndex, setCurrentIndex] = useState(0);

  const verificationMethods = [
    {
      id: "phone",
      icon: Phone,
      title: "Phone Verification",
      description: "We'll send a 6-digit code to your phone number.",
      color: "text-plus-blue-300",
      bg: "bg-plus-blue-500/10",
      border: "border-plus-blue-500/20",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email Verification",
      description: "We'll send a verification link to your email address.",
      color: "text-plus-purple-300",
      bg: "bg-plus-purple-500/10",
      border: "border-plus-purple-500/20",
    },
    {
      id: "id",
      icon: Camera,
      title: "Government ID",
      description: "Upload your government-issued ID for verification.",
      color: "text-plus-green-300",
      bg: "bg-plus-green-500/10",
      border: "border-plus-green-500/20",
    },
  ];

  const handleCodeChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) {
      setCurrentIndex(index + 1);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      setCurrentIndex(index - 1);
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
    }
    if (e.key === "ArrowLeft" && index > 0) {
      setCurrentIndex(index - 1);
    }
    if (e.key === "ArrowRight" && index < 5) {
      setCurrentIndex(index + 1);
    }
  };

  const handleSubmitCode = async () => {
    const fullCode = code.join("");
    if (fullCode.length !== 6) return;
    setIsLoading(true);
    setStep("verifying");
    await new Promise((r) => setTimeout(r, 2000));
    setStep("success");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 justify-center mb-8">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 flex items-center justify-center">
          <span className="text-white font-black text-lg">+</span>
        </div>
        <span className="text-white font-bold text-xl">
          Plus<span className="text-plus-purple-400">One</span>
        </span>
      </Link>

      {step === "enter" && (
        <>
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-cyan-500/10 border border-plus-cyan-500/20 rounded-full text-plus-cyan-300 text-sm mb-4">
              <Shield size={12} />
              Verify your account
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Let's verify you
            </h1>
            <p className="text-white/30">Choose how you'd like to verify your identity.</p>
          </div>

          {/* Verification methods */}
          <div className="space-y-3 mb-6">
            {verificationMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setStep(method.id === "id" ? "id" : "sending")}
                className={`w-full rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                  verificationType === method.id
                    ? `${method.bg} ${method.border} border-current`
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${method.bg} flex items-center justify-center shrink-0`}>
                    <method.icon size={18} className={method.color} />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">{method.title}</div>
                    <div className="text-white/30 text-xs mt-0.5">{method.description}</div>
                  </div>
                  {verificationType === method.id && (
                    <div className="w-5 h-5 rounded-full bg-plus-purple-500 flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <Button
            fullWidth
            size="lg"
            className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500"
          >
            Continue with {verificationMethods.find((m) => m.id === verificationType)?.title}
            <ArrowRight size={16} />
          </Button>
        </>
      )}

      {step === "sending" && (
        <>
          <div className="mb-8 text-center">
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-plus-purple-500/20 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={24} className="text-plus-purple-300" />
            </motion.div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Code sent!
            </h1>
            <p className="text-white/30">
              We sent a 6-digit verification code to your {verificationType === "phone" ? "phone number" : "email address"}.
            </p>
          </div>

          {/* OTP Inputs */}
          <div className="mb-8">
            <div className="grid grid-cols-6 gap-2 mb-4">
              {code.map((digit, i) => (
                <input
                  key={i}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={`w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl sm:text-3xl font-bold bg-white/5 border rounded-xl text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-plus-purple-500/30 focus:border-plus-purple-500/50 transition-all ${
                    i === currentIndex ? "border-plus-purple-500/50 ring-2 ring-plus-purple-500/20" : ""
                  }`}
                  autoFocus={i === 0}
                />
              ))}
            </div>
            <p className="text-center text-white/20 text-xs">
              Didn't receive the code?{" "}
              <button className="text-plus-purple-300 hover:text-plus-purple-200 underline">
                Resend
              </button>
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              variant="secondary"
              fullWidth
              onClick={() => setStep("enter")}
              className="flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
            <Button
              fullWidth
              size="lg"
              isLoading={isLoading}
              onClick={handleSubmitCode}
              disabled={code.join("").length !== 6}
              className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 flex-1 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  Verify
                  <Check size={16} />
                </>
              )}
            </Button>
          </div>
        </>
      )}

      {step === "verifying" && (
        <div className="text-center">
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-plus-purple-500/20 flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Loader2 size={24} className="text-plus-purple-300 animate-spin" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
            Verifying your identity...
          </h1>
          <p className="text-white/30">This usually takes a few seconds.</p>
        </div>
      )}

      {step === "success" && (
        <div className="text-center">
          <motion.div
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-plus-green-500/20 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
          >
            <Check size={32} className="text-plus-green-300" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
            You're verified!
          </h1>
          <p className="text-white/30 mb-8">Welcome to PlusOne. Your account is now active.</p>
          <Button
            size="lg"
            fullWidth
            className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500"
            onClick={() => window.location.href = "/"}
          >
            Go to homepage
            <ArrowRight size={16} />
          </Button>
        </div>
      )}

      {step === "id" && (
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Government ID Verification
            </h1>
            <p className="text-white/30">Upload a photo of your government-issued ID.</p>
          </div>

          <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 mb-6 hover:border-plus-purple-500/30 transition-all cursor-pointer group">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-plus-purple-500/20 transition-colors">
                <Camera size={24} className="text-white/30 group-hover:text-plus-purple-300 transition-colors" />
              </div>
              <p className="text-white/50 text-sm">Click to upload ID document</p>
              <p className="text-white/20 text-xs">PNG, JPG · Max 10MB</p>
            </div>
          </div>

          <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 mb-6 hover:border-plus-purple-500/30 transition-all cursor-pointer group">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-plus-purple-500/20 transition-colors">
                <Camera size={24} className="text-white/30 group-hover:text-plus-purple-300 transition-colors" />
              </div>
              <p className="text-white/50 text-sm">Take a selfie with your ID</p>
              <p className="text-white/20 text-xs">Selfie + liveness check required</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="secondary"
              fullWidth
              onClick={() => setStep("enter")}
              className="flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
            <Button
              fullWidth
              size="lg"
              className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 flex-1 flex items-center justify-center gap-2"
              disabled
            >
              Continue
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      )}

      <p className="text-center text-[10px] text-white/10 mt-8">
        By verifying, you agree to our{" "}
        <Link href="/terms" className="underline hover:text-white/30">Terms</Link>
        {" "}and{" "}
        <Link href="/privacy" className="underline hover:text-white/30">Privacy Policy</Link>.
      </p>
    </motion.div>
  );
}
