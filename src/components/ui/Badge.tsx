import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility to merge tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "accent" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "border-transparent bg-foreground text-background",
    secondary: "border-transparent bg-surface-secondary text-foreground",
    accent: "border-transparent bg-accent/10 text-accent font-bold",
    outline: "text-foreground border-surface-border",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}