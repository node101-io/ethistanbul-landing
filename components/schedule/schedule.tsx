"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import scheduleData, {
    DaySchedule,
    ScheduleEvent,
} from "@/lib/contributors/schedule";

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState<number>(0);

    return (
        <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-white overflow-hidden">
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
                    <div className="bg-gray-100 rounded-t-2xl border-none">
                        <div className="grid grid-cols-3">
                            {scheduleData.map((day, index) => (
                                <div key={day.day} className="relative">
                                    <button
                                        onClick={() => setSelectedDay(index)}
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
                    </div>

                    {/* Schedule Table - Bottom part without top radius */}
                    <div className="overflow-hidden">
                        {/* Table Header */}
                        <div className="bg-white border-b border-black border-t-0 rounded-none">
                            <div className="grid grid-cols-12">
                                <div className="flex justify-center items-center p-2 border-r border-black col-span-6">
                                    <h3 className="text-2xl font-bold text-black">
                                        STAGE A
                                    </h3>
                                </div>
                                <div className="flex justify-center items-center p-2 col-span-6">
                                    <h3 className="text-2xl font-bold text-black">
                                        STAGE B
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Table Body */}
                        <div>
                            {scheduleData[selectedDay].events.map((event) => (
                                <div
                                    key={event.id}
                                    className="grid grid-cols-12 border-b border-black h-30"
                                >
                                    {/* Stage A Column */}
                                    <div className="border-r border-black col-span-6">
                                        <div className="grid grid-cols-12 h-30">
                                            {/* Time Column for Stage A */}
                                            <div className="col-span-3 flex flex-col justify-center items-center border-r border-black p-4">
                                                <div className="text-lg font-semibold text-gray-900">
                                                    {event.time}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {event.duration}
                                                </div>
                                            </div>

                                            {/* Event content Column for Stage A */}
                                            <div className="col-span-9 p-4">
                                                {event.stage === "A" ||
                                                event.type === "break" ||
                                                event.type === "closing" ||
                                                event.type === "opening" ? (
                                                    event.type === "break" ? (
                                                        <div className="h-full flex items-center justify-start">
                                                            <span className="text-2xl text-black font-semibold ml-1">
                                                                BREAK
                                                            </span>
                                                        </div>
                                                    ) : event.type ===
                                                      "closing" ? (
                                                        <div className="h-full flex items-center justify-start">
                                                            <span className="text-2xl text-black font-semibold ml-1">
                                                                CLOSING
                                                            </span>
                                                        </div>
                                                    ) : event.type ===
                                                      "opening" ? (
                                                        <div className="h-full flex items-center justify-start">
                                                            <span className="text-2xl text-black font-semibold ml-1">
                                                                OPENING
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center gap-3 h-full">
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                                                    {
                                                                        event.title
                                                                    }
                                                                </h4>
                                                                <div className="flex justify-between">
                                                                    {event.speaker && (
                                                                        <div className="flex items-center gap-2">
                                                                            {event
                                                                                .speaker
                                                                                ?.image && (
                                                                                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                                                                                    <Image
                                                                                        src={
                                                                                            event
                                                                                                .speaker
                                                                                                .image
                                                                                        }
                                                                                        alt={
                                                                                            event
                                                                                                .speaker
                                                                                                .name
                                                                                        }
                                                                                        width={
                                                                                            48
                                                                                        }
                                                                                        height={
                                                                                            48
                                                                                        }
                                                                                        className="w-full h-full object-cover"
                                                                                    />
                                                                                </div>
                                                                            )}
                                                                            <span className="text-xs font-medium text-gray-700">
                                                                                {
                                                                                    event
                                                                                        .speaker
                                                                                        .name
                                                                                }
                                                                            </span>
                                                                            {event
                                                                                .speaker
                                                                                .title && (
                                                                                <span className="text-xs text-gray-500">
                                                                                    {
                                                                                        event
                                                                                            .speaker
                                                                                            .title
                                                                                    }
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                    {event.logo &&
                                                                        !event
                                                                            .speaker
                                                                            ?.logo && (
                                                                            <div className="w-16 h-12 relative">
                                                                                <Image
                                                                                    src={
                                                                                        event.logo
                                                                                    }
                                                                                    alt="Logo"
                                                                                    fill
                                                                                    className="object-contain"
                                                                                />
                                                                            </div>
                                                                        )}
                                                                    <div className="flex-shrink-0">
                                                                        {event
                                                                            .speaker
                                                                            ?.logo && (
                                                                            <div className="w-16 h-12 relative">
                                                                                <Image
                                                                                    src={
                                                                                        event
                                                                                            .speaker
                                                                                            .logo
                                                                                    }
                                                                                    alt="Logo"
                                                                                    fill
                                                                                    className="object-contain"
                                                                                />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                ) : (
                                                    <div className="h-24 flex items-center justify-center text-gray-400">
                                                        -
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stage B Column */}
                                    <div className="col-span-6">
                                        <div className="grid grid-cols-12 h-30">
                                            {/* Time Column for Stage B */}
                                            <div className="col-span-3 flex flex-col justify-center items-center border-r border-black p-4">
                                                <div className="text-lg font-semibold text-gray-900">
                                                    {event.time}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {event.duration}
                                                </div>
                                            </div>

                                            {/* Event content Column for Stage B */}
                                            <div className="col-span-9 p-4">
                                                {event.stage === "B" ||
                                                event.type === "break" ||
                                                event.type === "closing" ||
                                                event.type === "opening" ? (
                                                    event.type === "break" ? (
                                                        <div className="h-full flex items-center justify-start">
                                                            <span className="text-2xl text-black font-semibold ml-1">
                                                                BREAK
                                                            </span>
                                                        </div>
                                                    ) : event.type ===
                                                      "closing" ? (
                                                        <div className="h-full flex items-center justify-start">
                                                            <span className="text-2xl text-black font-semibold ml-1">
                                                                CLOSING
                                                            </span>
                                                        </div>
                                                    ) : event.type ===
                                                      "opening" ? (
                                                        <div className="h-full flex items-center justify-start">
                                                            <span className="text-2xl text-black font-semibold ml-1">
                                                                OPENING
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center gap-3 h-full">
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                                                    {
                                                                        event.title
                                                                    }
                                                                </h4>
                                                                <div className="flex justify-between">
                                                                    {event.speaker && (
                                                                        <div className="flex items-center gap-2">
                                                                            {event
                                                                                .speaker
                                                                                ?.image && (
                                                                                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                                                                                    <Image
                                                                                        src={
                                                                                            event
                                                                                                .speaker
                                                                                                .image
                                                                                        }
                                                                                        alt={
                                                                                            event
                                                                                                .speaker
                                                                                                .name
                                                                                        }
                                                                                        width={
                                                                                            48
                                                                                        }
                                                                                        height={
                                                                                            48
                                                                                        }
                                                                                        className="w-full h-full object-cover"
                                                                                    />
                                                                                </div>
                                                                            )}
                                                                            <span className="text-xs font-medium text-gray-700">
                                                                                {
                                                                                    event
                                                                                        .speaker
                                                                                        .name
                                                                                }
                                                                            </span>
                                                                            {event
                                                                                .speaker
                                                                                .title && (
                                                                                <span className="text-xs text-gray-500">
                                                                                    {
                                                                                        event
                                                                                            .speaker
                                                                                            .title
                                                                                    }
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                    {event.logo &&
                                                                        !event
                                                                            .speaker
                                                                            ?.logo && (
                                                                            <div className="w-16 h-12 relative">
                                                                                <Image
                                                                                    src={
                                                                                        event.logo
                                                                                    }
                                                                                    alt="Logo"
                                                                                    fill
                                                                                    className="object-contain"
                                                                                />
                                                                            </div>
                                                                        )}
                                                                    <div className="flex-shrink-0">
                                                                        {event
                                                                            .speaker
                                                                            ?.logo && (
                                                                            <div className="w-16 h-12 relative">
                                                                                <Image
                                                                                    src={
                                                                                        event
                                                                                            .speaker
                                                                                            .logo
                                                                                    }
                                                                                    alt="Logo"
                                                                                    fill
                                                                                    className="object-contain"
                                                                                />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                ) : (
                                                    <div className="h-24 flex items-center justify-center text-gray-400">
                                                        -
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Schedule;
