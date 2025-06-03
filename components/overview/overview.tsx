"use client";

import React, { useState } from "react";
import ConferenceImage from "@/assets/conference_image.webp";
import HackathonImage from "@/assets/hackathon_image.webp";
import SectionSwitcher from "./SectionSwitcher";
import AnimatedHeading from "./AnimatedHeading";
import PlanYourWeek from "./PlanYourWeek";
import TechTicker from "./TechTicker";

const Overview = () => {
  const [selectedSection, setSelectedSection] = useState<
    "Conference" | "Hackathon"
  >("Conference");
  const memoizedTechTicker = React.useMemo(() => <TechTicker />, []);

  return (
    <section className="pt-10 bg-white sm:pt-16 md:pt-44 overflow-hidden rounded-t-4xl">
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

      <PlanYourWeek />
    </section>
  );
};

export default Overview;
