"use client";

import React from "react";
import { motion } from "framer-motion";
import partnersData from "@/lib/contributors/partners";
import PartnerCard from "./PartnerCard";

const Partners = () => {
  const FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeLZDfo8L_zYj3PzqrYc7pPZk7_PYJjpruQGgzCscwNw8CG4g/viewform";

  const { communityPartners, mediaPartners } = partnersData;

  return (
    <section
      id="partners"
      className="pt-16 pb-20 md:pt-24 md:pb-32 bg-white overflow-hidden"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 text-[#1a1a2e] lg:px-12">
            Community Partners
          </h3>
          <div className="flex flex-wrap justify-start gap-3 sm:gap-4 md:gap-6 w-full lg:px-12">
            {communityPartners.map((partner, index) => (
              <PartnerCard
                key={partner.name}
                partner={{
                  color: partner.color ?? "",
                  name: partner.name,
                  logo: partner.logo,
                  website: partner.website,
                }}
                index={index}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl mb-6 text-[#1a1a2e] lg:px-12">
            Media Supporters
          </h3>
          <div className="flex flex-wrap justify-start gap-3 sm:gap-4 md:gap-6 w-full lg:px-12">
            {mediaPartners.map((partner, index) => (
              <PartnerCard
                key={partner.name}
                partner={{
                  color: partner.color ?? "",
                  name: partner.name,
                  logo: partner.logo,
                  website: partner.website,
                }}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
