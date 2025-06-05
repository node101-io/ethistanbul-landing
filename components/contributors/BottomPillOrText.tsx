import { Contributor } from "./types";
import Pill from "./Pill";
import { AnimatePresence, motion } from "framer-motion";

const BottomPillOrText = ({
  contributor,
  isHovered,
  isSpeaker,
  showSpeakerHover,
}: {
  contributor: Contributor;
  isHovered: boolean;
  isSpeaker: boolean;
  showSpeakerHover: boolean;
}) => {
  if (showSpeakerHover && isSpeaker) return null;
  return (
    <div className="absolute bottom-2 sm:bottom-4 left-2 right-2 sm:left-4 sm:right-4 md:left-6 md:right-6 pb-1 text-center">
      <div className="md:hidden flex justify-center">
        <div className="bg-white border border-black rounded-full text-xs sm:text-sm md:text-base text-black font-medium px-2 py-1">
          {contributor.name}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={
            isHovered
              ? contributor.type === "Speakers"
                ? "presentation"
                : "company"
              : "name"
          }
          className="md:flex hidden justify-center"
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
    </div>
  );
};

export default BottomPillOrText;
