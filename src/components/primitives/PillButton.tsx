"use client";

import { cn } from "@/lib/cn";
import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";

type Variant = "primary-light" | "primary-dark" | "ghost-dark" | "ghost-light";
type Size = "sm" | "md" | "lg";

type PillButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const sizeMap: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[12px]",
  md: "px-7 py-3.5 text-[12px]",
  lg: "px-9 py-4 text-[12px]",
};

const variantMap: Record<Variant, string> = {
  "primary-light":
    "bg-white text-ink hover:bg-[#FAFAF7] border border-white/0 shadow-ambient-sm",
  "primary-dark":
    "bg-ink text-white hover:bg-black border border-ink/0",
  "ghost-dark":
    "bg-white/10 text-white border border-white/25 backdrop-blur-md hover:bg-white/15",
  "ghost-light":
    "bg-transparent text-ink border border-ink/15 hover:border-ink/30 hover:bg-ink/5",
};

const PillButton = forwardRef<HTMLButtonElement, PillButtonProps>(
  function PillButton(
    {
      children,
      variant = "primary-dark",
      size = "md",
      iconRight,
      iconLeft,
      className,
      type = "button",
      ...rest
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-editorial",
          "active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-ink",
          "cursor-pointer select-none whitespace-nowrap",
          sizeMap[size],
          variantMap[variant],
          className,
        )}
        {...rest}
      >
        {iconLeft}
        <span>{children}</span>
        {iconRight}
      </button>
    );
  },
);

export default PillButton;
