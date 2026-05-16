import { cn } from "@/lib/cn";
import { type HTMLAttributes, type ReactNode } from "react";

type Tone = "light" | "dark";

type GlassCardProps = {
  children: ReactNode;
  tone?: Tone;
  radius?: "card-sm" | "card" | "card-lg";
} & HTMLAttributes<HTMLDivElement>;

export default function GlassCard({
  children,
  tone = "light",
  radius = "card",
  className,
  ...rest
}: GlassCardProps) {
  return (
    <div
      className={cn(
        tone === "light" ? "glass-light text-ink" : "glass-dark text-white",
        radius === "card-sm" && "rounded-card-sm",
        radius === "card" && "rounded-card",
        radius === "card-lg" && "rounded-card-lg",
        "shadow-ambient-sm",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
