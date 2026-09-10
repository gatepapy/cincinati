"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function FeaturedItemCard({
  name,
  description,
  price,
  image,
}: {
  name: string;
  description: string;
  price: string;
  image: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="group flex flex-col overflow-hidden rounded-2xl bg-midnight-800 ring-1 ring-cream-50/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-espresso-900/40"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-cream-50">{name}</h3>
          <span className="whitespace-nowrap text-sm font-semibold text-espresso-400">
            {price}
          </span>
        </div>
        <p className="text-sm font-normal leading-relaxed text-cream-200/70">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
