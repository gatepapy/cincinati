"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { TEAM } from "@/lib/data";

export function TeamGrid({ team }: { team: typeof TEAM }) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3"
    >
      {team.map((member) => (
        <motion.div key={member.name} variants={fadeUp} className="flex flex-col gap-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src={member.image}
              alt={`Placeholder portrait — ${member.name}`}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-midnight-950">{member.name}</h3>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-espresso-600">
              {member.role}
            </p>
            <p className="text-sm font-normal leading-relaxed text-midnight-800/65">
              {member.bio}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
