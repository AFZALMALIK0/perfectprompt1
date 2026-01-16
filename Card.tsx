import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-3xl border border-black/10 bg-white/90 shadow-sm dark:bg-[rgb(var(--card))] dark:border-white/10", className)} {...props} />;
}
