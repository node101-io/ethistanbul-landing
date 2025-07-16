"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const SponsorCard = ({
  sponsor,
  index,
}: {
  sponsor: {
    logo: React.ComponentType<any> | StaticImageData;
    color: string;
    name: string;
    hoverImage: string;
    website: string;
  };
  index: number;
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
      className="relative group w-[calc(50%-6px)] sm:w-[calc(33.333%-16px)] md:w-[calc(33.333%-24px)] lg:w-[calc(25%-24px)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        onClick={handleClick}
        className="block w-full aspect-[2.14/1] relative rounded-[40px] border-1 border-black shadow-sm hover:shadow-md transition-all duration-300 mx-auto bg-white"
        onMouseEnter={handleInteraction}
        onMouseLeave={handleInteraction}
      >
        <div className="w-full h-full flex rounded-[40px] overflow-hidden items-center justify-center p-3 sm:p-4 transition-all duration-300">
          {typeof sponsor.logo === "function" ? (
            React.createElement(sponsor.logo, {
              fill: isHovered ? "#D1BAFF" : "#000000",
              isHovered: isHovered,
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
        </div>
        {!isMobile && (
          <div
            className={`absolute left-1/2 -translate-x-1/2 -top-[90%] w-[90%] aspect-video rounded-[10px] border border-black overflow-hidden transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
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