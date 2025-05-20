"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category =
  | "Event Details"
  | "Participation & Application"
  | "Costs & Benefits"
  | "Experience & Networking"
  | "Partnerships";
interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Event Details");
  const [activeQuestions, setActiveQuestions] = useState<
    Record<string, boolean>
  >({
    "Who can participate?": true,
  });

  const toggleQuestion = (question: string) => {
    setActiveQuestions((prev) => ({ ...prev, [question]: !prev[question] }));
  };

  const categories: Category[] = [
    "Event Details",
    "Participation & Application",
    "Costs & Benefits",
    "Experience & Networking",
    "Partnerships",
  ];

  const questionsData: Record<Category, FAQItem[]> = {
    "Event Details": [
      {
        question: "When and where is ETHistanbul taking place?",
        answer:
          "ETHistanbul will take place between Sep 5-7 at XXX in Istanbul. The conference will be held on the 5th of September; the rest is the hackathon. Make sure to arrive early to secure your spot!",
      },
      {
        question: "What is ETHistanbul?",
        answer:
          "ETHistanbul is a hackathon and conference focused on Ethereum and the broader blockchain ecosystem. It’s a space where builders, developers, and innovators come together to create, collaborate, and push the boundaries of decentralized tech.",
      },
    ],
    "Participation & Application": [
      {
        question: "Who can participate?",
        answer:
          "Anyone passionate about blockchain! Whether you’re a developer, designer, or just curious about Ethereum, you’re welcome to apply. No prior experience? No problem, you’ll find plenty of support from mentors and fellow hackers.",
      },
      {
        question: "How can I apply to participate?",
        answer:
          "You can apply to participate by filling out the application form on our website. We review applications on a rolling basis, so be sure to submit early to increase your chances of acceptance.",
      },
      {
        question: "Can I apply as a team?",
        answer:
          "Absolutely! You can apply solo or as a team. If you don’t have a team, don’t worry—we’ll have a team formation session at the start of the hackathon.",
      },
    ],
    "Costs & Benefits": [
      {
        question: "How much does it cost to attend?",
        answer:
          "ETHistanbul is 100% free for accepted participants. We’ve got you covered with meals, Wi-Fi, and even some cool swag!",
      },
      {
        question: "Are there prizes?",
        answer:
          "Yes! We’ll have multiple prize tracks sponsored by leading protocols and projects. Prizes will be announced closer to the event.",
      },
      {
        question: "Will travel and accommodation be covered?",
        answer:
          "We have a limited number of travel and accommodation grants available. Check the application form for more details on how to apply for a grant.",
      },
      {
        question: "Will food and drinks be provided?",
        answer:
          "Yes! We’ll provide food, drinks, and snacks throughout the event to keep you energized and focused.",
      },
      {
        question: "Do I need to bring my own equipment?",
        answer:
          "Yes, please bring your own laptop and any equipment you need for hacking. We’ll have Wi-Fi and power outlets available, but make sure your devices are fully charged!",
      },
    ],
    "Experience & Networking": [
      {
        question: "Can I attend just as a spectator?",
        answer:
          "ETHistanbul is primarily for builders and participants. However, the demo day and final presentations will be open to the public, stay tuned for more details!",
      },
      {
        question: "Can I work on my project after hours?",
        answer:
          "Absolutely! ETHistanbul is a 48-hour hackathon, so you’re welcome to work on your project at any time. Just remember to rest and recharge when you can!",
      },
      {
        question: "Will there be networking opportunities?",
        answer:
          "Yes, ETHistanbul is a fantastic opportunity to meet fellow developers, entrepreneurs, and industry leaders. We’ll have dedicated networking sessions throughout the event to help you connect.",
      },
    ],
    Partnerships: [
      {
        question: "How can I become a partner?",
        answer:
          "We’d love to have you on board! Reach out to us via this form for partnership opportunities.",
      },
    ],
  };

  return (
    <section
      id="faq"
      className="min-h-screen pt-24 pb-32 bg-[#D1BAFF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <h2 className="text-8xl sm:text-9xl font-bold mb-10 text-[#1a1a2e]">
            FAQ
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex flex-col space-y-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-left text-lg cursor-pointer transition-colors duration-300 ${
                    activeCategory === category
                      ? "text-black font-bold"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {questionsData[activeCategory].map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-[#7C7786]"
                  >
                    <button
                      onClick={() => toggleQuestion(item.question)}
                      className="w-full flex justify-between cursor-pointer items-center py-6 text-left focus:outline-none"
                    >
                      <h3 className="text-xl font-medium text-[#1a1a2e]">
                        {item.question}
                      </h3>
                      <span className="text-2xl">
                        {activeQuestions[item.question] ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence>
                      {activeQuestions[item.question] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-gray-700">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
