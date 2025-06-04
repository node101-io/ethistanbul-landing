"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import partners from "@/lib/contributors/partners";

const Partners = () => {
  const FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeLZDfo8L_zYj3PzqrYc7pPZk7_PYJjpruQGgzCscwNw8CG4g/viewform";

  return (
    <section
      id="partners"
      className=" pt-16 pb-20 md:pt-24 md:pb-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-10 text-[#1a1a2e]">
            Partners
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-start sm:items-end justify-between mb-8 md:mb-12 gap-2"
        >
          <div className="flex items-center">
            <span className="text-base sm:text-lg">
              Do you want to be a Partner?
            </span>
          </div>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center text-purple-600 font-medium"
          >
            Form
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 ml-1 rotate-[-45deg] transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-start gap-3 sm:gap-4 md:gap-6 w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {partners.map((partner, index) => (
            <PartnerCard
              key={partner.name}
              partner={{
                color: partner.color ?? "",
                name: partner.name,
                logo:
                  typeof partner.logo === "string"
                    ? partner.logo
                    : partner.logo.src ?? "",
                hoverImage:
                  typeof partner.hoverImage === "string"
                    ? partner.hoverImage
                    : partner.hoverImage?.src ?? "",
                website: partner.website,
              }}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PartnerCard = ({
  partner,
  index,
}: {
  partner: {
    color: string;
    name: string;
    logo: string;
    hoverImage: string;
    website: string;
  };
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile] = useState(window.innerWidth < 768);

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    if (isMobile) {
      return;
    }
    if (e.type === "mouseenter") {
      setIsHovered(true);
    } else if (e.type === "mouseleave") {
      setIsHovered(false);
    }
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
      className="relative group w-[calc(50%-6px)] sm:w-[calc(33.333%-16px)] md:w-[calc(33.333%-24px)] lg:w-[calc(25%-24px)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        onClick={handleClick}
        className="block w-full aspect-[2.14/1] relative rounded-[40px] border-1 border-black shadow-sm hover:shadow-md transition-all duration-300 mx-auto bg-white  "
        onMouseEnter={handleInteraction}
        onMouseLeave={handleInteraction}
      >
        <div
          className="w-full h-full flex rounded-[40px] items-center justify-center p-3 sm:p-4 transition-all duration-300"
          style={{ backgroundColor: isHovered ? partner.color : "transparent" }}
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={150}
            height={60}
            className="object-contain "
          />
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
              src={partner.hoverImage}
              alt={`${partner.name} website`}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Partners;
