import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ReservationForm } from "@/components/ReservationForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reservations — The Eye Lounge",
  description: "Reserve a table at The Eye Lounge.",
};

export default function ReservationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Book A Table"
        heading="Reservations"
        description="Tell us the details and we'll confirm by email — for parties over 20, please call us directly."
        image="https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Placeholder — set dining table with candlelight"
      />

      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <FadeIn className="flex flex-col gap-8">
            <div>
              <h2 className="mb-3 text-2xl font-bold text-midnight-950">Hours</h2>
              <ul className="flex flex-col gap-1.5 text-sm font-normal text-midnight-800/70">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-8">
                    <span>{h.day}</span>
                    <span className="text-midnight-950/80">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-midnight-950">Good to Know</h2>
              <ul className="flex flex-col gap-2 text-sm font-normal leading-relaxed text-midnight-800/70">
                <li>Reservations held for 15 minutes past booking time.</li>
                <li>Large parties (10+) require a credit card to hold.</li>
                <li>Smart casual dress recommended.</li>
                <li>Walk-ins always welcome at the bar.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-midnight-950">Prefer to Call?</h2>
              <a
                href={`tel:${SITE.phone}`}
                className="text-base font-semibold text-espresso-600 hover:underline"
              >
                {SITE.phone}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ReservationForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
