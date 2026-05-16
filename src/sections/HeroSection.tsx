"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PillButton from "@/components/primitives/PillButton";
import GlassCard from "@/components/primitives/GlassCard";
import { ArrowDown, ArrowRight } from "@/components/primitives/Icons";
import { HERO } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative px-3 pt-24 sm:px-5 sm:pt-28 lg:px-7"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.985, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: EASE }}
        className="relative mx-auto h-[88vh] min-h-[640px] w-full max-w-editorial overflow-hidden rounded-card-xl"
      >
        {/* Background image */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0"
        >
          <Image
            src={HERO.bgImage}
            alt="Aerial view of a city skyline at golden hour."
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
          className="absolute left-6 top-6 sm:left-10 sm:top-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {HERO.eyebrow}
          </span>
        </motion.div>

        {/* Headline cluster — bottom left */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-8 p-6 sm:p-10 md:p-14">
          <div className="max-w-3xl">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
              }}
              className="font-light text-balance text-white text-[40px] leading-[1.05] tracking-[-0.03em] sm:text-[56px] md:text-[64px] lg:text-[72px] lg:leading-[1.04]"
            >
              {HERO.headline.split(" ").map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={{
                    hidden: { y: 20, opacity: 0, filter: "blur(8px)" },
                    show: {
                      y: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.85, ease: EASE },
                    },
                  }}
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-[16px]"
            >
              {HERO.subheadline}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.25 }}
            className="flex flex-wrap items-center gap-3"
          >
            <PillButton
              variant="primary-light"
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {HERO.primaryCta}
            </PillButton>
            <PillButton
              variant="ghost-dark"
              size="lg"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {HERO.secondaryCta}
            </PillButton>
          </motion.div>
        </div>

        {/* Floating glass stat card — right */}
        <motion.div
          initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: EASE, delay: 1.0 }}
          className="absolute right-6 top-24 hidden w-[280px] sm:right-10 sm:top-28 md:block"
        >
          <GlassCard tone="dark" className="p-6 text-white">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
              {HERO.stat.label}
            </p>
            <p className="mt-3 text-[40px] font-light leading-none tracking-[-0.03em]">
              {HERO.stat.value}
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-white/70">
              {HERO.stat.sub}
            </p>
            <div className="mt-5 flex items-end gap-1.5 h-12">
              {[0.45, 0.62, 0.78, 0.55, 0.92, 0.7].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: EASE,
                    delay: 1.4 + i * 0.06,
                  }}
                  style={{ height: `${h * 100}%`, originY: 1 }}
                  className="flex-1 rounded-sm bg-white/70"
                />
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.5 }}
          className="absolute bottom-6 right-6 hidden items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/70 sm:flex"
        >
          <span>Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25"
            aria-hidden
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
