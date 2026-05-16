"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionShell from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import PillButton from "@/components/primitives/PillButton";
import { ArrowRight } from "@/components/primitives/Icons";
import { CTA } from "@/lib/content";

export default function CTASection() {
  return (
    <SectionShell id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-card-xl">
          <motion.div
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[16/10] w-full sm:aspect-[16/8] md:aspect-[16/6.5]"
          >
            <Image
              src={CTA.image}
              alt="Wide cinematic view across a corporate atrium at dusk."
              fill
              sizes="100vw"
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40" />
          </motion.div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Begin a conversation
            </span>
            <Reveal>
              <h2 className="mt-6 text-[36px] font-light leading-[1.05] tracking-[-0.03em] text-white text-balance sm:text-[56px] md:text-[72px]">
                {CTA.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-white/80 sm:text-[16px]">
                {CTA.body}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <PillButton
                variant="primary-light"
                size="lg"
                iconRight={<ArrowRight className="h-4 w-4" />}
                className="mt-9"
              >
                {CTA.primary}
              </PillButton>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
