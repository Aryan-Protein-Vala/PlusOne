"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  Bell,
  Shield,
  Plus,
  User,
  LogOut,
  LayoutDashboard,
  MessageSquare,
  Wallet,
  Settings,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { label: "Find PlusOne", href: "/#find" },
  { label: "Earn money", href: "/hosts" },
  { label: "How It Works", href: "/#how" },
  { label: "Safety", href: "/safety" },
];

const userMenuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
  { icon: Wallet, label: "Wallet", href: "/wallet" },
  { icon: Settings, label: "Settings", href: "/profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setUserMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-surface-999/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/20"
            : "bg-transparent"
        )}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 flex items-center justify-center shadow-lg shadow-plus-purple-500/25 group-hover:shadow-plus-purple-500/40 transition-all duration-300">
                <span className="text-white font-black text-lg">+</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-plus-blue-500/0 via-plus-purple-500/20 to-plus-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight hidden sm:block">
                Plus<span className="text-plus-purple-400">One</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 relative",
                    pathname.startsWith(link.href.split("#")[0])
                      ? "text-white"
                      : "text-white/50 hover:text-white/90 hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 rounded-xl text-white/40 hover:text-white/70 hover:bg-white/5 transition-all duration-200 hidden sm:flex"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              {/* Notifications */}
              <button className="p-2.5 rounded-xl text-white/40 hover:text-white/70 hover:bg-white/5 transition-all duration-200 relative hidden sm:flex">
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-plus-pink-500 rounded-full" />
              </button>

              {/* User Menu or Auth Buttons */}
              {pathname === "/" && (
                <div className="hidden sm:flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    Log in
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500">
                    Sign up
                  </Button>
                </div>
              )}

              {/* User Dropdown */}
              {pathname !== "/" && (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-white/5 transition-all duration-200"
                  >
                    <Avatar
                      name="Aryan Kapoor"
                      size="sm"
                      verified
                    />
                    <div className="hidden sm:block text-left">
                      <div className="text-sm font-medium text-white leading-tight">Aryan Kapoor</div>
                      <div className="text-xs text-white/40">Mumbai</div>
                    </div>
                    <ChevronDown size={14} className="text-white/30 hidden sm:block" />
                  </button>

                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        className="absolute right-0 mt-2 w-64 bg-surface-800/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden"
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 border-b border-white/5">
                          <div className="font-semibold text-white">Aryan Kapoor</div>
                          <div className="text-sm text-white/40">aryan@plusone.app</div>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="badge-success text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-300">
                              ✓ Verified
                            </span>
                            <span className="text-xs text-white/30">Mumbai</span>
                          </div>
                        </div>
                        {userMenuItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
                          >
                            <item.icon size={16} />
                            {item.label}
                          </Link>
                        ))}
                        <div className="border-t border-white/5 p-4">
                          <Link href="/auth/logout" className="flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/5 transition-all duration-200">
                            <LogOut size={16} />
                            Sign out
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Safety Badge */}
              <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-300 text-xs">
                <Shield size={12} />
                100% Safe & Verified
              </div>

              {/* Mobile Menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2.5 rounded-xl text-white/40 hover:text-white/70 hover:bg-white/5 transition-all"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-surface-950/95 backdrop-blur-2xl border-b border-white/5 px-4 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus-within:border-plus-purple-500/60 focus-within:ring-2 focus-within:ring-plus-purple-500/20 transition-all">
                  <Search size={18} className="text-white/30 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search activities, cities, providers..."
                    className="flex-1 bg-transparent text-white placeholder:text-white/25 outline-none text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <Button variant="primary" size="sm">
                    Search
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-surface-999/95 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col h-full pb-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 px-6 py-4 text-lg text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex-1" />
              <div className="px-6 pt-6 border-t border-white/5 space-y-2">
                <Button variant="secondary" fullWidth className="justify-start">
                  <User size={16} />
                  Log in
                </Button>
                <Button fullWidth className="justify-start">
                  <Plus size={16} />
                  Sign up free
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
