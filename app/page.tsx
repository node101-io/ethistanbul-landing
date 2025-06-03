import Contributors from "@/components/contributors";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import React from "react";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <Contributors />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  );
}
