"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import type { MenuCategory } from "@/lib/data";

export function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <div id={category.id} className="scroll-mt-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mb-10 flex flex-col gap-3 border-b border-midnight-950/10 pb-8"
      >
        <h2 className="text-3xl font-bold tracking-tight text-midnight-950 sm:text-4xl">
          {category.title}
        </h2>
        <p className="max-w-lg text-sm font-normal leading-relaxed text-midnight-800/65 sm:text-base">
          {category.intro}
        </p>
      </motion.div>

      <motion.ul
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="flex flex-col gap-8"
      >
        {category.items.map((item) => (
          <motion.li
            key={item.name}
            variants={fadeUp}
            className="flex items-start justify-between gap-6"
          >
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-midnight-950">
                  {item.name}
                </h3>
                {item.tag && (
                  <span className="rounded-full bg-burgundy-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-burgundy-600">
                    {item.tag}
                  </span>
                )}
              </div>
              <p className="max-w-md text-sm font-normal leading-relaxed text-midnight-800/60">
                {item.description}
              </p>
            </div>
            <span className="whitespace-nowrap pt-1 text-base font-semibold text-burgundy-600">
              {item.price}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
