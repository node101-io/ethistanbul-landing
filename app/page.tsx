"use client";
import Contributors from "@/components/contributors/contributors";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import React, { useEffect } from "react";
import Partners from "@/components/partners/partners";
import Sponsors from "@/components/sponsors/sponsors";
import FooterImage from "@/components/FooterImage";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Önce sessionStorage'dan scroll hedefi var mı bak
      const scrollTo = sessionStorage.getItem("scrollToSection");
      if (scrollTo) {
        const section = document.querySelector(scrollTo);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
        sessionStorage.removeItem("scrollToSection");
        return;
      }
      // Yoksa hash'e bak
      if (window.location.hash) {
        const id = window.location.hash;
        const section = document.querySelector(id);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    }
  }, []);

  return (
    <main className="relative">
      <HeroSection />
      <Contributors />
      <Sponsors />
      <Partners />
      <FAQ />

      <div className="relative bg-[#D5FFCA]">
        <FooterImage />
        <div className="relative">
          <Footer />
        </div>
      </div>
    </main>
  );
}
