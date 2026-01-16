"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full min-h-[110px] rounded-2xl border border-black/15 bg-white/90 px-4 py-3 text-sm outline-none ring-0 focus:border-[rgb(var(--accent))] dark:bg-[rgb(var(--card))] dark:border-white/15",
        className
      )}
      {...props}
    />
  );
}
