import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium dark:bg-[rgb(var(--card))] dark:border-white/10",
        className
      )}
      {...props}
    />
  );
}
