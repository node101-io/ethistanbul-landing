import Contributors from "@/components/contributors";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/hero-section";
import Overview from "@/components/overview";
import Footer from "@/components/footer";
import React from "react";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <Overview />
      <Contributors />
      <FAQ />
      <Footer />
    </main>
  );
}
