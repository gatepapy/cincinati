"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { ABOUT_STORY } from "@/lib/data";

export function AboutTeaser() {
  return (
    <section className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={ABOUT_STORY.image}
            alt="Placeholder — table set for dining at Cincinati"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-espresso-600"
          >
            {ABOUT_STORY.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.05 }}
            className="text-balance text-4xl font-bold tracking-tight text-midnight-950 sm:text-5xl"
          >
            {ABOUT_STORY.heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="max-w-md text-base font-normal leading-relaxed text-midnight-800/75 sm:text-lg"
          >
            {ABOUT_STORY.paragraphs[0]}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.15 }}
          >
            <Button href="/about" variant="primary" className="mt-2 bg-midnight-950 hover:bg-midnight-800">
              Our Story
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
