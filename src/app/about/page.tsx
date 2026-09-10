import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_STORY, TEAM } from "@/lib/data";
import { TeamGrid } from "./TeamGrid";

export const metadata: Metadata = {
  title: "About — Cincinati",
  description: "The story, philosophy and team behind Cincinati.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        heading="Our Story"
        description="Fire, wood, and a room built for slow evenings."
        image="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Placeholder — warm restaurant interior"
      />

      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {ABOUT_STORY.paragraphs.map((p) => (
              <FadeIn key={p}>
                <p className="text-balance text-lg font-normal leading-relaxed text-midnight-800/75 sm:text-xl">
                  {p}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Philosophy"
            heading="Nothing rushed. Nothing wasted."
            description="Every ingredient is sourced with intent, every pour is deliberate, and every table gets the same unhurried attention — whether it's a first date or a twentieth anniversary."
            align="center"
          />
        </div>
      </section>

      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Meet The Team"
            heading="The People Behind the Room"
            tone="light"
          />
          <TeamGrid team={TEAM} />
        </div>
      </section>
    </>
  );
}
