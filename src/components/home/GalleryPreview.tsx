"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GALLERY_IMAGES } from "@/lib/data";

const preview = GALLERY_IMAGES.slice(0, 5);

export function GalleryPreview() {
  return (
    <section className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="The Room"
            heading="Ambience & Atmosphere"
            description="A glimpse of the space — warm wood, low light, and fire."
            tone="light"
          />
          <div className="shrink-0">
            <Button href="/gallery" variant="primary" className="bg-midnight-950 hover:bg-midnight-800">
              View Gallery
            </Button>
          </div>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-2"
        >
          <motion.div
            variants={fadeUp}
            className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-2xl sm:aspect-auto"
          >
            <Image
              src={preview[0].src}
              alt={preview[0].alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          {preview.slice(1).map((img) => (
            <motion.div
              key={img.src}
              variants={fadeUp}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
