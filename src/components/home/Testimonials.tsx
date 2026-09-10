"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS, PRESS } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="border-y border-cream-50/10 bg-midnight-900 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure key={t.author} variants={fadeUp} className="flex flex-col gap-4">
              <Quote className="text-espresso-500" size={28} />
              <blockquote className="text-balance text-lg font-medium leading-relaxed text-cream-100">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-sm font-normal uppercase tracking-wider text-cream-200/50">
                — {t.author}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 border-t border-cream-50/10 pt-12"
        >
          {PRESS.map((p) => (
            <span
              key={p}
              className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-cream-200/40"
            >
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
