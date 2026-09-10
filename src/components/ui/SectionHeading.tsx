"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Align = "left" | "center";

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: Align;
  tone?: "dark" | "light";
  className?: string;
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-4",
        isCenter && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.3em]",
            tone === "dark" ? "text-espresso-400" : "text-espresso-600"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl",
          tone === "dark" ? "text-cream-50" : "text-midnight-950"
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-xl text-balance text-base font-normal leading-relaxed sm:text-lg",
            isCenter && "mx-auto",
            tone === "dark" ? "text-cream-200/80" : "text-midnight-800/70"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
