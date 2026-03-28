import * as React from "react"
import { cn } from "@/components/ui/Badge" // Re-using the cn utility

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "accent" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    
    const variants = {
      default: "bg-foreground text-background hover:bg-foreground/90",
      accent: "bg-accent text-white hover:bg-accent-hover shadow-orb",
      outline: "border-2 border-surface-border bg-transparent hover:border-foreground text-foreground",
      ghost: "hover:bg-surface-secondary text-foreground",
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-14 rounded-full px-8 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-heading font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"