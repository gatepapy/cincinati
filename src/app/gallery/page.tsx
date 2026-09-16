import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { GALLERY_IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery — The Eye Lounge",
  description: "A look inside The Eye Lounge — the room, the bar, and the plates.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="In Pictures"
        heading="Gallery"
        description="Click any image to view it full-screen."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Placeholder — bar counter with spirit bottles"
      />

      <section className="bg-midnight-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <GalleryGrid images={GALLERY_IMAGES} />
        </div>
      </section>
    </>
  );
}
