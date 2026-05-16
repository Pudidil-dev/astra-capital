import { cn } from "@/lib/cn";
import { type HTMLAttributes, type ReactNode, forwardRef } from "react";

type ContainerCardProps = {
  children: ReactNode;
  tone?: "white" | "off-white" | "transparent";
  radius?: "card" | "card-lg" | "card-xl";
  bordered?: boolean;
  shadow?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const ContainerCard = forwardRef<HTMLDivElement, ContainerCardProps>(
  function ContainerCard(
    {
      children,
      tone = "white",
      radius = "card-lg",
      bordered = true,
      shadow = false,
      className,
      ...rest
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          "relative",
          tone === "white" && "bg-surface-card",
          tone === "off-white" && "bg-surface-card-alt",
          tone === "transparent" && "bg-transparent",
          radius === "card" && "rounded-card",
          radius === "card-lg" && "rounded-card-lg",
          radius === "card-xl" && "rounded-card-xl",
          bordered && "border border-border-soft",
          shadow && "shadow-ambient",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

export default ContainerCard;
