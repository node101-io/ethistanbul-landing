"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import scheduleData from "@/lib/schedule/schedule";
import DesktopScheduleTable from "./DesktopScheduleTable";
import MobileScheduleTable from "./MobileScheduleTable";

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState<number>(0);

    // Sync selected day with URL hash for hackathon/conference anchors
    useEffect(() => {
        if (typeof window === "undefined") return;

        const hashToDayIndex: Record<string, number> = {
            "#schedule-conference": 0,
            "#schedule-hack1stday": 1,
            "#schedule-hack2ndday": 2,
        };

        const applyHash = () => {
            const { hash } = window.location;
            if (!hash) return;
            const index = hashToDayIndex[hash];
            if (typeof index === "number") {
                setSelectedDay(index);
                const section = document.getElementById("schedule-conference");
                if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        };

        // Apply on mount (e.g., direct link) and on hash changes
        applyHash();
        window.addEventListener("hashchange", applyHash);
        return () => window.removeEventListener("hashchange", applyHash);
    }, []);

    const handleDaySelect = (index: number) => {
        setSelectedDay(index);
        if (typeof window !== "undefined") {
            const hashes = [
                "#schedule-conference",
                "#schedule-hack1stday",
                "#schedule-hack2ndday",
            ];
            const newHash = hashes[index] ?? "#schedule-conference";
            if (window.location.hash !== newHash) {
                window.history.replaceState(null, "", newHash);
            }
        }
    };

    return (
        <section id="schedule-conference" className="pt-16 pb-20 md:pt-24 md:pb-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-25 mb-15"
                >
                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1a1a2e]">
                        Schedule
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-600">
                        September 5-7, 2025 • Timezone: Istanbul (GMT+3)
                    </p>
                </motion.div>

                {/* Combined Day Selector and Schedule Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white border border-black border-b-0 border-t-0 overflow-hidden rounded-2xl"
                >
                    {/* Day Selector - Top part with rounded top corners */}
                    <div
                        className="bg-gray-100 rounded-t-2xl border-none"
                    >
                        {/* Desktop Day Selector */}
                        <div className="hidden md:grid grid-cols-3">
                            {scheduleData.map((day, index) => (
                                <div key={day.day} className="relative">
                                    <button
                                        onClick={() => handleDaySelect(index)}
                                        className={`w-full h-full transition-all duration-300 flex flex-col items-start justify-center pl-5 py-3 border border-black ${
                                            selectedDay === index
                                                ? "bg-[#D1BAFF] text-black z-10"
                                                : "bg-white text-gray-700 hover:bg-gray-100"
                                        } ${index === 0 ? "border-l-0" : ""} ${
                                            index === 2 ? "border-r-0" : ""
                                        } ${index === 1 ? "border-x-0" : ""}`}
                                    >
                                        <span className="text-md">
                                            {index === 0
                                                ? "Conference"
                                                : "Hackathon"}
                                        </span>
                                        <span className="text-2xl font-semibold">
                                            {day.day}, {day.date}
                                        </span>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Day Selector - Scrollable */}
                        <div className="md:hidden overflow-x-auto border-t-1 noscrollbar">
                            <div className="flex min-w-max px-4 py-3">
                                {scheduleData.map((day, index) => (
                                    <div
                                        key={day.day}
                                        className="relative mr-4 last:mr-0"
                                    >
                                        <button
                                            onClick={() =>
                                                handleDaySelect(index)
                                            }
                                            className={`min-w-[200px] h-20 transition-all duration-300 flex flex-col items-start justify-center pl-4 py-3 border border-black rounded-lg ${
                                                selectedDay === index
                                                    ? "bg-[#D1BAFF] text-black"
                                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                            }`}
                                        >
                                            <span className="text-sm">
                                                {index === 0
                                                    ? "Conference"
                                                    : "Hackathon"}
                                            </span>
                                            <span className="text-lg font-semibold">
                                                {day.day}, {day.date}
                                            </span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Schedule Table - Bottom part without top radius */}
                    <div className="overflow-hidden">
                        {/* Desktop Schedule */}
                        <DesktopScheduleTable
                            selectedDay={selectedDay}
                            scheduleData={scheduleData}
                        />

                        {/* Mobile Schedule */}
                        <MobileScheduleTable
                            selectedDay={selectedDay}
                            scheduleData={scheduleData}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Schedule;
