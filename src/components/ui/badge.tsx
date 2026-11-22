import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2.5 py-1 text-sm font-medium leading-none",
        variant === "default" && "bg-surface-elevated text-foreground border border-border",
        variant === "accent" && "bg-accent-subtle text-accent-text border border-accent/40",
        variant === "outline" && "border border-border-strong text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
