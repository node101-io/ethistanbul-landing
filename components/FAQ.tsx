"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category =
  | "Event Details"
  | "Participation & Application"
  | "Costs & Benefits"
  | "Experience & Networking";
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
  ];

  const questionsData: Record<Category, FAQItem[]> = {
    "Event Details": [
      {
        question: "When and where is ETHistanbul taking place?",
        answer:
          "Anyone passionate about blockchain! Whether you’re a developer, designer, or just curious about Ethereum, you’re welcome to apply. No prior experience? No problem, you’ll find plenty of support from mentors and fellow hackers.",
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
          "Anyone passionate about blockchain! Whether you’re a developer, designer, or just curious about Ethereum, you’re welcome to apply. No prior experience? No problem, you’ll find plenty of support from mentors and fellow hackers.",
      },
      {
        question: "Can I apply as a team?",
        answer:
          "Anyone passionate about blockchain! Whether you’re a developer, designer, or just curious about Ethereum, you’re welcome to apply. No prior experience? No problem, you’ll find plenty of support from mentors and fellow hackers.",
      },
    ],
    "Costs & Benefits": [
      {
        question: "How much does it cost to attend?",
        answer:
          "Anyone passionate about blockchain! Whether you’re a developer, designer, or just curious about Ethereum, you’re welcome to apply. No prior experience? No problem, you’ll find plenty of support from mentors and fellow hackers.",
      },
    ],
    "Experience & Networking": [
      {
        question: "Can I attend just as a spectator?",
        answer:
          "Anyone passionate about blockchain! Whether you’re a developer, designer, or just curious about Ethereum, you’re welcome to apply. No prior experience? No problem, you’ll find plenty of support from mentors and fellow hackers.",
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
