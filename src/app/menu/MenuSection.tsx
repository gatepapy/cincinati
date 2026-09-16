"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import type { MenuCategory, MenuItem } from "@/lib/data";

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <motion.li variants={fadeUp} className="flex items-start justify-between gap-6">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-midnight-950">{item.name}</h3>
          {item.tag && (
            <span className="rounded-full bg-burgundy-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-burgundy-600">
              {item.tag}
            </span>
          )}
        </div>
        {item.description && (
          <p className="max-w-md text-sm font-normal leading-relaxed text-midnight-800/60">
            {item.description}
          </p>
        )}
        {item.note && (
          <p className="max-w-md text-xs font-medium italic leading-relaxed text-midnight-800/45">
            {item.note}
          </p>
        )}
      </div>

      {item.price && (
        <div className="flex shrink-0 flex-col items-end gap-0.5 pt-1">
          <span className="whitespace-nowrap text-base font-semibold text-burgundy-600">
            {item.priceLabel && (
              <span className="mr-1.5 text-[10px] font-semibold uppercase tracking-wider text-midnight-800/35">
                {item.priceLabel}
              </span>
            )}
            {item.price}
          </span>
          {item.price2 && (
            <span className="whitespace-nowrap text-xs font-medium text-midnight-800/45">
              {item.price2Label ?? "Shot"} {item.price2}
            </span>
          )}
        </div>
      )}
    </motion.li>
  );
}

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
        {category.intro && (
          <p className="max-w-lg text-sm font-normal leading-relaxed text-midnight-800/65 sm:text-base">
            {category.intro}
          </p>
        )}
      </motion.div>

      <div className="flex flex-col gap-12">
        {category.sections.map((section, index) => (
          <div key={section.title ?? index} className="flex flex-col gap-5">
            {section.title && (
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-midnight-800/50">
                {section.title}
              </h3>
            )}
            {section.note && (
              <p className="-mt-2 max-w-lg text-sm font-normal italic leading-relaxed text-midnight-800/55">
                {section.note}
              </p>
            )}
            {section.items.length > 0 && (
              <motion.ul
                variants={staggerContainer(0.06)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="flex flex-col gap-8"
              >
                {section.items.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </motion.ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
