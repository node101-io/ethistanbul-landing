import React from "react";
import Image from "next/image";
import SponsorLogo from "@/components/schedule/SponsorLogo";
import { DaySchedule, ScheduleEvent } from "@/lib/schedule/schedule";

interface MobileScheduleTableProps {
    selectedDay: number;
    scheduleData: DaySchedule[];
}

const MobileScheduleTable = ({
    selectedDay,
    scheduleData,
}: MobileScheduleTableProps) => {
    const currentDay = scheduleData[selectedDay];
    const isHackathon = currentDay.isHackathon;

    if (isHackathon) {
        // Hackathon days - same layout as conference days but single stage
        return (
            <div className="md:hidden border-b">
                {/* Single Stage Header */}
                <div className="bg-white border-b border-black p-4">
                    <h3 className="text-xl font-bold text-black text-center">
                        HACKATHON SCHEDULE
                    </h3>
                </div>

                {/* Single Stage Events - Same structure as conference days */}
                {currentDay.events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white border-b border-gray-200 p-4"
                    >
                        <div className="grid grid-cols-12 gap-4">
                            {/* Time Column */}
                            <div className="col-span-3 text-center">
                                <div className="text-lg font-semibold text-gray-900">
                                    {event.time}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {event.duration}
                                </div>
                            </div>

                            {/* Event Content - Same structure as conference days */}
                            <div className="col-span-9">
                                {event.type === "break" ||
                                event.type === "opening" ||
                                event.type === "closing" ? (
                                    <div className="text-center py-4">
                                        <span className="text-xl text-black font-semibold">
                                            {event.title.toUpperCase()}
                                        </span>
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="text-base font-semibold text-black mb-2">
                                            {event.title}
                                        </h4>
                                        {event.speaker && (
                                            <div className="flex items-center gap-2 mb-2">
                                                {event.speaker?.image && (
                                                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                                        <Image
                                                            src={
                                                                event.speaker
                                                                    .image
                                                            }
                                                            alt={
                                                                event.speaker
                                                                    .name
                                                            }
                                                            width={40}
                                                            height={40}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="text-sm font-medium text-gray-700">
                                                        {event.speaker.name}
                                                    </div>
                                                    {event.speaker.title && (
                                                        <div className="text-sm text-gray-500">
                                                            {
                                                                event.speaker
                                                                    .title
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        {event.speaker?.logo && (
                                            <div className="w-16 h-12 flex items-center justify-center">
                                                <SponsorLogo
                                                    logo={event.speaker.logo}
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        )}
                                        {event.logo && !event.speaker?.logo && (
                                            <div className="w-16 h-12 flex items-center justify-center">
                                                <SponsorLogo
                                                    logo={event.logo}
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Conference days - dual stage layout
    return (
        <div className="md:hidden">
            {/* Stage A Events */}
            <div className="mb-8">
                <div className="bg-white border-b border-black p-4">
                    <h3 className="text-xl font-bold text-black text-center">
                        STAGE A
                    </h3>
                </div>
                {currentDay.events.filter((event) => event.stage === "A")
                    .length > 0 ? (
                    currentDay.events
                        .filter((event) => event.stage === "A")
                        .map((event) => (
                            <div
                                key={event.id}
                                className="bg-white border-b border-gray-200 p-4"
                            >
                                <div className="grid grid-cols-12 gap-4">
                                    {/* Time Column */}
                                    <div className="col-span-3 text-center">
                                        <div className="text-lg font-semibold text-gray-900">
                                            {event.time}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {event.duration}
                                        </div>
                                    </div>

                                    {/* Event Content */}
                                    <div className="col-span-9">
                                        {event.type === "break" ? (
                                            <div className="text-center py-4">
                                                <span className="text-xl text-black font-semibold">
                                                    BREAK
                                                </span>
                                            </div>
                                        ) : event.type === "closing" ? (
                                            <div className="text-center py-4">
                                                <span className="text-xl text-black font-semibold">
                                                    CLOSING
                                                </span>
                                            </div>
                                        ) : event.type === "opening" ? (
                                            <div className="text-center py-4">
                                                <span className="text-xl text-black font-semibold">
                                                    OPENING
                                                </span>
                                            </div>
                                        ) : (
                                            <>
                                                <h4 className="text-base font-semibold text-black mb-2">
                                                    {event.title}
                                                </h4>
                                                {event.speaker && (
                                                    <div className="flex items-center gap-2 mb-2">
                                                        {event.speaker
                                                            ?.image && (
                                                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
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
                                                                    width={40}
                                                                    height={40}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                        )}
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-700">
                                                                {
                                                                    event
                                                                        .speaker
                                                                        .name
                                                                }
                                                            </div>
                                                            {event.speaker
                                                                .title && (
                                                                <div className="text-sm text-gray-500">
                                                                    {
                                                                        event
                                                                            .speaker
                                                                            .title
                                                                    }
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                                {event.speaker?.logo && (
                                                    <div className="w-16 h-12 flex items-center justify-center">
                                                        <SponsorLogo
                                                            logo={
                                                                event.speaker
                                                                    .logo
                                                            }
                                                            className="w-full h-full"
                                                        />
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                ) : (
                    <div className="text-center py-4">
                        <span className="text-xl text-black">
                            No events scheduled
                        </span>
                    </div>
                )}
            </div>

            {/* Stage B Events */}
            <div className="border-y-1">
                <div className="bg-white border-b border-black p-4">
                    <h3 className="text-xl font-bold text-black text-center">
                        STAGE B
                    </h3>
                </div>
                {currentDay.events.filter((event) => event.stage === "B")
                    .length > 0 ? (
                    currentDay.events
                        .filter((event) => event.stage === "B")
                        .map((event) => (
                            <div
                                key={event.id}
                                className="bg-white border-b border-gray-200 p-4"
                            >
                                <div className="grid grid-cols-12 gap-4">
                                    {/* Time Column */}
                                    <div className="col-span-3 text-center">
                                        <div className="text-lg font-semibold text-gray-900">
                                            {event.time}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {event.duration}
                                        </div>
                                    </div>

                                    {/* Event Content */}
                                    <div className="col-span-9">
                                        {event.type === "break" ? (
                                            <div className="text-center py-4">
                                                <span className="text-xl text-black font-semibold">
                                                    BREAK
                                                </span>
                                            </div>
                                        ) : event.type === "closing" ? (
                                            <div className="text-center py-4">
                                                <span className="text-xl text-black font-semibold">
                                                    CLOSING
                                                </span>
                                            </div>
                                        ) : event.type === "opening" ? (
                                            <div className="text-center py-4">
                                                <span className="text-xl text-black font-semibold">
                                                    OPENING
                                                </span>
                                            </div>
                                        ) : (
                                            <>
                                                <h4 className="text-sm font-semibold text-black mb-2">
                                                    {event.title}
                                                </h4>
                                                {event.speaker && (
                                                    <div className="flex items-center gap-2 mb-2">
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
                                                                    width={32}
                                                                    height={32}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                        )}
                                                        <div>
                                                            <div className="text-xs font-medium text-gray-700">
                                                                {
                                                                    event
                                                                        .speaker
                                                                        .name
                                                                }
                                                            </div>
                                                            {event.speaker
                                                                .title && (
                                                                <div className="text-xs text-gray-500">
                                                                    {
                                                                        event
                                                                            .speaker
                                                                            .title
                                                                    }
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                                {event.speaker?.logo && (
                                                    <div className="w-12 h-8 flex items-center justify-center">
                                                        <SponsorLogo
                                                            logo={
                                                                event.speaker
                                                                    .logo
                                                            }
                                                            className="w-full h-full"
                                                        />
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                ) : (
                    <div className="text-center py-4">
                        <span className="text-xl text-black">
                            No events scheduled
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileScheduleTable;
