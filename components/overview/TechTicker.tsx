import React from "react";

const TechTicker = () => {
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
    <div className="w-full py-2 overflow-hidden bg-[#c0fab2]">
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
};

export default TechTicker;
