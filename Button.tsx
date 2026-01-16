"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Button({
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" | "outline" }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed";
  const variants: Record<string, string> = {
    primary: "bg-[rgb(var(--accent))] text-white hover:opacity-90 shadow-sm",
    ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/10",
    outline: "border border-black/15 hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10",
  };
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
