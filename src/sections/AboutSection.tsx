"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionShell from "@/components/primitives/SectionShell";
import ContainerCard from "@/components/primitives/ContainerCard";
import GlassCard from "@/components/primitives/GlassCard";
import { Reveal, cardReveal, stagger } from "@/components/primitives/Reveal";
import { ABOUT, METRICS, PORTFOLIO_BRANDS } from "@/lib/content";
import { useCountUp } from "@/lib/useCountUp";
import { ArrowRight } from "@/components/primitives/Icons";

function MetricItem({ value, label }: { value: string; label: string }) {
  const { ref, display } = useCountUp(value);
  return (
    <div className="flex flex-col gap-2">
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="text-[40px] font-light tracking-[-0.03em] text-ink leading-none sm:text-[48px]"
      >
        {display}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <SectionShell id="about">
      <Reveal as="div">
        <ContainerCard tone="white" radius="card-xl" className="p-6 sm:p-10 lg:p-16">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-center">
            {/* Image with glass overlay */}
            <motion.div
              variants={cardReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="relative md:col-span-6 lg:col-span-7"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card-lg sm:aspect-[5/4] md:aspect-[4/5] lg:aspect-[5/5]">
                <Image
                  src={ABOUT.image}
                  alt={ABOUT.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Funds Over Time card */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                viewport={{ once: true, margin: "-60px" }}
                className="absolute bottom-5 left-5 right-5 sm:left-7 sm:right-auto sm:max-w-[300px]"
              >
                <GlassCard tone="light" className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                    Our Funds Over Time
                  </p>
                  <ul className="mt-4 space-y-3">
                    {ABOUT.funds.map((f) => (
                      <li
                        key={f.label}
                        className="flex items-baseline justify-between border-b border-ink/10 pb-3 last:border-0 last:pb-0"
                      >
                        <span className="text-[13px] text-ink/80">
                          {f.label}{" "}
                          <span className="text-ink-muted">({f.year})</span>
                        </span>
                        <span className="text-[20px] font-light tracking-[-0.02em] text-ink">
                          {f.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            </motion.div>

            {/* Right column */}
            <div className="md:col-span-6 lg:col-span-5">
              <motion.span
                variants={cardReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted"
              >
                · Family Office · Aligned Capital
              </motion.span>

              <Reveal>
                <h2 className="mt-5 text-[32px] font-light leading-[1.12] tracking-[-0.025em] text-ink sm:text-[40px] md:text-[44px] text-balance">
                  {ABOUT.heading}
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-muted text-pretty sm:text-[16px]">
                  {ABOUT.paragraph}
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <a
                  href="#approach"
                  className="group mt-8 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink"
                >
                  <span className="relative pb-1">
                    {ABOUT.ctaLabel}
                    <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-100 bg-ink transition-transform duration-500 ease-editorial group-hover:scale-x-0" />
                    <span className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-ink transition-transform duration-500 ease-editorial delay-200 group-hover:scale-x-100" />
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1" />
                </a>
              </Reveal>

              {/* Metrics */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="mt-12 grid gap-8 border-t border-border-soft pt-10 sm:grid-cols-3"
              >
                {METRICS.map((m) => (
                  <motion.div key={m.label} variants={cardReveal}>
                    <MetricItem value={m.value} label={m.label} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Logo strip */}
          <Reveal delay={0.1} className="relative mt-16 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-card to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-card to-transparent" />
            <div className="marquee-track flex w-max gap-12 py-4">
              {[...PORTFOLIO_BRANDS, ...PORTFOLIO_BRANDS].map((brand, i) => (
                <span
                  key={`${brand}-${i}`}
                  className="whitespace-nowrap text-[20px] font-light tracking-[-0.02em] text-ink/40 sm:text-[24px]"
                >
                  {brand}
                </span>
              ))}
            </div>
          </Reveal>
        </ContainerCard>
      </Reveal>
    </SectionShell>
  );
}
