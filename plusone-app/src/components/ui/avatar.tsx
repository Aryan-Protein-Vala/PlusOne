"use client";

import { forwardRef, type HTMLAttributes } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Avatar = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    src?: string;
    alt?: string;
    name?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    border?: boolean;
    glow?: boolean;
    verified?: boolean;
    badge?: React.ReactNode;
  }
>(
  (
    {
      className,
      src,
      alt = "",
      name = "",
      size = "md",
      border = false,
      glow = false,
      verified = false,
      badge,
      ...props
    },
    ref
  ) => {
    const sizes = {
      xs: "w-6 h-6 text-[10px]",
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10 text-sm",
      lg: "w-14 h-14 text-base",
      xl: "w-20 h-20 text-lg",
      "2xl": "w-28 h-28 text-2xl",
    };

    const borderSizes = {
      xs: "p-[2px]",
      sm: "p-1.5",
      md: "p-2",
      lg: "p-3",
      xl: "p-4",
      "2xl": "p-5",
    };

    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const getColor = (name: string) => {
      const colors = [
        "#8b5cf6", "#3b82f6", "#ec4899", "#06b6d4",
        "#f59e0b", "#10b981", "#ef4444", "#6366f1",
      ];
      let hash = 0;
      for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
      return colors[Math.abs(hash) % colors.length];
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full overflow-hidden font-semibold text-white flex-shrink-0",
          sizes[size],
          border && "rounded-full",
          className
        )}
        style={{
          backgroundColor: src ? "transparent" : getColor(name || "User"),
          boxShadow: glow ? "0 0 0 2px rgba(139,92,246,0.3), 0 0 20px rgba(139,92,246,0.2)" : undefined,
        }}
        {...props}
      >
        {src ? (
          <Image
            src={src}
            alt={alt || name}
            width={size === "xs" ? 24 : size === "sm" ? 32 : size === "md" ? 40 : size === "lg" ? 56 : size === "xl" ? 80 : 112}
            height={size === "xs" ? 24 : size === "sm" ? 32 : size === "md" ? 40 : size === "lg" ? 56 : size === "xl" ? 80 : 112}
            className="w-full h-full object-cover"
            unoptimized
          />
        ) : (
          <span>{initials}</span>
        )}
        {verified && (
          <div
            className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-plus-green-500 border-2 border-[#050508] rounded-full flex items-center justify-center"
            title="Verified"
          >
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        )}
        {badge && (
          <div className="absolute -top-1 -right-1">
            {badge}
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
