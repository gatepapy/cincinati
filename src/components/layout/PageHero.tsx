"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  heading,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  heading: string;
  description?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex h-[52vh] min-h-[380px] w-full items-end overflow-hidden bg-midnight-950">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/70 to-midnight-950/40" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-8"
      >
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.35em] text-espresso-400">
          {eyebrow}
        </span>
        <h1 className="max-w-2xl text-balance text-5xl font-extrabold tracking-tight text-cream-50 sm:text-6xl">
          {heading}
        </h1>
        {description && (
          <p className="mt-4 max-w-lg text-balance text-base font-normal leading-relaxed text-cream-100/80 sm:text-lg">
            {description}
          </p>
        )}
      </motion.div>
    </section>
  );
}
