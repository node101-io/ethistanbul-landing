"use client";
import React, { useState, useEffect, useRef } from "react";
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

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const greetings = [
  "Merhaba",
  "Hello",
  "مرحبا",
  "こんにちは",
  "Ciao",
  "Salut",
  "Hallo",
  "Hola",
  "안녕하세요",
  "Привет",
  "Olá",
  "नमस्ते",
  "สวัสดี",
  "你好",
  "你好",
  "ሰላም",
  "שלום",
  "Hej",
  "Kamusta",
  "Sawubona",
  "Halo",
  "Salam",
  "Xin chào",
  "Bula",
  "Aloha",
  "Merhaba",
];

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [showMainTitle, setShowMainTitle] = useState(false);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const mainContentRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const dateScale = useTransform(scrollY, [0, 700], [1, 0.9]);
  const dateY = useTransform(scrollY, [0, 1000], [0, -850]);
  const dateZ = useTransform(scrollY, [0, 1000], [0, -100]);

  const titleScale = useTransform(scrollY, [0, 700], [1, 0.9]);
  const titleY = useTransform(scrollY, [0, 1000], [0, -800]);
  const titleZ = useTransform(scrollY, [0, 1000], [0, -150]);

  const overlayOpacity = useTransform(scrollY, [0, 500], [0, 0.9]);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!showMainTitle) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMainTitle]);

  useEffect(() => {
    if (currentGreeting < greetings.length - 1) {
      const timer = setTimeout(
        () => {
          setCurrentGreeting((prev) => prev + 1);
        },
        currentGreeting === 0 ? 500 : 50
      );
      return () => clearTimeout(timer);
    } else if (!showMainTitle) {
      setShowMainTitle(true);
    }
  }, [currentGreeting, showMainTitle]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!showMainTitle && dimension.width > 0 && (
          <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="intro-introduction bg-[#D1BAFF]"
          >
            <motion.p
              variants={opacity}
              initial="initial"
              animate="enter"
              className="flex text-black text-5xl md:text-7xl font-bold items-center justify-center absolute z-10"
            >
              {greetings[currentGreeting]}
            </motion.p>
            <svg className="intro-svg">
              <motion.path
                className="intro-path"
                variants={curve}
                initial="initial"
                exit="exit"
              ></motion.path>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="relative min-h-[200vh]"
        ref={mainContentRef}
      >
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl md:text-4xl origin-center font-semibold mb-0 md:-mb-4"
            >
              September 5-6-7, 2025
            </motion.p>
            <motion.h1
              style={{
                scale: titleScale,
                y: titleY,
                z: titleZ,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold origin-center text-center leading-none"
            >
              ETHISTANBUL
            </motion.h1>
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
    </>
  );
};

export default HeroSection;
