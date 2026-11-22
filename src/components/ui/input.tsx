import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex min-h-11 w-full rounded-sm border border-border-strong bg-surface-input px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors duration-150 hover:border-foreground/50 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
