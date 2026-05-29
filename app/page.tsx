import { Hero } from "@/components/home/Hero";
import { Authority } from "@/components/home/Authority";
import { Experience } from "@/components/home/Experience";
import { About } from "@/components/home/About";
import { Accommodations } from "@/components/home/Accommodations";
import { Gastronomy } from "@/components/home/Gastronomy";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Authority />
      <Experience />
      <About />
      <Accommodations />
      <Gastronomy />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
