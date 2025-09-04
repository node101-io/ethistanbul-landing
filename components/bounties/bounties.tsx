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
import StarPatternColored from "@/assets/patterns/star_colored.svg";
import AptosLogo from "@/assets/sponsors/aptos";

type TabKey = "main" | "company";

interface BountyCardData {
  title: string;
  description: string;
  color: string; // background color for the bottom area
  subdescription?: string;
  pattern: 'flower' | 'plus' | 'star';
}

interface TrackData {
  title: string;
  description: string;
  price: string;
  logo: React.ComponentType<any>;
}

const TOTAL_BOUNTY_USD = 35000;

const formatUsdShort = (value: number) => {
  if (value >= 1_000_000) return `${Math.round(value / 100_000) / 10}M`;
  if (value >= 1_000) return `${Math.round(value / 100) / 10}K`;
  return `${value}`;
};

const BountyCard = ({ data, pattern }: { data: BountyCardData, pattern: 'flower' | 'plus' | 'star' }) => {
  return (
    <div
      className="w-[300px] sm:w-[340px] md:w-[440px] h-[420px] sm:h-[520px] md:h-[520px] flex-shrink-0 flex flex-col bg-[#F8F8F8] rounded-3xl border border-black overflow-hidden shadow-sm"
    >
      <div className="h-32 sm:h-36 md:h-48 relative border-b border-black/50 flex items-center justify-center overflow-hidden gap-2">
        {pattern === 'flower' ? <>
          <Image src={FlowerPattern} alt="Flower Pattern" width={200} height={200} className="" />
          <Image src={FlowerPattern} alt="Flower Pattern" width={200} height={200} className="" />
          <Image src={FlowerPattern} alt="Flower Pattern" width={200} height={200} className="" />
        </> : pattern === 'plus' ? <>
          <Image src={PlusPattern} alt="Plus Pattern" width={200} height={200} className="" />
          <Image src={PlusPattern} alt="Plus Pattern" width={200} height={200} className="" />
          <Image src={PlusPattern} alt="Plus Pattern" width={200} height={200} className="" />
        </> : <>
          <Image src={StarPatternColored} alt="Star Pattern" width={200} height={200} className="" />
          <Image src={StarPatternColored} alt="Star Pattern" width={200} height={200} className="" />
          <Image src={StarPatternColored} alt="Star Pattern" width={200} height={200} className="" />
        </>}
      </div>
      <div
        className="p-5 sm:p-6 md:p-7 flex-1"
        style={{ backgroundColor: data.color }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#1a1a2e] mb-2">
          {data.title}
        </h3>
        <p className="text-gray-800 leading-tight font-semibold text-lg max-sm:text-base mb-2 whitespace-pre-line">
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
      className="w-[300px] sm:w-[340px] md:w-[440px] h-[420px] sm:h-[520px] md:h-[520px] flex-shrink-0 flex flex-col bg-[#FAF7FF] rounded-3xl border border-black overflow-hidden shadow-sm"
    >
      <div className="h-32 sm:h-36 md:h-48 relative border-b border-black/50 flex items-center justify-center overflow-hidden gap-4 bg-[#CABAFF]">
        <Image src={StarPattern} alt="Star Pattern" width={28} height={28} />
        <Image src={StarPattern} alt="Star Pattern" width={28} height={28} />
        <Logo className="max-w-[50%] w-auto max-h-[50%] h-auto" fill="#121212" />
        <Image src={StarPattern} alt="Star Pattern" width={28} height={28} />
        <Image src={StarPattern} alt="Star Pattern" width={28} height={28} />
      </div>
      <div className="p-5 sm:p-6 md:p-7 text-[#121212] flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl sm:text-3xl font-semibold">{data.title}</h3>
          <div className="text-xl sm:text-3xl font-semibold shrink-0">${data.price}</div>
        </div>
        <p className="mt-4 text-gray-800 text-sm sm:text-base leading-tight mb-4 whitespace-pre-line">
          {data.description}
        </p>
        <a href="https://taikai.network/en/ethistanbul/hackathons/ethistanbul-2025/prizes" target="_blank" rel="noopener noreferrer" className="text-right text-sm sm:text-base opacity-70 font-medium mt-auto hover:text-[#7C3AED]">
          Bounty Details
        </a>
      </div>
    </div>
  );
};

const Bounties = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("main");

  const mainTrackCards: BountyCardData[] = [
    {
      title: "Real Blockchain Use Cases",
      description: `Use any blockchain technology to make a difference in the real world. Put blockchain into anything, show the world the future.

🏆 1st Place: $3,500
🥈 2nd Place: $2,000
🥉 3rd Place: $1,000
`,
      subdescription: "In order to qualify to this track, you should be solving an actual real world problem using decentralization. UI is not a must, but recommended.",
      color: "#D7C3FF",
      pattern: "flower",
    },
    {
      title: "Blockchain + AI = ?",
      description: `21th century is huge, not because of one reason, but two. Use blockchain and AI together to discover the new frontier.

🏆 1st Place: $3,500
🥈 2nd Place: $2,000
🥉 3rd Place: $1,000
`,
      subdescription: "In this track, the only condition is to use AI and blockchain together in the same product. There is no other limits, but your imagination.",
      color: "#FFB499",
      pattern: "plus",
    },
    {
      title: "10 Years of Ethereum",
      description: `Ethereum has turned 10 this year, and we are celebrating it in the best way we know: backing builders.

🏆 1st Place: $1,500
`,
      subdescription: "The 10 Years of Ethereum Track is open to all Ethereum projects in the hackathon. No limits, no minimums; just bring something meaningful to the ecosystem.",
      color: "#C0FAB2",
      pattern: "star",
    }
  ];

  const companyBountyPlaceholders: TrackData[] = [
    {
      title: "RISE Chain",
      description: `RISE is a high speed Ethereum Layer 2 blockchain built for mass adoption. It enables near-instant transactions at scale with as low as sub-5ms latency, while upholding Ethereum’s core principle of decentralization.

🏆 DeFi 3.0 Track: $6,000
🏆 Open Track: $3,000
🏆 Community Favorite: $1,000
`,
      price: "10.000",
      logo: RiseLogo,
    },
    {
      title: "Yellow",
      description: `Yellow is a global Web3 ecosystem of products and services, building the infrastructure that lets developers create apps with Web2 speed and Web3 trust.

🏆 1st place: $2,000
🥈 2nd place: $1,500
🥉 3rd place: $1000
💡 Protocol / Documentation Contribution: $500
`,
      price: "5.000",
      logo: YellowLogo,
    },
    {
      title: "Aptos",
      description: `Aptos delivers parallel execution, sub-second finality, and low fees at scale, providing infrastructure that works for both developers and users.

🏆 1st Place: $1,500
🥈 2nd Place: $1,000
🥉 3rd Place: $500
`,
      price: "3.000",
      logo: AptosLogo,
    },
    {
      title: "Citrea",
      description: `Bitcoin's First ZK Rollup. Citrea is the first rollup that enhances the capabilities of Bitcoin blockspace with zero-knowledge technology, making it possible to build everything on Bitcoin.

TBA
`,
      price: "2.500",
      logo: CitreaLogo,
    },
  ]

  const short = formatUsdShort(TOTAL_BOUNTY_USD);

  return (
    <section id="bounties" className="pt-16 pb-20 md:pt-24 md:pb-32 justify-center bg-white px-4 sm:px-6">
      <div className="max-w-7xl py-6 mx-auto bg-[#FAFAFA] rounded-3xl w-full border border-[#121212]">
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
            <div className="text-2xl md:text-3xl">USD<a href="https://taikai.network/ethistanbul/hackathons/ethistanbul-2025" className="ml-2 text-base font-semibold hover:text-[#7C3AED]">details</a></div>
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
                ? "bg-[#121212] text-[#F8F8F8]"
                : "bg-[#F8F8F8] text-[#121212] hover:scale-102 active:scale-97"
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
              ? "bg-[#121212] text-[#F8F8F8]"
              : "bg-[#F8F8F8] text-[#121212] hover:scale-102 active:scale-97"
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
          You can apply every track and company bounty.
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


