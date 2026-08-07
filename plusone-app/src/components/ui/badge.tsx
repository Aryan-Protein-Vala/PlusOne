"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Badge = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "success" | "warning" | "danger" | "info" | "purple" | "gold" | "cyan";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    pulse?: boolean;
  }
>(
  (
    { className, variant = "default", size = "md", icon, pulse = false, children, ...props },
    ref
  ) => {
    const variants = {
      default: "bg-white/10 text-white/80 border-white/10",
      success: "bg-green-500/15 text-green-300 border-green-500/20",
      warning: "bg-amber-500/15 text-amber-300 border-amber-500/20",
      danger: "bg-red-500/15 text-red-300 border-red-500/20",
      info: "bg-blue-500/15 text-blue-300 border-blue-500/20",
      purple: "bg-plus-purple-500/15 text-plus-purple-300 border-plus-purple-500/20",
      gold: "bg-amber-500/15 text-amber-300 border-amber-500/20",
      cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-xs",
      lg: "px-3 py-1.5 text-sm",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1 font-medium rounded-full border",
          variants[variant],
          sizes[size],
          pulse && "animate-pulse",
          className
        )}
        {...props}
      >
        {icon}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
