"use client";

import React, { useState } from "react";
import Image from "next/image";
import ConferenceImage from "@/assets/conference_image.webp";
import HackathonImage from "@/assets/hackathon_image.webp";
import IstanbulGuideImage from "@/assets/istanbul_bridge.webp";
import BuildersWeekImage from "@/assets/bwi.webp";
import LiquidButton from "../ui/liquid-button";
import SectionSwitcher from "./SectionSwitcher";
import AnimatedHeading from "./AnimatedHeading";

const LeftStar = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={179}
    height={237}
    viewBox="0 0 179 237"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M60.3548 1.77511C60.4431 0.494623 61.5569 0.494623 61.6451 1.77511C63.4827 28.4367 69.7554 68.6651 90.3237 89.2334C110.892 109.802 151.12 116.074 177.782 117.912C179.062 118 179.062 119.114 177.782 119.202C151.12 121.04 110.892 127.312 90.3237 147.881C69.7554 168.449 63.4827 208.678 61.6451 235.339C61.5569 236.62 60.4431 236.62 60.3548 235.339C58.5173 208.678 52.2446 168.449 31.6763 147.881C11.1079 127.312 -29.1205 121.04 -55.782 119.202C-57.0625 119.114 -57.0625 118 -55.782 117.912C-29.1205 116.074 11.1079 109.802 31.6763 89.2334C52.2446 68.6651 58.5173 28.4367 60.3548 1.77511Z"
      fill="#C0FAB2"
    />
  </svg>
);
const RightStar = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={179}
    height={237}
    viewBox="0 0 179 237"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M117.355 1.77511C117.443 0.494623 118.557 0.494623 118.645 1.77511C120.483 28.4367 126.755 68.6651 147.324 89.2334C167.892 109.802 208.12 116.074 234.782 117.912C236.062 118 236.062 119.114 234.782 119.202C208.12 121.04 167.892 127.312 147.324 147.881C126.755 168.449 120.483 208.678 118.645 235.339C118.557 236.62 117.443 236.62 117.355 235.339C115.517 208.678 109.245 168.449 88.6763 147.881C68.1079 127.312 27.8795 121.04 1.21798 119.202C-0.0625057 119.114 -0.0625057 118 1.21798 117.912C27.8795 116.074 68.1079 109.802 88.6763 89.2334C109.245 68.6651 115.517 28.4367 117.355 1.77511Z"
      fill="#C0FAB2"
    />
  </svg>
);

const TechTicker = React.memo(() => {
  const techKeywords = [
    "Edge Proofs",
    "DeFi",
    "Crypto Consumer UX",
    "L2s",
    "Interoperability",
    "Public Goods",
    "Privacy & Security",
    "TEEs",
    "Data Availability",
    "Self Sovereign Identity",
    "DevTooling",
    "AI Agents",
    "Zero Knowledge Proofs",
  ];

  return (
    <div className="w-full mt-10 sm:mt-16 md:mt-20 py-2 overflow-hidden bg-[#c0fab2]">
      <div className="ticker-container">
        <div className="ticker-track">
          <div className="ticker-content">
            {techKeywords.map((keyword, index) => (
              <span
                key={`original-${index}`}
                className="ticker-item"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="ticker-content">
            {techKeywords.map((keyword, index) => (
              <span
                key={`duplicate-${index}`}
                className="ticker-item"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const Overview = () => {
  const [selectedSection, setSelectedSection] = useState<
    "Conference" | "Hackathon"
  >("Conference");
  const memoizedTechTicker = React.useMemo(() => <TechTicker />, []);

  return (
    <section className="pt-28 bg-white sm:pt-16 md:pt-44 overflow-hidden rounded-t-4xl">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6">
        <AnimatedHeading />
        <SectionSwitcher
          selectedSection={selectedSection}
          onSectionChange={setSelectedSection}
          conferenceImage={ConferenceImage}
          hackathonImage={HackathonImage}
        />
      </div>

      <div className="w-full mt-10 sm:mt-16 md:mt-20 py-2 overflow-hidden">
        {memoizedTechTicker}
      </div>

      <div className="relative pt-20 pb-20 bg-white overflow-hidden">
        <div className="absolute left-0 top-0 hidden sm:block">
          <LeftStar />
        </div>
        <div className="absolute left-0 bottom-0 hidden sm:block">
          <LeftStar />
        </div>

        <div className="absolute right-0 top-0 hidden sm:block">
          <RightStar />
        </div>
        <div className="absolute right-0 bottom-0 hidden sm:block">
          <RightStar />
        </div>

        <div className="max-w-7xl container mx-auto px-4 sm:px-6 relative z-10 flex flex-col justify-center items-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              PLAN YOUR WEEK!
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-12">
              Builders Week Istanbul is happening from September 1 to 7.
              Discover all the events and explore the city where everything
              meets harmony.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 justify-center max-w-4xl">
            <div className="relative group rounded-4xl border border-black overflow-hidden max-w-md mx-auto">
              <Image
                src={IstanbulGuideImage}
                alt="Istanbul Bridge"
                width={420}
                height={250}
                className="w-[420px] h-[250px] object-cover"
              />
              <div className="absolute top-6 right-6">
                <LiquidButton
                  className="bg-purple-200 text-purple-900 px-6 pb-2 pt-1 border-1 border-black rounded-full flex items-center gap-2 hover:bg-purple-300 transition-all cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof window !== "undefined") {
                      window.open("/istanbul-guide", "_blank");
                    }
                  }}
                >
                  Istanbul Guide
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </LiquidButton>
              </div>
            </div>

            <div className="relative group rounded-4xl border border-black overflow-hidden max-w-md mx-auto">
              <Image
                src={BuildersWeekImage}
                alt="Builders Week"
                width={420}
                height={250}
                className="w-[420px] h-[250px] object-cover"
              />
              <div className="absolute top-6 right-6">
                <LiquidButton
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof window !== "undefined") {
                      window.open("https://buildersweekistanbul.com", "_blank");
                    }
                  }}
                  className="bg-green-200 text-green-900 px-6 pb-2 pt-1 border-1 border-black rounded-full flex items-center gap-2 hover:bg-green-300 transition-all cursor-pointer"
                >
                  Builders Week Istanbul
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </LiquidButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
