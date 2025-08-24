"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { qa, QASection } from "@/lib/qa/qa";

type Category = QASection["title"];

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState<Category>(qa[0].title);

    const initialActiveQuestions = qa.reduce((acc, section) => {
        if (section.items.length > 0) {
            acc[section.items[0].question] = true;
        }
        return acc;
    }, {} as Record<string, boolean>);

    const [activeQuestions, setActiveQuestions] = useState<
        Record<string, boolean>
    >(initialActiveQuestions);

    const toggleQuestion = (question: string) => {
        setActiveQuestions((prev) => ({
            ...prev,
            [question]: !prev[question],
        }));
    };

    const renderTextWithLinks = (text: string) => {
        const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = markdownLinkRegex.exec(text)) !== null) {
            // Add text before the link
            if (match.index > lastIndex) {
                parts.push(text.substring(lastIndex, match.index));
            }

            // Add the link component
            const linkText = match[1];
            const url = match[2];

            if (url.startsWith("http")) {
                parts.push(
                    <a
                        key={parts.length}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-600 transition-colors duration-300 underline"
                    >
                        {linkText}
                    </a>
                );
            }

            lastIndex = markdownLinkRegex.lastIndex;
        }

        // Add remaining text after the last link
        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
        }

        return parts.length > 0 ? parts : text;
    };

    const categories: Category[] = qa.map((section) => section.title);

    const questionsData: Record<Category, FAQItem[]> = qa.reduce(
        (acc, section) => {
            acc[section.title] = section.items;
            return acc;
        },
        {} as Record<Category, FAQItem[]>
    );

    return (
        <section id="faq" className="min-h-screen pt-24 pb-32 bg-[#D1BAFF]">
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
                                    className={`text-left text-lg   transition-colors duration-300 ${
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
                                {questionsData[activeCategory].map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className="border-b border-[#7C7786]"
                                        >
                                            <button
                                                onClick={() =>
                                                    toggleQuestion(
                                                        item.question
                                                    )
                                                }
                                                className="w-full flex justify-between   items-center py-6 text-left focus:outline-none"
                                            >
                                                <h3 className="text-xl font-medium text-[#1a1a2e]">
                                                    {item.question}
                                                </h3>
                                                <span className="text-2xl">
                                                    {activeQuestions[
                                                        item.question
                                                    ]
                                                        ? "−"
                                                        : "+"}
                                                </span>
                                            </button>

                                            <AnimatePresence>
                                                {activeQuestions[
                                                    item.question
                                                ] && (
                                                    <motion.div
                                                        initial={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            opacity: 1,
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.3,
                                                        }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="pb-6 text-gray-700">
                                                            {item.answer
                                                                .split("\n")
                                                                .map(
                                                                    (
                                                                        line,
                                                                        i
                                                                    ) => (
                                                                        <React.Fragment
                                                                            key={
                                                                                i
                                                                            }
                                                                        >
                                                                            {renderTextWithLinks(
                                                                                line
                                                                            )}
                                                                            {i <
                                                                                item.answer.split(
                                                                                    "\n"
                                                                                )
                                                                                    .length -
                                                                                    1 && (
                                                                                <br />
                                                                            )}
                                                                        </React.Fragment>
                                                                    )
                                                                )}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
