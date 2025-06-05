import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import LiquidButton from "../ui/liquid-button";

type Section = "Conference" | "Hackathon";

interface SectionSwitcherProps {
  selectedSection: Section;
  onSectionChange: (section: Section) => void;
  conferenceImage: any;
  hackathonImage: any;
}

const SectionSwitcher: React.FC<SectionSwitcherProps> = ({
  selectedSection,
  onSectionChange,
  conferenceImage,
  hackathonImage,
}) => {
  const contentVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 20 : -20,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { duration: 0.25, ease: "linear" },
        x: { duration: 0.2, ease: "easeOut" },
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 20 : -20,
      transition: {
        opacity: { duration: 0.2, ease: "linear" },
        x: { duration: 0.2, ease: "easeIn" },
      },
    }),
  };

  return (
    <div className="relative">
      <div className="flex flex-row text-center justify-center items-center gap-4 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
        <LiquidButton
          isActive={selectedSection === "Conference"}
          onClick={() => onSectionChange("Conference")}
          className="border border-black text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl relative z-10"
        >
          Conference
        </LiquidButton>
        <LiquidButton
          isActive={selectedSection === "Hackathon"}
          onClick={() => onSectionChange("Hackathon")}
          className="border border-black text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl relative z-10"
        >
          Hackathon
        </LiquidButton>
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence
          mode="wait"
          custom={selectedSection === "Conference" ? -1 : 1}
        >
          <motion.div
            key={selectedSection}
            className="absolute inset-0"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={selectedSection === "Conference" ? -1 : 1}
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              <div className="rounded-4xl border border-black overflow-hidden">
                <Image
                  src={
                    selectedSection === "Conference"
                      ? conferenceImage
                      : hackathonImage
                  }
                  alt={selectedSection}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-start pt-2 md:pt-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4">
                  {selectedSection === "Conference"
                    ? "ETHIstanbul is a conference connecting you with global talents, industry professionals, and web3 companies advancing technology."
                    : "ETHIstanbul is a hackathon where you can turn your blockchain product ideas into reality alongside like-minded builders."}
                </h3>

                <div className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {selectedSection === "Conference" ? (
                    <p className="mb-4 sm:mb-6">Friday, September 5</p>
                  ) : (
                    <p className="mb-4 sm:mb-6">
                      Saturday & Sunday, September 6-7
                    </p>
                  )}
                </div>

                {selectedSection === "Conference" ? (
                  <div className="grid grid-cols-3 text-sm sm:text-base md:text-lg lg:text-2xl gap-2 sm:gap-4 text-start">
                    <div>
                      <p>Attendees</p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">
                        +
                        <CountUp
                          end={800}
                          duration={1}
                        />
                      </p>
                    </div>
                    <div>
                      <p>Protocols</p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">
                        +
                        <CountUp
                          end={101}
                          duration={1}
                        />
                      </p>
                    </div>
                    <div>
                      <p>Workshops</p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">
                        +
                        <CountUp
                          end={10}
                          duration={1}
                        />
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-base sm:text-lg">Available in prizes</p>
                    <p className="text-xl sm:text-2xl md:text-3xl text-purple-600 font-bold">
                      TBA
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionSwitcher;
