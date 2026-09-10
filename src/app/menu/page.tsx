import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { MENU } from "@/lib/data";
import { MenuSection } from "./MenuSection";

export const metadata: Metadata = {
  title: "Menu — Cincinati",
  description: "Cocktails, food and wine at Cincinati.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Taste"
        heading="The Menu"
        description="A live-fire kitchen and a barrel-driven bar program, built for slow evenings."
        image="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Placeholder — cocktail on the bar at Cincinati"
      />

      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <nav
            aria-label="Menu categories"
            className="mb-16 flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-midnight-950/10 pb-8"
          >
            {MENU.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-midnight-950/60 transition-colors hover:text-burgundy-600"
              >
                {category.title}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-24">
            {MENU.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
