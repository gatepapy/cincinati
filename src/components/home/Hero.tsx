"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-midnight-950"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2400&auto=format&fit=crop"
          alt="Placeholder — moody bar interior at The Eye Lounge"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/60 to-midnight-950/30" />
      <div className="absolute inset-0 bg-midnight-950/20" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:pb-28 lg:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.4em] text-espresso-400"
        >
          Kigali, Rwanda
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-cream-50 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {SITE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 max-w-lg text-balance text-lg font-normal leading-relaxed text-cream-100/85 sm:text-xl"
        >
          {SITE.tagline} Handcrafted cocktails, food at the bar, and a room
          built for the long evening ahead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/reservations" variant="primary">
            Reserve a Table
          </Button>
          <Button href="/menu" variant="outline">
            View Menu
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border border-cream-50/40 p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-cream-50/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
