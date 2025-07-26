"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import mentors from "@/lib/contributors/mentors";
import { Speaker } from "@/lib/api/speakers";
import LiquidButton from "../ui/liquid-button";
import TwitterIcon from "./icons/TwitterIcon";
import ContributorCard from "./ContributorCard";
import { ContributorType } from "./types";
import { Contributor } from "./types";

interface ContributorsProps {
  speakers: Speaker[];
}

const Contributors = ({ speakers }: ContributorsProps) => {
  const [activeType, setActiveType] = useState<ContributorType>("Speakers");
  const [selectedContributor, setSelectedContributor] =
    useState<Contributor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContributorClick = (contributor: Contributor) => {
    setSelectedContributor(contributor);
    if (isMobile) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const contributorTypes: ContributorType[] = ["Speakers", "Judges", "Mentors"];

  const FORM_URLS: Record<ContributorType, string> = {
    Judges: "https://form.ethistanbul.io/judge",
    Mentors: "https://form.ethistanbul.io/mentor",
    Speakers: "https://form.ethistanbul.io/speaker",
  };

  const getSingularType = (type: ContributorType) => {
    switch (type) {
      case "Judges":
        return "Judge";
      case "Speakers":
        return "Speaker";
      case "Mentors":
        return "Mentor";
      default:
        return "Mentor";
    }
  };

  const getContributorsByType = (type: ContributorType) => {
    if (type === "Speakers") {
      return speakers;
    } else if (type === "Mentors") {
      return mentors;
    } else {
      return [];
    }
  };

  return (
    <section
      id="contributors"
      className="pt-16 md:pt-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 md:mb-10 text-[#1a1a2e]">
            Contributors
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 md:mb-12">
          {contributorTypes.map((type) => (
            <LiquidButton
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 sm:px-8 py-2 text-sm sm:text-base rounded-full border transition-colors duration-300 ${
                activeType === type
                  ? "!bg-purple-200 !border-purple-300"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {type}
            </LiquidButton>
          ))}
        </div>

        <div className="flex flex-col items-start sm:items-end justify-between mb-4 md:mb-6 gap-2">
          <div className="flex items-center">
            <span className="text-base sm:text-lg">
              Do you want to be a {getSingularType(activeType)}?
            </span>
          </div>
          <a
            href={FORM_URLS[activeType]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-600 font-medium"
          >
            Form
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 ml-1 rotate-[-45deg]"
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
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6"
          >
            {getContributorsByType(activeType).length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12 text-gray-500 text-xl"
              >
                Coming Soon - TBA
              </motion.div>
            ) : (
              getContributorsByType(activeType).map((contributor, index) => (
                <ContributorCard
                  key={index}
                  contributor={contributor}
                  onClick={() => handleContributorClick(contributor)}
                  isMobile={isMobile}
                />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {isModalOpen && selectedContributor && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900"></h3>
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close modal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col items-center mb-6">
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <Image
                      src={selectedContributor.image}
                      alt={selectedContributor.name}
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mt-4">
                    {selectedContributor.name}
                  </h4>
                  <p className="text-lg text-gray-600">
                    {selectedContributor.company}
                  </p>
                  {selectedContributor.type === "Speakers" &&
                    selectedContributor.presentationTitle && (
                      <p className="text-md text-purple-600 font-medium mt-2">
                        "{selectedContributor.presentationTitle}"
                      </p>
                    )}
                  <div className="flex space-x-3 mt-2">
                    {selectedContributor.twitter && (
                      <a
                        href={selectedContributor.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black"
                      >
                        {TwitterIcon}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contributors;
