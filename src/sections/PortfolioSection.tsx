"use client";

import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionShell from "@/components/primitives/SectionShell";
import ContainerCard from "@/components/primitives/ContainerCard";
import { Reveal } from "@/components/primitives/Reveal";
import PillButton from "@/components/primitives/PillButton";
import {
  ArrowLeft,
  ArrowRight,
} from "@/components/primitives/Icons";
import { PORTFOLIO_CARDS, type PortfolioCard } from "@/lib/content";
import { cn } from "@/lib/cn";

const TONE_MAP: Record<string, string> = {
  ink: "bg-ink text-white",
  taupe: "bg-accent-taupe text-white",
  ocean: "bg-accent-ocean text-white",
  "blue-grey": "bg-accent-blue-grey text-white",
};

function LogoCard({
  card,
  index,
}: {
  card: Extract<PortfolioCard, { kind: "logo" }>;
  index: number;
}) {
  return (
    <article
      className={cn(
        "relative flex h-full min-h-[360px] w-[300px] shrink-0 flex-col justify-between overflow-hidden rounded-card-lg p-7 sm:w-[340px] md:w-[380px]",
        TONE_MAP[card.tone],
      )}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-75">
        {String(index + 1).padStart(2, "0")} · Portfolio
      </span>
      <div>
        <h3 className="text-[26px] font-light tracking-[-0.02em] leading-[1.1] sm:text-[32px]">
          {card.brand}
        </h3>
        <p className="mt-3 text-[12px] leading-relaxed opacity-80">
          {card.caption}
        </p>
      </div>
    </article>
  );
}

function ImageCard({
  card,
}: {
  card: Extract<PortfolioCard, { kind: "image" }>;
}) {
  return (
    <article className="relative h-full min-h-[360px] w-[320px] shrink-0 overflow-hidden rounded-card-lg sm:w-[400px] md:w-[460px]">
      <Image
        src={card.src}
        alt={card.alt}
        fill
        sizes="(min-width: 768px) 460px, 80vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <p className="absolute inset-x-6 bottom-6 text-[13px] text-white/90">
        {card.caption}
      </p>
    </article>
  );
}

export default function PortfolioSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [progress, setProgress] = useState(0);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    const measure = () => {
      const t = trackRef.current;
      const w = wrapperRef.current;
      if (!t || !w) return;
      const overflow = Math.max(0, t.scrollWidth - w.clientWidth);
      setMaxDrag(overflow);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const unsub = x.on("change", (v) => {
      if (maxDrag <= 0) {
        setProgress(0);
        return;
      }
      const pct = Math.min(1, Math.max(0, -v / maxDrag));
      setProgress(pct);
    });
    return () => unsub();
  }, [x, maxDrag]);

  function step(direction: 1 | -1) {
    if (maxDrag <= 0) return;
    const stride = 360;
    const next = Math.min(0, Math.max(-maxDrag, x.get() + direction * -stride));
    x.set(next);
  }

  return (
    <SectionShell id="portfolio">
      <Reveal>
        <ContainerCard
          tone="white"
          radius="card-xl"
          className="overflow-hidden p-6 sm:p-10 lg:p-16"
        >
          {/* Heading row */}
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                · Portfolio
              </span>
              <h2 className="mt-5 text-[32px] font-light leading-[1.1] tracking-[-0.03em] text-ink text-balance sm:text-[44px] md:text-[52px]">
                A Growing Portfolio of
                <br className="hidden md:block" /> Enduring Partnerships.
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-4">
              <p className="max-w-md text-[15px] leading-relaxed text-ink-muted sm:text-[16px]">
                We partner with exceptional entrepreneurs to build businesses
                that stand the test of time across cycles, sectors, and
                generations.
              </p>
              <PillButton
                variant="ghost-light"
                size="md"
                iconRight={<ArrowRight className="h-4 w-4" />}
                className="mt-7"
              >
                Explore Our Cases
              </PillButton>
            </div>
          </div>

          {/* Carousel viewport */}
          <div
            ref={wrapperRef}
            className="relative mt-12 overflow-hidden lg:mt-16"
          >
            <motion.div
              ref={trackRef}
              drag="x"
              style={{ x }}
              dragConstraints={{ left: -maxDrag, right: 0 }}
              dragElastic={0.06}
              dragMomentum
              className="flex cursor-grab gap-5 active:cursor-grabbing"
            >
              {PORTFOLIO_CARDS.map((card, i) =>
                card.kind === "logo" ? (
                  <LogoCard key={`${card.brand}-${i}`} card={card} index={i} />
                ) : (
                  <ImageCard key={`${card.alt}-${i}`} card={card} />
                ),
              )}
            </motion.div>
          </div>

          {/* Progress + controls */}
          <div className="mt-10 grid grid-cols-1 items-center gap-5 sm:grid-cols-[1fr_auto]">
            <div
              className="relative h-px w-full overflow-hidden bg-ink/10"
              role="progressbar"
              aria-label="Portfolio carousel position"
              aria-valuenow={Math.round(progress * 100)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <motion.span
                style={{ width: `${Math.max(8, progress * 100)}%` }}
                className="absolute left-0 top-0 h-px bg-ink"
              />
            </div>
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                aria-label="Previous portfolio cards"
                onClick={() => step(-1)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40 hover:bg-ink/5 cursor-pointer disabled:opacity-30"
                disabled={maxDrag <= 0}
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next portfolio cards"
                onClick={() => step(1)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-black cursor-pointer disabled:opacity-30"
                disabled={maxDrag <= 0}
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </ContainerCard>
      </Reveal>
    </SectionShell>
  );
}
