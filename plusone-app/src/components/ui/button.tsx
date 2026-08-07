"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
    size?: "sm" | "md" | "lg" | "xl";
    isLoading?: boolean;
    fullWidth?: boolean;
  }
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const base = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 select-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";
    const sizes = {
      sm: "px-3 py-1.5 text-sm gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-7 py-3.5 text-base gap-2",
      xl: "px-9 py-4 text-lg gap-2.5",
    };
    const variants = {
      primary:
        "bg-gradient-to-r from-plus-blue-500 via-plus-purple-500 to-plus-pink-500 text-white shadow-[0_4px_20px_rgba(99,102,241,0.45)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.6)] hover:scale-[1.02] active:scale-[0.97]",
      secondary:
        "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 active:scale-[0.98]",
      ghost:
        "bg-transparent text-white/80 hover:bg-white/5 hover:text-white active:scale-[0.98]",
      danger:
        "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-[0_4px_15px_rgba(239,68,68,0.4)] hover:shadow-[0_6px_25px_rgba(239,68,68,0.55)] hover:scale-[1.02] active:scale-[0.97]",
      outline:
        "bg-transparent border-2 border-plus-purple-500/60 text-plus-purple-300 hover:bg-plus-purple-500/10 hover:border-plus-purple-400 hover:text-plus-purple-200 active:scale-[0.98]",
    };

    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], fullWidth && "w-full", className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
