"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./ui/nav-bar";
import IstanbulBackground from "@/assets/istanbul-background.webp";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import LiquidButton from "./ui/liquid-button";
import Overview from "./overview";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [buttonText, setButtonText] = useState("Subscribe for Updates");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isFormExpanded, setIsFormExpanded] = useState(false);

  const { scrollY } = useScroll();

  const dateScale = useTransform(scrollY, [0, 700], [1, 0.9]);
  const dateY = useTransform(scrollY, [0, 1000], [0, -850]);
  const dateZ = useTransform(scrollY, [0, 1000], [0, -100]);

  const titleScale = useTransform(scrollY, [0, 700], [1, 0.9]);
  const titleY = useTransform(scrollY, [0, 1000], [0, -800]);
  const titleZ = useTransform(scrollY, [0, 1000], [0, -150]);

  const overlayOpacity = useTransform(scrollY, [0, 500], [0, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleSubscribe = async (emailToSubscribe: string) => {
  //   if (!emailToSubscribe) return;

  //   try {
  //     const response = await fetch("https://node101.io/subscribe", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         email: emailToSubscribe,
  //         type: "ethistanbul",
  //       }),
  //     });

  //     const data = await response.json();

  //     if ((!data || data.error) && data.error !== "duplicated_unique_field") {
  //       throw new Error(data.error || "Subscription failed");
  //     }

  //     setEmail("");
  //     setButtonText("Thanks!");
  //     setIsFormExpanded(false);
  //     setTimeout(() => setButtonText("Subscribe for Updates"), 3000);
  //     return true;
  //   } catch (error) {
  //     console.error("Subscription error:", error);
  //     setMessage("Failed to subscribe. Please try again.");
  //     setTimeout(() => setMessage(""), 3000);
  //     return false;
  //   }
  // };

  return (
    <div className="relative min-h-[200vh]">
      <section className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IstanbulBackground}
            alt="Istanbul Skyline"
            fill
            priority
            className="object-cover"
          />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-[#D1BAFF]"
          />
        </div>

        <div className="relative z-20 flex flex-col h-full justify-center items-center text-white px-4 mt-[-10vh] perspective-[1000px]">
          <motion.p
            style={{
              scale: dateScale,
              y: dateY,
              z: dateZ,
            }}
            className="text-2xl md:text-4xl  origin-center font-semibold mb-0 md:-mb-4"
          >
            September 5-6-7, 2025
          </motion.p>
          <motion.h1
            style={{
              scale: titleScale,
              y: titleY,
              z: titleZ,
            }}
            className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold origin-center text-center leading-none"
          >
            ETHISTANBUL
          </motion.h1>

          {/* <motion.div
            style={{ scale: formScale, y: formY, opacity: formOpacity }}
            className="flex flex-col items-center gap-4 transition-all duration-500"
          >
            <AnimatePresence>
              {!isFormExpanded ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <LiquidButton
                    onClick={() => setIsFormExpanded(true)}
                    className="text-gray-800 border border-black hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-lg cursor-pointer bg-white/90 backdrop-blur-sm"
                  >
                    {buttonText}
                  </LiquidButton>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-full"
                >
                  <input
                    type="email"
                    placeholder="vitalik@ethereum.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded-full border border-white/20 focus:outline-none focus:ring-0 placeholder:text-white/50 bg-transparent text-white w-64"
                    onKeyDown={async (e) => {
                      if (e.key === "Enter") {
                        await handleSubscribe(email);
                      }
                    }}
                    autoFocus
                  />
                  <LiquidButton
                    className="border border-white/20 text-white hover:bg-white/20"
                    onClick={async () => {
                      await handleSubscribe(email);
                    }}
                  >
                    Subscribe
                  </LiquidButton>
                </motion.div>
              )}
            </AnimatePresence>
            {message && (
              <p
                className={`text-sm ${
                  message.includes("Thanks") ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </motion.div> */}
        </div>
      </section>
      <div className="relative z-50">
        <Navbar />
      </div>
      <section
        className="relative z-10 min-h-screen"
        id="overview"
      >
        <Overview />
      </section>
      <motion.div
        className="fixed right-6 z-50"
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
          className="text-gray-800 border border-black hover:bg-gray-100 px-5 pb-2 pt-1 rounded-full font-medium text-lg cursor-pointer bg-white/90 backdrop-blur-sm"
        >
          Interested in partnering?
        </LiquidButton>
      </motion.div>
    </div>
  );
};

export default HeroSection;
