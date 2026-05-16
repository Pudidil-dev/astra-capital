"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionShell from "@/components/primitives/SectionShell";
import ContainerCard from "@/components/primitives/ContainerCard";
import { Reveal } from "@/components/primitives/Reveal";
import PillButton from "@/components/primitives/PillButton";
import { ArrowRight } from "@/components/primitives/Icons";
import { ACCORDION_ITEMS } from "@/lib/content";
import { cn } from "@/lib/cn";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ApproachSection() {
  const [active, setActive] = useState(0);

  return (
    <SectionShell id="approach">
      <Reveal>
        <ContainerCard
          tone="white"
          radius="card-xl"
          className="p-6 sm:p-10 lg:p-16"
        >
          {/* Heading row */}
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6 lg:col-span-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                · Our Approach
              </span>
              <h2 className="mt-5 text-[32px] font-light leading-[1.1] tracking-[-0.03em] text-ink text-balance sm:text-[44px] md:text-[52px] lg:text-[60px]">
                Aligned. Flexible.
                <br />
                Built for Operators.
              </h2>
            </div>
            <div className="md:col-span-6 lg:col-span-5 md:pt-4">
              <p className="max-w-md text-[15px] leading-relaxed text-ink-muted sm:text-[16px]">
                We have been in your shoes — our approach is grounded in real
                operating experience, not committee theory. We commit early and
                stay engaged through every cycle.
              </p>
              <PillButton
                variant="ghost-light"
                size="md"
                iconRight={<ArrowRight className="h-4 w-4" />}
                className="mt-7"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Discover more
              </PillButton>
            </div>
          </div>

          {/* Accordion */}
          <div className="mt-12 space-y-3 lg:mt-16">
            {ACCORDION_ITEMS.map((item, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={item.number}
                  layout
                  transition={{ duration: 0.55, ease: EASE }}
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  className={cn(
                    "group relative w-full overflow-hidden rounded-card-lg text-left transition-colors duration-500 ease-editorial cursor-pointer",
                    isActive
                      ? "bg-accent-blue-grey text-white"
                      : "bg-canvas/70 hover:bg-canvas text-ink",
                  )}
                  aria-expanded={isActive}
                  aria-controls={`approach-panel-${i}`}
                >
                  <motion.div layout className="flex items-start gap-6 px-6 py-6 sm:px-10 sm:py-8">
                    <span
                      className={cn(
                        "shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] pt-1.5",
                        isActive ? "text-white/75" : "text-ink-muted",
                      )}
                    >
                      {item.number}
                    </span>
                    <div className="flex-1">
                      <h3
                        className={cn(
                          "text-[20px] font-light tracking-[-0.02em] sm:text-[26px] lg:text-[30px] leading-[1.2]",
                          isActive ? "text-white" : "text-ink",
                        )}
                      >
                        {item.title}
                      </h3>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            id={`approach-panel-${i}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.55, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <p className="pt-5 text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
                              {item.body}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <motion.span
                      animate={{ rotate: isActive ? 0 : -45 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className={cn(
                        "shrink-0 mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-ink/5 text-ink",
                      )}
                      aria-hidden
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </motion.div>
                </motion.button>
              );
            })}
          </div>
        </ContainerCard>
      </Reveal>
    </SectionShell>
  );
}
