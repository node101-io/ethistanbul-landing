import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import IstanbulGuideImage from "@/assets/istanbul_bridge.webp";
import BuildersWeekImage from "@/assets/bwi.webp";
import { LeftStar, RightStar } from "./Stars";

const CustomCursor = ({
  text,
  isVisible,
}: {
  text: string;
  isVisible: boolean;
}) => {
  const [rotation, setRotation] = useState(0);

  const springRotation = useSpring(rotation, {
    stiffness: 100,
    damping: 10,
    mass: 0.5,
  });

  const pulse = useTransform(springRotation, [-20, 20], [0.98, 1.02]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(Math.sin(Date.now() / 1000) * 20);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`flex items-center gap-3 text-black pointer-events-none px-4 pb-2 pt-1 rounded-full select-none ${
        text === "Istanbul Guide" ? "bg-[#D1BAFF]" : "bg-[#C0FAB2]"
      }`}
      style={{ scale: pulse }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: isVisible ? 1 : 0 }}
      transition={{
        duration: 0.2,
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
    >
      <span className="text-lg font-medium whitespace-nowrap">{text}</span>
      <motion.div style={{ rotate: springRotation }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform -rotate-45"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

const PlanYourWeek = () => {
  const [activeSection, setActiveSection] = useState<"left" | "right" | null>(
    null
  );
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const springConfig = {
    damping: 25,
    stiffness: 300,
    mass: 0.8,
    restSpeed: 0.01,
  };

  const leftX = useSpring(0, springConfig);
  const leftY = useSpring(0, springConfig);
  const rightX = useSpring(0, springConfig);
  const rightY = useSpring(0, springConfig);

  const handleMouseMove =
    (side: "left" | "right") => (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (side === "left") {
        leftX.set(x);
        leftY.set(y);
      } else {
        rightX.set(x);
        rightY.set(y);
      }
    };

  const handleMouseEnter = (side: "left" | "right") => () => {
    setActiveSection(side);
  };

  const handleMouseLeave = (side: "left" | "right") => () => {
    setActiveSection(null);
  };

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="relative bg-white">
      <div className="absolute left-0 top-0 hidden sm:block">
        <LeftStar />
      </div>
      <div className="absolute left-0 bottom-0 hidden sm:block">
        <LeftStar />
      </div>
      <div className="absolute right-0 top-0 hidden sm:block">
        <RightStar />
      </div>
      <div className="absolute right-0 bottom-0 hidden sm:block">
        <RightStar />
      </div>

      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10"
      >
        <div className="text-center py-20 px-4 md:px-8 lg:px-12">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
          >
            PLAN YOUR WEEK!
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-12"
          >
            Builders Week Istanbul is happening from September 1 to 7. Discover
            all the events and explore the city where everything meets harmony.
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row min-h-[400px] h-[400px] select-none gap-4 sm:gap-6 justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 max-md:h-[600px]">
            <motion.div
              className={`relative !cursor-none w-full md:w-[50%] lg:w-[50%] h-[300px] md:h-full group rounded-[24px] md:rounded-[43px] overflow-hidden duration-300 border border-black ${
                activeSection === "left" ? "cursor-hide" : ""
              }`}
              onMouseMove={!isTouchDevice ? handleMouseMove("left") : undefined}
              onMouseEnter={
                !isTouchDevice ? handleMouseEnter("left") : undefined
              }
              onMouseLeave={
                !isTouchDevice ? handleMouseLeave("left") : undefined
              }
              onClick={() => window.open("/istanbul-guide", "_blank")}
            >
              <Image
                src={IstanbulGuideImage}
                alt="Istanbul Bridge"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 42vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 md:hidden" />

              <div className="absolute inset-0 p-6 md:hidden flex flex-col items-center justify-between max-md:min-h-50">
                <h3 className="text-white text-2xl font-bold text-center mb-4">
                  Istanbul Guide
                </h3>
                <button className="bg-[#D1BAFF] text-black px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-transform">
                  Explore Guide
                </button>
              </div>
              <p className="text-black font-medium text-lg leading-snug absolute bottom-0 left-0 right-0 px-6 pb-3 pt-2 bg-[#E0D3FF] max-md:hidden">
                Explore the city with a travel guide that highlights food, venues, historical sites, natural wonders, accommodations, transportation, and local insider tips.
              </p>

              {!isTouchDevice && (
                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    x: leftX,
                    y: leftY,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                >
                  <CustomCursor
                    text="Istanbul Guide"
                    isVisible={activeSection === "left"}
                  />
                </motion.div>
              )}
            </motion.div>

            <motion.div
              className={`relative !cursor-none w-full md:w-[50%] lg:w-[50%] h-[300px] md:h-full group rounded-[24px] md:rounded-[43px] overflow-hidden duration-300 border border-black ${
                activeSection === "right" ? "cursor-hide" : ""
              }`}
              onMouseMove={!isTouchDevice ? handleMouseMove("right") : undefined}
              onMouseEnter={
                !isTouchDevice ? handleMouseEnter("right") : undefined
              }
              onMouseLeave={
                !isTouchDevice ? handleMouseLeave("right") : undefined
              }
              onClick={() =>
                window.open("https://buildersweekistanbul.com", "_blank")
              }
            >
              <Image
                src={BuildersWeekImage}
                alt="Builders Week"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 42vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 md:hidden" />

              <div className="absolute inset-0 p-6 md:hidden flex flex-col items-center justify-between max-md:min-h-50">
                <h3 className="text-white text-2xl font-bold text-center mb-4">
                  Builders Week Istanbul
                </h3>
                <button className="bg-[#C0FAB2] text-black px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-transform">
                  View Events
                </button>
              </div>
              <p className="text-black font-medium text-lg leading-snug absolute bottom-0 left-0 right-0 px-6 pb-3 pt-2 bg-[#E0D3FF] max-md:hidden">
                BWI is a week-long series of permissionless events designed to scale the blockchain development ecosystem.
              </p>

              {!isTouchDevice && (
                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    x: rightX,
                    y: rightY,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                >
                  <CustomCursor
                    text="Builders Week Istanbul"
                    isVisible={activeSection === "right"}
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PlanYourWeek;
