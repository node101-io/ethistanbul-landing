"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import FlowerPattern from "@/assets/patterns/flower.svg";
import PlusPattern from "@/assets/patterns/plus.svg";
import Image from "next/image";
import RiseLogo from "@/assets/sponsors/rise";
import YellowLogo from "@/assets/sponsors/yellow";
import CitreaLogo from "@/assets/sponsors/citrea";
import StarPattern from "@/assets/patterns/star.svg";

type TabKey = "main" | "company";

interface BountyCardData {
  title: string;
  description: string;
  color: string; // background color for the bottom area
  subdescription?: string;
  pattern: 'flower' | 'plus';
}

interface TrackData {
  title: string;
  description: string;
  price: string;
  logo: React.ComponentType<any>;
}

const TOTAL_BOUNTY_USD = 25000;

const formatUsdShort = (value: number) => {
  if (value >= 1_000_000) return `${Math.round(value / 100_000) / 10}M`;
  if (value >= 1_000) return `${Math.round(value / 100) / 10}K`;
  return `${value}`;
};

const BountyCard = ({ data, pattern }: { data: BountyCardData, pattern: 'flower' | 'plus' }) => {
  return (
    <div
      className="w-[300px] sm:w-[340px] md:w-[440px] flex-shrink-0 bg-white rounded-3xl border border-black overflow-hidden shadow-sm"
    >
      <div className="h-40 sm:h-44 md:h-54 relative border-b border-black/50 flex items-center justify-center overflow-hidden gap-2">
        {pattern === 'flower' ? <>
          <Image src={FlowerPattern} alt="Flower Pattern" width={200} height={200} className="" />
          <Image src={FlowerPattern} alt="Flower Pattern" width={200} height={200} className="" />
          <Image src={FlowerPattern} alt="Flower Pattern" width={200} height={200} className="" />
        </> : <>
          <Image src={PlusPattern} alt="Plus Pattern" width={200} height={200} className="" />
          <Image src={PlusPattern} alt="Plus Pattern" width={200} height={200} className="" />
          <Image src={PlusPattern} alt="Plus Pattern" width={200} height={200} className="" />
        </>}
      </div>
      <div
        className="p-5 sm:p-6 md:p-7 h-full"
        style={{ backgroundColor: data.color }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#1a1a2e] mb-2">
          {data.title}
        </h3>
        <p className="text-gray-800 leading-tight font-semibold text-xl max-sm:text-base mb-2">
          {data.description}
        </p>
        <p className="text-gray-800 leading-tight font-normal text-base max-sm:text-sm">
          {data.subdescription}
        </p>
      </div>
    </div>
  );
};

const TrackCard = ({ data }: { data: TrackData }) => {
  const Logo = data.logo;
  return (
    <div
      className="w-[300px] sm:w-[340px] md:w-[440px] flex-shrink-0 flex flex-col bg-[#FAF7FF] rounded-3xl border border-black overflow-hidden shadow-sm"
    >
      <div className="h-40 sm:h-44 md:h-48 relative border-b border-black/50 flex items-center justify-center overflow-hidden gap-4 bg-[#CABAFF]">
        <Image src={StarPattern} alt="Star Pattern" width={28} height={28} />
        <Image src={StarPattern} alt="Star Pattern" width={28} height={28} />
        <Logo className="max-w-[50%] w-auto max-h-[50%] h-auto" fill="#121212" />
        <Image src={StarPattern} alt="Star Pattern" width={28} height={28} />
        <Image src={StarPattern} alt="Star Pattern" width={28} height={28} />
      </div>
      <div className="p-5 sm:p-6 md:p-7 text-[#121212] flex flex-col flex-1">
        <div className="flex items-start justify-between gap-6">
          <h3 className="text-xl sm:text-3xl font-semibold">{data.title}</h3>
          <div className="text-xl sm:text-3xl font-semibold shrink-0">${data.price}</div>
        </div>
        <p className="mt-4 text-gray-800 text-base sm:text-lg leading-tight mb-4">
          {data.description}
        </p>
        <div className="text-right text-sm sm:text-base opacity-70 font-medium mt-auto">
          Bounty Details TBA
        </div>
      </div>
    </div>
  );
};

const Bounties = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("main");

  const mainTrackCards: BountyCardData[] = [
    {
      title: "Real Blockchain Use Cases",
      description: "Use any blockchain technology to make a difference in the real world. Put blockchain into anything, show the world the future.",
      subdescription: "In order to qualify to this track, you should be solving an actual real world problem using decentralization. UI is not a must, but recommended.",
      color: "#D7C3FF",
      pattern: "flower",
    },
    {
      title: "Blockchain + AI = ?",
      description: "21th century is huge, not because of one reason, but two. Use blockchain and AI together to discover the new frontier.",
      subdescription: "In this track, the only condition is to use AI and blockchain together in the same product. There is no other limits, but your imagination.",
      color: "#FFB499",
      pattern: "plus",
    },
  ];

  const companyBountyPlaceholders: TrackData[] = [
    {
      title: "RISE Chain",
      description: "RISE is a next-generation Ethereum Layer 2 blockchain redefining performance with infinite speed delivering instant transaction confirmation at unprecedented scale, while upholding Ethereum's core principle of decentralization. Its unique architecture enables 5 ms latency, making it the fastest blockchain. RISE is also on course to exceed 100,000 TPS throughput capacity, enabling it to support millions of users simultaneously.",
      price: "6.000",
      logo: RiseLogo,
    },
    {
      title: "Yellow",
      description: "Yellow Network solves the problem of genuinely decentralized trading by allowing participants to swap assets across different exchanges without having to rely on block creation. This brings all parties, exchanges, blockchains, and trading firms together, creating a network of brokerages and allowing for a more efficient trading infrastructure.",
      price: "6.000",
      logo: YellowLogo,
    },
    {
      title: "Citrea",
      description: "Bitcoin's First ZK Rollup. Citrea is the first rollup that enhances the capabilities of Bitcoin blockspace with zero-knowledge technology, making it possible to build everything on Bitcoin.",
      price: "2.500",
      logo: CitreaLogo,
    },
  ]

  const short = formatUsdShort(TOTAL_BOUNTY_USD);

  return (
    <section id="bounties" className="pt-16 pb-20 md:pt-24 md:pb-32 justify-center bg-white px-4 sm:px-6">
      <div className="max-w-7xl py-6 mx-auto bg-[#EFEFEF] rounded-3xl w-full border border-[#121212]">
        <div className="flex items-start justify-between gap-4 text-[#121212] px-4 sm:px-6 max-sm:flex-col">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-none">
              ETHISTANBUL HACKATHON DISTRIBUTES A TOTAL OF
            </h2>
            <p className="mt-3 text-2xl font-semibold uppercase hidden sm:block">
              in bounties across three different tracks
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-right shrink-0 flex flex-col gap-4 sm:gap-10 text-[#121212] max-sm:text-left"
            aria-label={`Total bounties ${TOTAL_BOUNTY_USD} US Dollars`}
          >
            <div className="text-8xl lg:text-[200px] font-bold leading-[0.5]">{short}</div>
            <div className="text-2xl md:text-3xl">USD</div>
          </motion.div>
          <p className="text-base font-semibold uppercase block sm:hidden">
            in bounties across three different tracks
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-30 flex items-center gap-4 px-4 sm:px-6 max-sm:mt-10">
          <button
            onClick={() => setActiveTab("main")}
            className={`px-5 pt-1 pb-2 rounded-full border border-[#121212] transition-all duration-200 ${activeTab === "main"
                ? "bg-[#121212] text-white"
                : "bg-white text-[#121212] hover:scale-102 active:scale-97"
              }`}
            aria-selected={activeTab === "main"}
            aria-controls="bounties-main"
            role="tab"
          >
            Main Track Bounties
          </button>
          <button
            onClick={() => setActiveTab("company")}
            className={`px-5 pt-1 pb-2 rounded-full border border-[#121212] transition-all duration-200 ${activeTab === "company"
              ? "bg-[#121212] text-white"
              : "bg-white text-[#121212] hover:scale-102 active:scale-97"
            }`}
            aria-selected={activeTab === "company"}
            aria-controls="bounties-company"
            role="tab"
          >
            Company Bounties
          </button>
        </div>

        {/* Note */}
        <p className="mt-6 text-right text-[#121212] text-xl font-semibold px-4 sm:px-6 max-sm:hidden">
          You can apply every track and company bounties.
        </p>

        {/* Content */}
        <div className="my-8" role="tabpanel" id={activeTab === "main" ? "bounties-main" : "bounties-company"}>
          {activeTab === "main" ? (
            <>
              {/* Horizontal scroll on mobile */}
              <div className="overflow-x-auto noscrollbar px-4 sm:px-6">
                <div className="flex gap-4 w-fit">
                  {mainTrackCards.map((c, i) => (
                    <BountyCard key={i} data={c} pattern={c.pattern} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="overflow-x-auto noscrollbar px-4 sm:px-6">
                <div className="flex gap-4 w-fit">
                  {companyBountyPlaceholders.map((c, i) => (
                    <TrackCard key={i} data={c} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-[#121212] text-sm px-4 sm:px-6 sm:hidden">
          You can apply every track and company bounties.
        </p>
      </div>
    </section>
  );
};

export default Bounties;


