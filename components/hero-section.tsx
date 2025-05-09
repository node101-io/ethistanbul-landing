"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./ui/nav-bar";
import IstanbulBackground from "@/assets/istanbul-background.png";
import { motion } from "framer-motion";
import LiquidButton from "./ui/liquid-button";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = async (email: string) => {
    if (!email) return;

    try {
      const response = await fetch("https://node101.io/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: "buildersweekistanbul",
        }),
      });

      const data = await response.json();

      if ((!data || data.error) && data.error !== "duplicated_unique_field") {
        throw new Error(data.error || "Subscription failed");
      }

      setMessage("Thanks for subscribing!");
      setTimeout(() => setMessage(""), 3000);
      return true;
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("Failed to subscribe. Please try again.");
      setTimeout(() => setMessage(""), 3000);
      return false;
    }
  };

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
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 pt-1 pb-2 rounded-full border border-gray-300 focus:outline-none focus:ring-0 "
                onKeyDown={async (e) => {
                  if (e.key === "Enter") {
                    const success = await handleSubscribe(
                      e.currentTarget.value
                    );
                    if (success) {
                      e.currentTarget.value = "";
                    }
                  }
                }}
              />
              <LiquidButton
                className="border-none"
                onClick={async (e) => {
                  const input = e.currentTarget
                    .previousElementSibling as HTMLInputElement;
                  const success = await handleSubscribe(input.value);
                  if (success) {
                    input.value = "";
                  }
                }}
              >
                Subscribe
              </LiquidButton>
            </div>
            {message && (
              <p
                className={`text-sm ${
                  message.includes("Thanks") ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>

      <Navbar />
    </section>
  );
};

export default HeroSection;
