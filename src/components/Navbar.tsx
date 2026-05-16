"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/content";
import PillButton from "@/components/primitives/PillButton";
import { ArrowRight, MenuIcon, CloseIcon } from "@/components/primitives/Icons";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 60], [0, 1]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 pt-4 sm:pt-5"
    >
      {/* subtle bg fade once user scrolls */}
      <motion.div
        aria-hidden
        style={{ opacity }}
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-canvas to-transparent"
      />

      <nav
        className={cn(
          "relative mx-auto flex max-w-editorial items-center justify-between gap-4 rounded-full px-3 py-2 sm:px-4 sm:py-2.5",
          "glass-light",
        )}
        aria-label="Primary"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="ml-2 flex items-center gap-2 text-ink"
          aria-label="Astra Capital home"
        >
          <span
            aria-hidden
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M12 2 4 22h16L12 2Z" />
              <path d="M12 9v8" />
            </svg>
          </span>
          <span className="font-medium tracking-[-0.02em] text-[15px] text-ink">
            Astra Capital
          </span>
        </a>

        {/* Center pill nav */}
        <ul className="hidden md:flex items-center gap-1 rounded-full bg-white/40 px-1.5 py-1 border border-border-faint">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-[13px] text-ink/80 transition-colors hover:text-ink hover:bg-white/80 cursor-pointer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-2">
          <PillButton
            variant="primary-dark"
            size="sm"
            iconRight={<ArrowRight className="h-4 w-4" />}
            className="hidden sm:inline-flex"
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in touch
          </PillButton>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-white/70 text-ink cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div
            id="mobile-nav"
            className="absolute left-2 right-2 top-[calc(100%+10px)] rounded-card-lg bg-white/95 backdrop-blur-xl border border-border-soft p-4 md:hidden shadow-ambient"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-full px-4 py-3 text-[14px] text-ink/85 hover:bg-canvas cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <PillButton
                variant="primary-dark"
                size="md"
                iconRight={<ArrowRight className="h-4 w-4" />}
                className="w-full"
                onClick={() => {
                  setOpen(false);
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in touch
              </PillButton>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
