import { cn } from "@/lib/cn";
import { type HTMLAttributes, type ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  outerClassName?: string;
  innerClassName?: string;
} & HTMLAttributes<HTMLElement>;

/**
 * SectionShell — adds editorial vertical rhythm and side gutters
 * matching the canvas-first layout language.
 */
export default function SectionShell({
  children,
  id,
  outerClassName,
  innerClassName,
  ...rest
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 sm:px-7 lg:px-10 mt-section-gap-sm md:mt-section-gap lg:mt-section-gap-lg",
        outerClassName,
      )}
      {...rest}
    >
      <div
        className={cn("mx-auto w-full max-w-editorial", innerClassName)}
      >
        {children}
      </div>
    </section>
  );
}
