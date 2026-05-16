"use client";

import { motion } from "framer-motion";
import SectionShell from "@/components/primitives/SectionShell";
import ContainerCard from "@/components/primitives/ContainerCard";
import { Reveal, stagger, cardReveal } from "@/components/primitives/Reveal";
import { STRENGTHS } from "@/lib/content";

/**
 * Animated wave background.
 * Five morphing color blobs with independent durations and orbits, three
 * layered SVG waves flowing horizontally at different speeds, an aurora
 * sheen via a slowly rotating conic gradient, and a subtle grain overlay
 * to hide gradient banding. The randomized timings ensure the motion
 * never appears to repeat identically.
 */
function AnimatedWaveBackground() {
  return (
    <>
      {/* Base ocean gradient */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #042231 0%, #0E5A6B 55%, #06394A 100%)",
        }}
      />

      {/* Aurora sheen — large rotating conic gradient */}
      <motion.div
        aria-hidden
        className="absolute -inset-1/4"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, rgba(94,200,224,0) 0deg, rgba(94,200,224,0.18) 60deg, rgba(11,76,94,0) 130deg, rgba(140,210,232,0.16) 220deg, rgba(11,76,94,0) 320deg, rgba(94,200,224,0) 360deg)",
          filter: "blur(30px)",
        }}
      />

      {/* Morphing color blobs */}
      <motion.div
        aria-hidden
        className="absolute -left-32 top-[5%] h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(94,200,224,0.45), rgba(94,200,224,0) 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 90, 30, 120, 0],
          y: [0, 60, 30, -20, 0],
          scale: [1, 1.18, 0.92, 1.08, 1],
        }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        aria-hidden
        className="absolute right-[-10%] top-[20%] h-[480px] w-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(60,164,200,0.42), rgba(60,164,200,0) 70%)",
          filter: "blur(48px)",
        }}
        animate={{
          x: [0, -80, -40, -110, 0],
          y: [0, 40, -30, 20, 0],
          scale: [1, 0.9, 1.15, 1, 1],
        }}
        transition={{
          duration: 28,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.2,
        }}
      />

      <motion.div
        aria-hidden
        className="absolute left-[20%] bottom-[5%] h-[380px] w-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(20,155,178,0.40), rgba(20,155,178,0) 70%)",
          filter: "blur(42px)",
        }}
        animate={{
          x: [0, 60, -40, 80, 0],
          y: [0, -50, -20, -80, 0],
          scale: [1, 1.1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 24,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.6,
        }}
      />

      <motion.div
        aria-hidden
        className="absolute right-[15%] bottom-[-5%] h-[440px] w-[440px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(170,225,240,0.32), rgba(170,225,240,0) 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, -70, 30, -50, 0],
          y: [0, -30, -70, -10, 0],
          scale: [1, 1.05, 1.22, 0.95, 1],
        }}
        transition={{
          duration: 32,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2.1,
        }}
      />

      <motion.div
        aria-hidden
        className="absolute left-[40%] top-[30%] h-[300px] w-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(8,90,110,0.55), rgba(8,90,110,0) 70%)",
          filter: "blur(36px)",
          mixBlendMode: "soft-light",
        }}
        animate={{
          x: [0, -50, 40, -20, 0],
          y: [0, 30, -40, 20, 0],
          scale: [1, 1.25, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.4,
        }}
      />

      {/* Flowing SVG wave bands */}
      <svg
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[60%] w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5EC8E0" stopOpacity="0" />
            <stop offset="50%" stopColor="#5EC8E0" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#5EC8E0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGradB" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9AD9E8" stopOpacity="0" />
            <stop offset="50%" stopColor="#9AD9E8" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#9AD9E8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGradC" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5ECF4" stopOpacity="0" />
            <stop offset="50%" stopColor="#C5ECF4" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#C5ECF4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Wave 1 — slow, deep */}
        <motion.g
          animate={{ x: [0, -1440] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        >
          <path
            fill="url(#waveGradA)"
            d="M0,500 C240,420 480,580 720,500 C960,420 1200,580 1440,500 L1440,800 L0,800 Z"
          />
          <path
            fill="url(#waveGradA)"
            transform="translate(1440 0)"
            d="M0,500 C240,420 480,580 720,500 C960,420 1200,580 1440,500 L1440,800 L0,800 Z"
          />
        </motion.g>

        {/* Wave 2 — medium, lighter */}
        <motion.g
          animate={{ x: [0, -1440] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        >
          <path
            fill="url(#waveGradB)"
            d="M0,580 C200,520 400,640 600,580 C800,520 1000,640 1200,580 C1320,548 1380,560 1440,580 L1440,800 L0,800 Z"
          />
          <path
            fill="url(#waveGradB)"
            transform="translate(1440 0)"
            d="M0,580 C200,520 400,640 600,580 C800,520 1000,640 1200,580 C1320,548 1380,560 1440,580 L1440,800 L0,800 Z"
          />
        </motion.g>

        {/* Wave 3 — fast, top accent */}
        <motion.g
          animate={{ x: [0, -1440] }}
          transition={{ duration: 14, ease: "linear", repeat: Infinity }}
        >
          <path
            fill="url(#waveGradC)"
            d="M0,640 C180,600 360,680 540,640 C720,600 900,680 1080,640 C1260,600 1380,660 1440,640 L1440,800 L0,800 Z"
          />
          <path
            fill="url(#waveGradC)"
            transform="translate(1440 0)"
            d="M0,640 C180,600 360,680 540,640 C720,600 900,680 1080,640 C1260,600 1380,660 1440,640 L1440,800 L0,800 Z"
          />
        </motion.g>
      </svg>

      {/* Subtle grain — hides banding in gradients */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.06] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="strengths-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#strengths-grain)" />
      </svg>

      {/* Soft vignette for legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 35%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.25) 100%)",
        }}
      />
    </>
  );
}

export default function StrengthsSection() {
  return (
    <SectionShell id="strengths">
      <Reveal>
        <ContainerCard
          tone="transparent"
          radius="card-xl"
          bordered={false}
          className="relative overflow-hidden text-white"
        >
          <AnimatedWaveBackground />

          <div className="relative px-6 py-20 text-center sm:px-10 sm:py-28 lg:py-36">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {STRENGTHS.eyebrow}
            </span>

            <Reveal>
              <h2 className="mx-auto mt-6 max-w-3xl text-[32px] font-light leading-[1.1] tracking-[-0.03em] text-white text-balance sm:text-[44px] md:text-[56px]">
                {STRENGTHS.title}
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-[16px]">
                {STRENGTHS.subtitle}
              </p>
            </Reveal>

            {/* Floating chips */}
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              {STRENGTHS.chips.map((c, i) => (
                <motion.li
                  key={c}
                  variants={cardReveal}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 5 + i * 0.6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-[13px] font-medium text-white/90 backdrop-blur-md sm:text-[14px]"
                >
                  {c}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </ContainerCard>
      </Reveal>
    </SectionShell>
  );
}
