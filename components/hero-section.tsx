"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./ui/nav-bar";
import IstanbulBackground from "@/assets/istanbul-background.png";
import { motion } from "framer-motion";
import LiquidButton from "./ui/liquid-button";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IstanbulBackground}
          alt="Istanbul Skyline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-purple-500/30 mix-blend-multiply" />
      </div>

      <motion.div
        className="fixed right-6 z-20"
        initial={{ y: 24, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          top: isScrolled ? "auto" : 24,
          bottom: isScrolled ? 24 : "auto",
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
      >
        <LiquidButton
          onClick={() => {
            window.open("https://forms.gle/Vd69Fqpkvcv6VyEK8", "_blank");
          }}
          className="text-gray-800 border border-black hover:bg-gray-100 px-5 pb-2 pt-1 rounded-full font-medium text-lg cursor-pointer"
        >
          Interested in partnering?
        </LiquidButton>
      </motion.div>

      <div className="relative z-10 flex flex-col h-full justify-center items-center text-white px-4 mt-[-8vh]">
        <p className="text-xl mb-2">September 5-6-7, 2025</p>
        <h1 className="text-6xl md:text-8xl font-bold mb-8">ETHISTANBUL</h1>

        <div className="flex flex-col sm:flex-row gap-4 text-gray-800">
          <LiquidButton
            className="border-none"
            disabled={true}
          >
            Get Your Tickets
          </LiquidButton>
          <LiquidButton
            className="border-none"
            disabled={true}
          >
            Apply To Hack
          </LiquidButton>
        </div>
      </div>

      <Navbar />
    </section>
  );
};

export default HeroSection;
