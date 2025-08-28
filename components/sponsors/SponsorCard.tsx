"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const sizeClasses = {
  xlarge: "w-72 h-48",
  large: "w-68 h-48",
  medium: "w-56 h-42",
  small: "w-46 h-36",
  xsmall: "w-38 h-30",
};

const SponsorCard = ({
  sponsor,
  index,
  tier,
  size,
}: {
  sponsor: {
    logo: React.ComponentType<any> | StaticImageData;
    color: string;
    name: string;
    hoverImage: string;
    website: string;
  };
  index: number;
  tier: "deluxe" | "premium" | "platinum" | "gold" | "silver" | "bronze";
  size?: "xlarge" | "large" | "medium" | "small" | "xsmall";
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    if (isMobile) return;
    if (e.type === "mouseenter") setIsHovered(true);
    else if (e.type === "mouseleave") setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!sponsor.website) {
      e.preventDefault();
      return;
    }
    window.open(sponsor.website, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className={`relative group ${sizeClasses[size!]} max-sm:w-[calc((100%-16px)/2)]!`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        onClick={handleClick}
        className="w-full h-full relative rounded-3xl border border-black shadow-sm hover:shadow-md transition-all duration-300 mx-auto bg-white flex items-center justify-center"
        onMouseEnter={handleInteraction}
        onMouseLeave={handleInteraction}
      >
        <div
          className="w-full h-full flex rounded-3xl overflow-hidden items-center justify-center relative"
        >
          {typeof sponsor.logo === "function" ? (
            React.createElement(sponsor.logo, {
              className: "w-full h-auto max-w-full max-h-full p-10 max-sm:p-6",
            })
          ) : (
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              fill
              className="object-contain"
              priority={false}
            />
          )}
          {/* Tier badge */}
          <div
            className="absolute bottom-[5%] left-1/2 -translate-x-1/2 pb-0.5 px-4 rounded-full border border-black text-sm"
            style={{
              backgroundColor:
                tier === "deluxe"
                  ? "#FFB499"
                  : tier === "premium"
                  ? "#C0FAB2"
                  : tier === "platinum"
                  ? "#CABAFF"
                  : tier === "gold"
                  ? "#FFE28D"
                  : tier === "silver"
                  ? "#8CF0FF"
                  : "#D3D3D3",
            }}
          >
            {tier.charAt(0).toUpperCase() + tier.slice(1)}
          </div>
        </div>
        {!isMobile && (
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-[90%] aspect-video rounded-[10px] border border-black overflow-hidden transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
            style={{ bottom: "calc(100% - 20px)" }}
          >
            <Image
              src={sponsor.hoverImage}
              alt={`${sponsor.name} website`}
              fill
              className="object-cover object-top"
              priority={false}
            />
            <div className="absolute bottom-1/10 left-0 right-0 top-7.9/10 flex items-center px-3 pb-[2px] rounded-full w-fit mx-auto bg-white border border-black">
              {sponsor.website.replace("https://", "")}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SponsorCard;