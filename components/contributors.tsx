"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import mentors from "@/lib/contributors/mentors";
import speakers from "@/lib/contributors/speakers";
import LiquidButton from "./ui/liquid-button";
import Arrow from "@/assets/ui/arrow.svg";

type ContributorType = "Speakers" | "Judges" | "Mentors";

const TwitterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="24"
    height="24"
    viewBox="0 0 50 50"
    className="fill-current"
  >
    <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
  </svg>
);

const LinkedInIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

interface Contributor {
  name: string;
  company: string;
  image: string | StaticImageData;
  type: ContributorType;
  presentationTitle?: string;
  twitter?: string;
  linkedin?: string;
}

const Contributors = () => {
  const [activeType, setActiveType] = useState<ContributorType>("Speakers");
  const [selectedContributor, setSelectedContributor] =
    useState<Contributor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
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
    Judges: "https://forms.gle/v5ooyVinYTz1BESb8",
    Mentors: "https://forms.gle/F2TQx7TU2jUmmA3N6",
    Speakers: "https://forms.gle/iLFQbW7tc8SmiEcc6",
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
      className="min-h-screen pt-16 pb-20 md:pt-24 md:pb-32 bg-white"
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
                  imageCover={activeType === "Speakers"}
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
                    {selectedContributor.linkedin && (
                      <a
                        href={selectedContributor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black"
                      >
                        {LinkedInIcon}
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

const Pill = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white border border-black rounded-full px-6 py-2 text-lg font-medium text-black shadow text-center ${className}`}
  >
    {children}
  </div>
);

const BottomPillOrText = ({
  contributor,
  isHovered,
  isSpeaker,
  showSpeakerHover,
  isMobile,
}: {
  contributor: Contributor;
  isHovered: boolean;
  isSpeaker: boolean;
  showSpeakerHover: boolean;
  isMobile: boolean;
}) => {
  if (showSpeakerHover && isSpeaker) return null;
  return (
    <div className="absolute bottom-2 sm:bottom-4 left-2 right-2 sm:left-4 sm:right-4 md:left-6 md:right-6 pb-1 text-center">
      {isMobile ? (
        <div className="text-xs sm:text-sm md:text-base text-black font-medium px-2 py-1">
          {contributor.name}
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={
              isHovered
                ? contributor.type === "Speakers"
                  ? "presentation"
                  : "company"
                : "name"
            }
            className="flex justify-center"
          >
            {isSpeaker ? (
              isHovered && contributor.presentationTitle ? (
                <span className="text-xs sm:text-sm md:text-base text-black font-medium px-2 py-1">
                  {contributor.presentationTitle}
                </span>
              ) : (
                <Pill className="text-xs sm:text-sm md:text-base py-1 px-4">
                  {contributor.name}
                </Pill>
              )
            ) : (
              <Pill className="text-xs sm:text-sm md:text-base py-1 px-4">
                {contributor.name}
              </Pill>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

const ContributorCard = ({
  contributor,
  onClick,
  isMobile,
  imageCover = false,
}: {
  contributor: Contributor;
  onClick: () => void;
  isMobile: boolean;
  imageCover?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    onClick();
  };

  const handleSocialClick = (e: React.MouseEvent, url?: string) => {
    if (url && !isMobile) {
      e.stopPropagation();
      window.open(url, "_blank");
    }
  };

  const isSpeaker = contributor.type === "Speakers";
  const showSpeakerHover = isSpeaker && isHovered && !isMobile;

  return (
    <motion.div
      className={`rounded-4xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow border border-black ${
        showSpeakerHover ? "bg-[#E0D2FF]" : ""
      }`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleCardClick}
      initial={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-40 sm:h-48 md:h-56 lg:max-h-64 w-full overflow-hidden">
        <Image
          src={contributor.image}
          alt={contributor.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className={`${imageCover ? "object-cover" : "object-contain"}`}
          loading="lazy"
        />
        {showSpeakerHover && (
          <div className="absolute inset-0 flex flex-col justify-between items-center p-4 bg-[#E0D2FF]">
            <div className="w-full flex justify-center">
              <Pill>{contributor.name}</Pill>
            </div>
            <div className="mt-1 text-base font-normal text-black text-center">
              {contributor.company}
            </div>
            <div className="flex space-x-4 mt-2 mb-2">
              {contributor.twitter && (
                <a
                  href={contributor.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex  items-center justify-center size-[18px] rounded border border-black bg-white hover:bg-[#C0FAB2]"
                  onClick={(e) => handleSocialClick(e, contributor.twitter)}
                >
                  <span className="sr-only">Twitter</span>
                  {TwitterIcon}
                </a>
              )}
              {contributor.linkedin && (
                <a
                  href={contributor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex  items-center justify-center size-[18px] rounded border border-black bg-white hover:bg-[#C0FAB2]"
                  onClick={(e) => handleSocialClick(e, contributor.linkedin)}
                >
                  <span className="sr-only">LinkedIn</span>
                  {LinkedInIcon}
                </a>
              )}
            </div>
            {contributor.presentationTitle && (
              <div className="w-full text-center mt-auto mb-0">
                <span
                  className="block text-xl font-bold text-black"
                  style={{ wordBreak: "break-word" }}
                >
                  "{contributor.presentationTitle}"
                </span>
              </div>
            )}
          </div>
        )}
        {!showSpeakerHover && (
          <>
            <div
              className={`absolute inset-0 bg-[#D1BAFF66] transition-opacity duration-300 ${
                isHovered && !isMobile ? "opacity-80" : "opacity-0"
              }`}
            />
            {isHovered && !isMobile && (
              <motion.div
                initial={{ opacity: 0, x: 10, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 10, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4"
              >
                <Image
                  src={Arrow}
                  alt="Arrow"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </motion.div>
            )}
            {isHovered && !isMobile && isSpeaker && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-4 left-4 flex space-x-2"
              >
                {contributor.twitter && (
                  <div
                    className="bg-white p-1 rounded-full cursor-pointer"
                    onClick={(e) => handleSocialClick(e, contributor.twitter)}
                  >
                    <div className="text-black">{TwitterIcon}</div>
                  </div>
                )}
                {contributor.linkedin && (
                  <div
                    className="bg-white p-1 rounded-full cursor-pointer"
                    onClick={(e) => handleSocialClick(e, contributor.linkedin)}
                  >
                    <div className="text-black">{LinkedInIcon}</div>
                  </div>
                )}
              </motion.div>
            )}
          </>
        )}
        <BottomPillOrText
          contributor={contributor}
          isHovered={isHovered}
          isSpeaker={isSpeaker}
          showSpeakerHover={showSpeakerHover}
          isMobile={isMobile}
        />
      </div>
    </motion.div>
  );
};

export default Contributors;
