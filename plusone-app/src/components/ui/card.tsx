"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Card = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    hover?: boolean;
    glow?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
    glass?: boolean;
  }
>(({ className, hover = false, glow = false, padding = "md", glass = true, children, ...props }, ref) => {
  const paddingMap = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border backdrop-blur-xl transition-all duration-500",
        glass && "bg-glass/80 border-glassBorder",
        !glass && "bg-surface-800 border-surface-700",
        hover && "hover:bg-glassHover hover:border-white/15 hover:shadow-card-hover hover:-translate-y-0.5",
        glow && "shadow-glow",
        paddingMap[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { border?: boolean }
>(({ className, border = false, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1.5", border && "pb-4 border-b border-white/5", className)}
    {...props}
  >
    {children}
  </div>
));

CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-white font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  )
);

CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-white/50 text-sm", className)}
    {...props}
  >
    {children}
  </p>
));

CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props}>
    {children}
  </div>
));

CardContent.displayName = "CardContent";

const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { border?: boolean }
>(({ className, border = false, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-3 pt-4", border && "border-t border-white/5", className)}
    {...props}
  >
    {children}
  </div>
));

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
