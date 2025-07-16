"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const PartnerCard = ({
  partner,
  index,
}: {
  partner: {
    logo: React.ComponentType<any> | StaticImageData;
    color: string;
    name: string;
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
    if (!partner.website) {
      e.preventDefault();
      return;
    }
    window.open(partner.website, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="relative group w-[calc(50%-6px)] sm:w-[calc(33.333%-16px)] md:w-[calc(33.333%-24px)] lg:w-[calc(20%-24px)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        onClick={handleClick}
        className="block w-full aspect-[2.14/1] relative rounded-3xl border-1 border-black shadow-sm hover:shadow-md transition-all duration-300 mx-auto bg-white"
        onMouseEnter={handleInteraction}
        onMouseLeave={handleInteraction}
      >
        <div className="w-full h-full flex overflow-hidden items-center justify-center p-3 sm:p-4 transition-all duration-300">
          {typeof partner.logo === "function" ? (
            React.createElement(partner.logo, {
              fill: isHovered ? "#D1BAFF" : "#333235",
              isHovered: isHovered,
            })
          ) : (
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain"
              priority={false}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerCard;
