import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { MENU } from "@/lib/data";
import { MenuSection } from "./MenuSection";

export const metadata: Metadata = {
  title: "Menu — The Eye Lounge",
  description: "Cocktails, food and drinks at The Eye Lounge.",
};

const MENU_GROUPS = Array.from(new Set(MENU.map((category) => category.group)));

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Taste"
        heading="The Menu"
        description="Handcrafted cocktails and food at the bar, built for slow evenings."
        image="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Placeholder — cocktail on the bar at The Eye Lounge"
      />

      <section className="bg-gold-50 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <nav
            aria-label="Menu categories"
            className="mb-16 flex flex-col gap-6 border-b border-midnight-950/10 pb-8"
          >
            {MENU_GROUPS.map((group) => (
              <div key={group} className="flex flex-col items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-midnight-950/35">
                  {group}
                </span>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {MENU.filter((category) => category.group === group).map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      className="text-xs font-semibold uppercase tracking-[0.25em] text-midnight-950/60 transition-colors hover:text-burgundy-600"
                    >
                      {category.title}
                    </a>
                  ))}
                </div>
              </div>
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
