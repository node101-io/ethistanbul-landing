import React from "react";
import Image from "next/image";
import SponsorLogo from "@/components/schedule/SponsorLogo";
import { DaySchedule, ScheduleEvent } from "@/lib/schedule/schedule";

interface DesktopScheduleTableProps {
    selectedDay: number;
    scheduleData: DaySchedule[];
}

const DesktopScheduleTable = ({
    selectedDay,
    scheduleData,
}: DesktopScheduleTableProps) => {
    const currentDay = scheduleData[selectedDay];
    const isHackathon = currentDay.isHackathon;

    if (isHackathon) {
        // Hackathon days - same layout as conference days but single stage
        return (
            <div className="hidden md:block">
                {/* Single Stage Header */}
                <div className="bg-white border-b border-black border-t-0 rounded-none">
                    <div className="flex justify-center items-center p-2">
                        <h3 className="text-2xl font-bold text-black">
                            HACKATHON SCHEDULE
                        </h3>
                    </div>
                </div>

                {/* Single Stage Table */}
                <div>
                    {currentDay.events.map((event) => (
                        <div
                            key={event.id}
                            className="border-b border-black h-32"
                        >
                            <div className="grid grid-cols-12 h-32">
                                {/* Time Column */}
                                <div className="col-span-3 flex flex-col justify-center items-center border-r border-black p-4">
                                    <div className="text-lg font-semibold text-gray-900">
                                        {event.time}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {event.duration}
                                    </div>
                                </div>

                                {/* Event Content Column */}
                                <div className="col-span-9 p-4">
                                    {event.type === "break" ||
                                    event.type === "closing" ? (
                                        <div className="h-full flex items-center justify-start">
                                            <span className="text-2xl text-black font-semibold ml-1">
                                                {event.title.toUpperCase()}
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-3 h-full">
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-lg font-semibold text-black mb-2">
                                                    {event.title}
                                                </h4>
                                                <div className="flex justify-between">
                                                    {event.speaker && (
                                                        <div className="flex items-center gap-2">
                                                            {event.speaker
                                                                ?.image && (
                                                                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
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
                                                            <span className="text-md font-medium text-gray-700">
                                                                {
                                                                    event
                                                                        .speaker
                                                                        .name
                                                                }
                                                            </span>
                                                            {event.speaker
                                                                .title && (
                                                                <span className="text-sm text-gray-500">
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
                                                        !event.speaker
                                                            ?.logo && (
                                                            <div className="w-16 h-12 flex items-center justify-center">
                                                                <SponsorLogo
                                                                    logo={
                                                                        event.logo
                                                                    }
                                                                    className="w-full h-full"
                                                                />
                                                            </div>
                                                        )}
                                                    <div className="flex-shrink-0">
                                                        {event.speaker
                                                            ?.logo && (
                                                            <div className="w-16 h-12 flex items-center justify-center">
                                                                <SponsorLogo
                                                                    logo={
                                                                        event
                                                                            .speaker
                                                                            .logo
                                                                    }
                                                                    className="w-full h-full"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Conference days - dual stage layout
    return (
        <div className="hidden md:block">
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
                {(() => {
                    // Get all events and sort by ID
                    const allEvents = [...currentDay.events].sort(
                        (a, b) => parseInt(a.id) - parseInt(b.id)
                    );

                    // Group events by their position in the schedule (every 2 events = 1 row)
                    const rows = [];
                    for (let i = 0; i < allEvents.length; i += 2) {
                        const stageAEvent = allEvents[i];
                        const stageBEvent = allEvents[i + 1];

                        if (stageAEvent) {
                            rows.push({
                                stageA: stageAEvent,
                                stageB: stageBEvent,
                            });
                        }
                    }

                    return rows.map((row, index) => (
                        <div
                            key={row.stageA.id}
                            className="grid grid-cols-12 border-b border-black h-32"
                        >
                            {/* Stage A Column */}
                            <div className="border-r border-black col-span-6">
                                <div className="grid grid-cols-12 h-32">
                                    {/* Time Column for Stage A */}
                                    <div className="col-span-3 flex flex-col justify-center items-center border-r border-black p-4">
                                        <div className="text-lg font-semibold text-gray-900">
                                            {row.stageA.time}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {row.stageA.duration}
                                        </div>
                                    </div>

                                    {/* Event content Column for Stage A */}
                                    <div className="col-span-9 p-4">
                                        {row.stageA.type === "break" ? (
                                            <div className="h-full flex items-center justify-start">
                                                <span className="text-2xl text-black font-semibold ml-1">
                                                    BREAK
                                                </span>
                                            </div>
                                        ) : row.stageA.type === "closing" ? (
                                            <div className="h-full flex items-center justify-start">
                                                <span className="text-2xl text-black font-semibold ml-1">
                                                    CLOSING
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-3 h-full">
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-base font-semibold text-black mb-2">
                                                        {row.stageA.title}
                                                    </h4>
                                                    <div className="flex justify-between">
                                                        {row.stageA.speaker && (
                                                            <div className="flex items-center gap-2">
                                                                {row.stageA
                                                                    .speaker
                                                                    ?.image && (
                                                                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                                                                        <Image
                                                                            src={
                                                                                row
                                                                                    .stageA
                                                                                    .speaker
                                                                                    .image
                                                                            }
                                                                            alt={
                                                                                row
                                                                                    .stageA
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
                                                                <span className="text-sm font-medium text-gray-700">
                                                                    {
                                                                        row
                                                                            .stageA
                                                                            .speaker
                                                                            .name
                                                                    }
                                                                </span>
                                                                {row.stageA
                                                                    .speaker
                                                                    .title && (
                                                                    <span className="text-sm text-gray-500">
                                                                        {
                                                                            row
                                                                                .stageA
                                                                                .speaker
                                                                                .title
                                                                        }
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}
                                                        {row.stageA.logo &&
                                                            !row.stageA.speaker
                                                                ?.logo && (
                                                                <div className="w-16 h-12 flex items-center justify-center">
                                                                    <SponsorLogo
                                                                        logo={
                                                                            row
                                                                                .stageA
                                                                                .logo
                                                                        }
                                                                        className="w-full h-full"
                                                                    />
                                                                </div>
                                                            )}
                                                        <div className="flex-shrink-0">
                                                            {row.stageA.speaker
                                                                ?.logo && (
                                                                <div className="w-16 h-12 flex items-center justify-center">
                                                                    <SponsorLogo
                                                                        logo={
                                                                            row
                                                                                .stageA
                                                                                .speaker
                                                                                .logo
                                                                        }
                                                                        className="w-full h-full"
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Stage B Column */}
                            <div className="col-span-6">
                                <div className="grid grid-cols-12 h-32">
                                    {/* Time Column for Stage B */}
                                    <div className="col-span-3 flex flex-col justify-center items-center border-r border-black p-4">
                                        <div className="text-lg font-semibold text-gray-900">
                                            {row.stageB ? row.stageB.time : ""}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {row.stageB
                                                ? row.stageB.duration
                                                : ""}
                                        </div>
                                    </div>

                                    {/* Event content Column for Stage B */}
                                    <div className="col-span-9 p-4">
                                        {row.stageB ? (
                                            row.stageB.type === "break" ? (
                                                <div className="h-full flex items-center justify-start">
                                                    <span className="text-2xl text-black font-semibold ml-1">
                                                        BREAK
                                                    </span>
                                                </div>
                                            ) : row.stageB.type ===
                                              "closing" ? (
                                                <div className="h-full flex items-center justify-start">
                                                    <span className="text-2xl text-black font-semibold ml-1">
                                                        CLOSING
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-3 h-full">
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-sm font-semibold text-black mb-1">
                                                            {row.stageB.title}
                                                        </h4>
                                                        <div className="flex justify-between">
                                                            {row.stageB
                                                                .speaker && (
                                                                <div className="flex items-center gap-2">
                                                                    {row.stageB
                                                                        .speaker
                                                                        ?.image && (
                                                                        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                                                                            <Image
                                                                                src={
                                                                                    row
                                                                                        .stageB
                                                                                        .speaker
                                                                                        .image
                                                                                }
                                                                                alt={
                                                                                    row
                                                                                        .stageB
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
                                                                            row
                                                                                .stageB
                                                                                .speaker
                                                                                .name
                                                                        }
                                                                    </span>
                                                                    {row.stageB
                                                                        .speaker
                                                                        .title && (
                                                                        <span className="text-xs text-gray-500">
                                                                            {
                                                                                row
                                                                                    .stageB
                                                                                    .speaker
                                                                                    .title
                                                                            }
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            )}
                                                            {row.stageB.logo &&
                                                                !row.stageB
                                                                    .speaker
                                                                    ?.logo && (
                                                                    <div className="w-16 h-12 flex items-center justify-center">
                                                                        <SponsorLogo
                                                                            logo={
                                                                                row
                                                                                    .stageB
                                                                                    .logo
                                                                            }
                                                                            className="w-full h-full"
                                                                        />
                                                                    </div>
                                                                )}
                                                            <div className="flex-shrink-0">
                                                                {row.stageB
                                                                    .speaker
                                                                    ?.logo && (
                                                                    <div className="w-16 h-12 flex items-center justify-center">
                                                                        <SponsorLogo
                                                                            logo={
                                                                                row
                                                                                    .stageB
                                                                                    .speaker
                                                                                    .logo
                                                                            }
                                                                            className="w-full h-full"
                                                                        />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ));
                })()}
            </div>
        </div>
    );
};

export default DesktopScheduleTable;
