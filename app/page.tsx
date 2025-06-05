import Contributors from "@/components/contributors/contributors";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import React from "react";
import Partners from "@/components/partners/partners";
import FooterImage from "@/components/FooterImage";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <Contributors />
      <Partners />
      <FAQ />

      <div className="relative bg-[#D5FFCA]">
        <FooterImage />
        <div className="relative -mt-[25vh] sm:-mt-[20vh]">
          <Footer />
        </div>
      </div>
    </main>
  );
}
