import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Cincinati",
  description: "Get in touch with Cincinati.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        heading="Contact Us"
        description="Questions about events, private dining, or the menu — we're happy to help."
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Placeholder — dining room table setting"
      />

      <section className="bg-midnight-950 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <FadeIn className="flex flex-col gap-10">
            <div>
              <h2 className="mb-3 text-2xl font-bold text-cream-50">Location</h2>
              <p className="text-sm font-normal leading-relaxed text-cream-200/70">
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-cream-50">Contact</h2>
              <p className="flex flex-col gap-1.5 text-sm font-normal text-cream-200/70">
                <a href={`tel:${SITE.phone}`} className="hover:text-cream-50">
                  {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}`} className="hover:text-cream-50">
                  {SITE.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-cream-50">Hours</h2>
              <ul className="flex flex-col gap-1.5 text-sm font-normal text-cream-200/70">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-8">
                    <span>{h.day}</span>
                    <span className="text-cream-100/85">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl ring-1 ring-cream-50/10">
              <iframe
                title="Map showing Cincinati location"
                src={SITE.mapEmbedSrc}
                width="100%"
                height="220"
                loading="lazy"
                className="grayscale invert-[0.92] contrast-[1.1]"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-2xl bg-midnight-800 p-8 sm:p-10">
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
