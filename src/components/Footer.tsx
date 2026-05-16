"use client";

import { motion } from "framer-motion";
import { FOOTER } from "@/lib/content";
import { ArrowRight, ArrowUp } from "@/components/primitives/Icons";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="px-3 pb-3 pt-section-gap-sm sm:px-5 sm:pb-5 lg:px-7"
    >
      <div className="mx-auto w-full max-w-editorial overflow-hidden rounded-card-xl bg-ink text-white">
        <div className="grid gap-12 px-6 py-14 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16 lg:py-20">
          {/* Left brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2 4 22h16L12 2Z" />
                  <path d="M12 9v8" />
                </svg>
              </span>
              <span className="text-[20px] font-light tracking-[-0.02em]">
                {FOOTER.brand}
              </span>
            </div>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-white/65">
              {FOOTER.statement}
            </p>

            {/* Newsletter pill */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex w-full max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent px-4 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:col-span-5 lg:grid-cols-2">
            {FOOTER.columns.map((col) => (
              <div key={col.heading}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  {col.heading}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[14px] text-white/80 transition-colors hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social + back to top */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Connect
            </p>
            <ul className="mt-5 space-y-3">
              {FOOTER.social.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-[14px] text-white/80 transition-colors hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-5 border-t border-white/10 px-6 py-7 sm:flex-row sm:items-center sm:px-10 lg:px-16">
          <p className="text-[12px] text-white/55">
            © {new Date().getFullYear()} {FOOTER.brand}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-white cursor-pointer"
          >
            <span>Back to top</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 group-hover:-translate-y-0.5">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
