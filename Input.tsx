"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-2xl border border-black/15 bg-white/90 px-4 py-2 text-sm outline-none ring-0 focus:border-[rgb(var(--accent))] dark:bg-[rgb(var(--card))] dark:border-white/15",
        className
      )}
      {...props}
    />
  );
}
