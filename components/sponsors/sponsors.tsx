"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import sponsors from "@/lib/contributors/sponsors";
import SponsorCard from "./SponsorCard";

const Sponsors = () => {
  const FORM_URL =
    "https://calendar.app.google/rQDSqCZ5BwHRb6o36";

  const conferenceSponsors = sponsors.filter(
    (s) => s.category === "conference"
  );
  const hackathonSponsors = sponsors.filter((s) => s.category === "hackathon");

  const conferenceTiers: ("premium" | "platinum" | "gold" | "silver" | "bronze")[] = ["premium"];
  const hackathonTiers: ("premium" | "platinum" | "gold" | "silver" | "bronze")[] = ["platinum", "gold", "silver", "bronze"];

  return (
    <section
      id="sponsors"
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
            Sponsors
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
              Do you want to be a Sponsor?
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

        {/* Conference Sponsors */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-left">Conference</h3>
          {conferenceTiers.map((tier) => {
            const tieredSponsors = conferenceSponsors.filter(
              (s) => s.tier === tier
            );
            if (tieredSponsors.length === 0) return null;

            return (
              <motion.div
                key={tier}
                className="flex flex-wrap justify-start gap-6 mb-6 max-sm:gap-4 max-sm:mb-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {tieredSponsors.map((sponsor, index) => (
                  <SponsorCard
                    key={`${sponsor.name}-conference-${index}`}
                    sponsor={{
                      color: sponsor.color ?? "",
                      name: sponsor.name,
                      logo: sponsor.logo,
                      hoverImage:
                        typeof sponsor.hoverImage === "string"
                          ? sponsor.hoverImage
                          : sponsor.hoverImage?.src ?? "",
                      website: sponsor.website,
                    }}
                    index={index}
                    tier={sponsor.tier!}
                    size={sponsor.size}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Hackathon Sponsors */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-left">Hackathon</h3>
          {hackathonTiers.map((tier) => {
            const tieredSponsors = hackathonSponsors.filter(
              (s) => s.tier === tier
            );
            if (tieredSponsors.length === 0) return null;

            return (
              <motion.div
                key={tier}
                className="flex flex-wrap justify-start gap-6 mb-6 max-sm:gap-4 max-sm:mb-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {tieredSponsors.map((sponsor, index) => (
                  <SponsorCard
                    key={`${sponsor.name}-hackathon-${index}`}
                    sponsor={{
                      color: sponsor.color ?? "",
                      name: sponsor.name,
                      logo: sponsor.logo,
                      hoverImage:
                        typeof sponsor.hoverImage === "string"
                          ? sponsor.hoverImage
                          : sponsor.hoverImage?.src ?? "",
                      website: sponsor.website,
                    }}
                    index={index}
                    tier={sponsor.tier!}
                    size={sponsor.size}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        <div style={{ display: "none" }}>
          {sponsors.map(
            (sponsor) =>
              sponsor.hoverImage && (
                <Image
                  key={sponsor.name + sponsor.tier + "-hover-preload"}
                  src={sponsor.hoverImage}
                  alt=""
                  width={10}
                  height={10}
                  style={{ display: "none" }}
                  priority={false}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;