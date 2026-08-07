"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn, formatPrice } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Clock,
  Download,
  Plus,
  ArrowRight,
  CheckCircle2,
  Loader2,
  CreditCard,
  Banknote,
  Shield,
  Star,
  Award,
  Activity,
  PieChart,
  Calendar,
} from "lucide-react";
import { MOCK_WALLET, MOCK_PROVIDERS } from "@/lib/mock-data";

export default function WalletPage() {
  const [showPayout, setShowPayout] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState("");
  const [payoutMethod, setPayoutMethod] = useState("bank");
  const [isPayoutLoading, setIsPayoutLoading] = useState(false);

  const wallet = MOCK_WALLET;
  const [isPrimary, setIsPrimary] = useState(true);

  const totalEarned = wallet.balance + wallet.pending;
  const pendingPercent = Math.round((wallet.pending / totalEarned) * 100);

  const monthlyTransactions = wallet.transactions.filter(
    (t) => t.createdAt > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  );

  const handlePayout = async () => {
    if (!payoutAmount || parseFloat(payoutAmount) <= 0) return;
    setIsPayoutLoading(true);
    await new Promise((r) => setTimeout(r, 2500));
    setShowPayout(false);
    setPayoutAmount("");
    setIsPayoutLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Wallet</h1>
          <p className="text-white/30 mt-1">Manage your earnings and payouts.</p>
        </div>
        <Button size="sm" className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500">
          <Deposit size={14} />
          Add Funds
        </Button>
      </div>

      {/* Wallet Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card className="relative overflow-hidden col-span-1 sm:col-span-2" glow={false}>
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-plus-purple-500/10 to-plus-pink-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-plus-blue-500/5 to-transparent rounded-full blur-xl" />

          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-1">Available Balance</p>
                <p className="text-3xl sm:text-4xl font-black text-white">
                  {formatPrice(wallet.available)}
                  <span className="text-sm font-normal text-white/20"> INR</span>
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-plus-green-500/20 to-plus-green-500/5 border border-plus-green-500/20 flex items-center justify-center">
                <TrendingUp size={20} className="text-plus-green-300" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/5">
              <div>
                <div className="text-xs text-white/20 mb-1">Total Earnings</div>
                <div className="text-white font-semibold">{formatPrice(totalEarned)}</div>
              </div>
              <div>
                <div className="text-xs text-white/20 mb-1">Pending</div>
                <div className="text-white/50 font-semibold">{formatPrice(wallet.pending)}</div>
              </div>
            </div>

            {/* Progress bar for pending */}
            <div className="mt-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/20">{pendingPercent}% held in pending bookings</span>
                <span className="text-white/20">{formatPrice(wallet.pending)}</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-plus-purple-500 rounded-full"
                  style={{ width: `${pendingPercent}%` }}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <Card padding="lg">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-plus-green-500/10 flex items-center justify-center">
                <Banknote size={16} className="text-plus-green-300" />
              </div>
              <div>
                <div className="text-xs text-white/20">Avg. Booking Value</div>
                <div className="text-white font-semibold">₹1,840</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-plus-blue-500/10 flex items-center justify-center">
                <Activity size={16} className="text-plus-blue-300" />
              </div>
              <div>
                <div className="text-xs text-white/20">This Month</div>
                <div className="text-white font-semibold">{wallet.transactions.filter(t => t.type === "earn").length} bookings</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Star size={16} className="text-amber-300" />
              </div>
              <div>
                <div className="text-xs text-white/20">Current Rating</div>
                <div className="text-white font-semibold">4.98 ★</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-plus-purple-500/10 flex items-center justify-center">
                <Award size={16} className="text-plus-purple-300" />
              </div>
              <div>
                <div className="text-xs text-white/20">Trust Level</div>
                <div className="text-white font-semibold">💎 Diamond</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Payout Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payout Form */}
        <div className="lg:col-span-2">
          <Card padding="lg" className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-white font-semibold text-lg">Withdraw Funds</h2>
                <p className="text-white/30 text-sm mt-0.5">Transfer your available balance to your bank account.</p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowPayout(!showPayout)}
              >
                {showPayout ? "Cancel" : "Withdraw"}
              </Button>
            </div>

            <AnimatePresence>
              {showPayout && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/5 pt-5 mt-2 space-y-4">
                    {/* Payout Method */}
                    <div>
                      <label className="text-white text-sm font-medium mb-3 block">Payout Method</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          { id: "bank", label: "Bank Transfer", icon: CreditCard, info: "2-3 business days" },
                          { id: "wallet", label: "Wallet Transfer", icon: TrendingUp, info: "Instant" },
                          { id: "upi", label: "UPI", icon: Activity, info: "Instant" },
                        ].map((method) => (
                          <button
                            key={method.id}
                            onClick={() => setPayoutMethod(method.id)}
                            className={cn(
                              "flex items-center gap-2 p-3 rounded-xl border text-left transition-all",
                              payoutMethod === method.id
                                ? "bg-plus-purple-500/15 border-plus-purple-500/30"
                                : "bg-white/5 border-white/5 hover:bg-white/10"
                            )}
                          >
                            <method.icon size={14} className={payoutMethod === method.id ? "text-plus-purple-300" : "text-white/30"} />
                            <div className="text-left">
                              <div className="text-white text-sm font-medium">{method.label}</div>
                              <div className="text-white/20 text-xs">{method.info}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Amount */}
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Amount to withdraw</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 font-medium">₹</span>
                        <input
                          type="number"
                          value={payoutAmount}
                          onChange={(e) => setPayoutAmount(e.target.value)}
                          placeholder={wallet.available.toString()}
                          min={0}
                          max={wallet.available}
                          className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-plus-purple-500/30 focus:border-plus-purple-500/50"
                        />
                      </div>
                      <p className="text-xs text-white/20 mt-1.5">
                        Minimum payout: ₹500 · Available: {formatPrice(wallet.available)}
                      </p>
                    </div>

                    {/* Bank Details */}
                    {payoutMethod === "bank" && (
                      <div className="grid grid-cols-2 gap-3">
                        <Input label="Account Holder Name" defaultValue="Riya Sharma" />
                        <Input label="Account Number" defaultValue="•••• •••• •••• 4567" />
                        <Input label="IFSC Code" defaultValue="UTIB0001234" />
                        <Input label="Bank Name" defaultValue="UTI Bank" />
                      </div>
                    )}

                    {/* Fee */}
                    <div className="bg-white/[0.02] rounded-xl p-3 flex items-center justify-between">
                      <span className="text-white/30 text-sm">Processing fee</span>
                      <span className="text-white/50 text-sm">₹0 (free for Diamond members)</span>
                    </div>

                    <Button
                      fullWidth
                      size="lg"
                      className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 mt-2"
                      isLoading={isPayoutLoading}
                      onClick={handlePayout}
                      disabled={!payoutAmount || parseFloat(payoutAmount) <= 0 || parseFloat(payoutAmount) > wallet.available}
                    >
                      {isPayoutLoading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Withdraw {formatPrice(parseFloat(payoutAmount) || 0)}
                          <ArrowRight size={16} />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>

        {/* Transaction History */}
        <div>
          <Card padding="lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white font-semibold text-base">Recent Transactions</h2>
              <button className="text-xs text-plus-purple-300 hover:text-plus-purple-200">
                View all
              </button>
            </div>

            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {wallet.transactions.map((txn) => (
                <div key={txn.id} className="flex items-start gap-3">
                  <div
                    className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                      txn.type === "earn" ? "bg-plus-green-500/10" :
                      txn.type === "payout" ? "bg-white/5" :
                      txn.type === "bonus" ? "bg-amber-500/10" :
                                              "bg-rose-500/10"
                    )}
                  >
                    {txn.type === "earn" ? (
                      <TrendingUp size={14} className="text-plus-green-300" />
                    ) : txn.type === "payout" ? (
                      <ArrowRight size={14} className="text-white/30" style={{ transform: "rotate(180deg)" }} />
                    ) : txn.type === "bonus" ? (
                      <Star size={14} className="text-amber-300" />
                    ) : (
                      <Shield size={14} className="text-rose-300" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-white text-sm font-medium truncate">{txn.description}</span>
                      <span
                        className={cn(
                          "text-sm font-semibold shrink-0",
                          txn.amount > 0 ? "text-plus-green-300" : "text-white/50"
                        )}
                      >
                        {txn.amount > 0 ? "+" : ""}{formatPrice(txn.amount)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/20">
                      <Calendar size={9} />
                      {format(new Date(txn.createdAt), "MMM d, yyyy")}
                      {txn.bookingId && (
                        <>
                          <span className="text-white/10">·</span>
                          <span className="truncate max-w-[100px]">{txn.bookingId}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full shrink-0 mt-1.5",
                    txn.status === "completed" ? "bg-plus-green-400" :
                    txn.status === "pending" ? "bg-amber-400" :
                                                                         "bg-white/20"
                  )} />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Bank Accounts Section */}
      <Card padding="lg" className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-base">Linked Bank Accounts</h2>
          <Button variant="ghost" size="sm">
            <Plus size={14} />
            Add account
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-plus-blue-500/10 flex items-center justify-center">
              <CreditCard size={16} className="text-plus-blue-300" />
            </div>
            <div className="flex-1">
              <div className="text-white text-sm font-medium">UTI Bank · ****4567</div>
              <div className="text-white/30 text-xs">IFSC: UTIB0001234 · Primary account</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-plus-green-300 flex items-center gap-1">
                <CheckCircle2 size={10} /> Verified
              </span>
              <button className="text-xs text-white/30 hover:text-white/50">Set primary</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Deposit({ size = 14, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
      <path d="M12 5v14" /><path d="M5 12h14" />
    </svg>
  );
}
