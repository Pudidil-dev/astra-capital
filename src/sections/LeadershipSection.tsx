"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionShell from "@/components/primitives/SectionShell";
import ContainerCard from "@/components/primitives/ContainerCard";
import { Reveal, stagger, cardReveal } from "@/components/primitives/Reveal";
import { Check } from "@/components/primitives/Icons";
import { LEADERS, type Leader } from "@/lib/content";

function LeaderCard({ leader, delay = 0 }: { leader: Leader; delay?: number }) {
  return (
    <motion.article
      variants={cardReveal}
      transition={{ delay }}
      className="overflow-hidden rounded-card-lg bg-canvas/70 border border-border-soft p-6 sm:p-10"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-1 ring-ink/10">
          <Image
            src={leader.image}
            alt={`Portrait of ${leader.name}`}
            fill
            sizes="112px"
            className="object-cover grayscale"
          />
        </div>
        <div>
          <h3 className="text-[24px] font-light tracking-[-0.02em] text-ink sm:text-[28px]">
            {leader.name}
          </h3>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
            {leader.role}
          </p>
        </div>
      </div>

      <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/85 sm:text-[16px]">
        “{leader.quote}”
      </p>

      <ul className="mt-8 space-y-4 border-t border-border-soft pt-7">
        {leader.bullets.map((b, i) => (
          <motion.li
            key={b}
            variants={cardReveal}
            transition={{ delay: 0.1 + i * 0.06 }}
            className="flex items-start gap-3"
          >
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink">
              <Check className="h-3 w-3" />
            </span>
            <p className="text-[14px] leading-relaxed text-ink-muted sm:text-[15px]">
              {b}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function LeadershipSection() {
  return (
    <SectionShell id="leadership">
      <Reveal>
        <ContainerCard
          tone="white"
          radius="card-xl"
          className="p-6 sm:p-10 lg:p-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              · Our Leadership Team
            </span>
            <h2 className="mt-5 text-[32px] font-light leading-[1.1] tracking-[-0.03em] text-ink text-balance sm:text-[44px] md:text-[52px]">
              Operators first. Investors second.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-[16px]">
              The people behind Astra Capital have spent decades building, fixing,
              and selling companies. We bring that lived experience to every
              partnership.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8"
          >
            {LEADERS.map((leader, i) => (
              <LeaderCard key={leader.name} leader={leader} delay={i * 0.05} />
            ))}
          </motion.div>
        </ContainerCard>
      </Reveal>
    </SectionShell>
  );
}
