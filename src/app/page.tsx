import { Hero } from "@/components/home/Hero";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { FeaturedMenu } from "@/components/home/FeaturedMenu";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { ReservationCta } from "@/components/home/ReservationCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <FeaturedMenu />
      <GalleryPreview />
      <Testimonials />
      <ReservationCta />
    </>
  );
}
