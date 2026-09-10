"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

export function ReservationCta() {
  return (
    <section className="relative overflow-hidden bg-midnight-950 py-28 sm:py-36">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop"
          alt="Placeholder — wine glasses on a dark table"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-midnight-950/80 to-midnight-950" />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center lg:px-8"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-espresso-400">
          Join Us Tonight
        </span>
        <h2 className="text-balance text-4xl font-bold tracking-tight text-cream-50 sm:text-5xl md:text-6xl">
          Your table by the fire is waiting.
        </h2>
        <p className="max-w-lg text-balance text-base font-normal leading-relaxed text-cream-100/80 sm:text-lg">
          Reservations are recommended, especially Thursday through Saturday.
          Walk-ins welcome at the bar.
        </p>
        <Button href="/reservations" variant="primary" className="mt-4">
          Reserve a Table
        </Button>
      </motion.div>
    </section>
  );
}
