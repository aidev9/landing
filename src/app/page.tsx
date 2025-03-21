import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadForm } from "@/components/sections/LeadForm";
import { Footer } from "@/components/sections/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
      <Pricing />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <Footer />
      {/* Other sections will be added here */}
    </main>
  );
}
