"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedItemCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FEATURED_ITEMS } from "@/lib/data";

export function FeaturedMenu() {
  return (
    <section className="bg-midnight-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Signatures"
            heading="From the Kitchen & Bar"
            description="A small selection of the dishes and pours that define the room."
          />
          <div className="shrink-0">
            <Button href="/menu" variant="outline">
              Full Menu
            </Button>
          </div>
        </div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURED_ITEMS.map((item) => (
            <FeaturedItemCard key={item.name} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
