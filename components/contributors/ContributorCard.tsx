import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import BottomPillOrText from "./BottomPillOrText";
import { Contributor } from "./types";
import Pill from "./Pill";

const ArrowIcon = (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="18.0732"
      cy="18.2286"
      r="17.1343"
      fill="#FAF7FF"
      stroke="black"
    />
    <path
      d="M13.6029 21.6165L22.5074 14.793M14.047 12.0726L21.2069 13.0959L23.6996 16.3488L22.97 23.717"
      stroke="#2B0025"
    />
  </svg>
);

const ContributorCard = ({
  contributor,
  onClick,
  isMobile,
}: {
  contributor: Contributor;
  onClick: () => void;
  isMobile: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

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

  const blurDataURL =
    "data:image/svg+xml;base64," +
    btoa(
      `<svg width="256" height="256" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#E0D2FF" /></svg>`
    );

  return (
    <motion.div
      className={`rounded-4xl overflow-hidden border border-black ${
        showSpeakerHover ? "bg-[#E0D2FF]" : ""
      }`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleCardClick}
      initial={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-40 sm:h-48 md:h-56 lg:max-h-64 w-full overflow-hidden">
        {!imgLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-200 animate-pulse">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <Image
          src={contributor.image}
          alt={contributor.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className={`object-cover transition-opacity duration-500 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          placeholder="blur"
          blurDataURL={blurDataURL}
          onLoad={() => setImgLoaded(true)}
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
                  className="inline-flex items-center justify-center size-[18px] rounded border border-black bg-white hover:bg-[#C0FAB2]"
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
                  className="inline-flex items-center justify-center size-[18px] rounded border border-black bg-white hover:bg-[#C0FAB2]"
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
              <motion.a
                href={contributor.twitter || ""}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.07 }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 arrow-animate"
              >
                {ArrowIcon}
              </motion.a>
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
                    className="bg-white p-1 rounded-full"
                    onClick={(e) => handleSocialClick(e, contributor.twitter)}
                  >
                    <div className="text-black">{TwitterIcon}</div>
                  </div>
                )}
                {contributor.linkedin && (
                  <div
                    className="bg-white p-1 rounded-full"
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
        />
      </div>
    </motion.div>
  );
};

export default ContributorCard;
