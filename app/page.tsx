import Contributors from "@/components/contributors";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import React from "react";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <Contributors />
      <FAQ />
      <Footer />
    </main>
  );
}
