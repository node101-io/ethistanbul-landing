export interface ScheduleEvent {
    id: string;
    time: string;
    duration: string;
    title: string;
    speaker?: {
        name: string;
        title: string;
        logo: string;
        image: string;
    };
    logo?: string;
    type: "talk" | "break" | "panel" | "opening" | "closing" | "hackathon";
    stage?: "A" | "B"; // Made optional since hackathon days won't have stages
}

export interface DaySchedule {
    day: string;
    date: string;
    events: ScheduleEvent[];
    isHackathon?: boolean; // Add flag to identify hackathon days
}

export const scheduleData: DaySchedule[] = [
    {
        day: "Friday",
        date: "September 5",
        events: [
            {
                id: "1",
                time: "10:00 am",
                duration: "20 mins",
                title: "OPENING",
                speaker: {
                    name: "Jonger",
                    title: "",
                    logo: "/assets/sponsors/rise-web.webp",
                    image: "/assets/contributors/speakers/junger.webp",
                },
                type: "opening",
                stage: "A",
            },
            {
                id: "2",
                time: "10:20 am",
                duration: "20 mins",
                title: "PRACTICAL PRIVACY",
                speaker: {
                    name: "Arnoud Schenk",
                    title: "Co-Founder",
                    logo: "/assets/sponsors/aptos-web.webp",
                    image: "/assets/contributors/speakers/arnaud_schenk.png",
                },
                type: "talk",
                stage: "A",
            },
            {
                id: "3",
                time: "10:40 am",
                duration: "20 mins",
                title: "BASED APPCHAINS - EMPOWERING APP DEVELOPERS WITH SYNCHRONOUS COMPOSABILITY",
                speaker: {
                    name: "Miszke",
                    title: "",
                    logo: "/assets/sponsors/taikai-web.webp",
                    image: "/assets/contributors/speakers/miszke.png",
                },
                type: "talk",
                stage: "A",
            },
            {
                id: "4",
                time: "11:00 am",
                duration: "20 mins",
                title: "TRANSACTION ORDERING POLICIES: TIMEBOOST VS. PGA",
                speaker: {
                    name: "Akaki Mamageishvili",
                    title: "Researcher",
                    logo: "/assets/sponsors/aptos-web.webp",
                    image: "/assets/contributors/speakers/akaki_mamageishvili.png",
                },
                type: "talk",
                stage: "A",
            },
            {
                id: "5",
                time: "11:20 am",
                duration: "20 mins",
                title: "EVERYTHING IS A PSYOP",
                speaker: {
                    name: "Toghrul Maharramov",
                    title: "Researcher",
                    logo: "/assets/sponsors/taikai-web.webp",
                    image: "/assets/contributors/speakers/toghrul_maharramov.jpg",
                },
                type: "talk",
                stage: "A",
            },
            {
                id: "6",
                time: "11:40 am",
                duration: "1 hr",
                title: "BREAK",
                type: "break",
                stage: "A",
            },
            {
                id: "7",
                time: "12:40 pm",
                duration: "20 mins",
                title: "MEGAETH: UNAPOLOGETICALLY PERFORMANT",
                speaker: {
                    name: "Sami",
                    title: "DevRel",
                    logo: "/assets/sponsors/aptos-web.webp",
                    image: "/assets/contributors/speakers/sami.jpg",
                },
                type: "talk",
                stage: "A",
            },
            {
                id: "8",
                time: "01:00 pm",
                duration: "20 mins",
                title: "CROSS-CHAIN ARBITRAGE: THE NEXT FRONTIER OF MEV IN DECENTRALIZED FINANCE",
                speaker: {
                    name: "Burak Öz",
                    title: "Researcher",
                    logo: "/assets/sponsors/taikai-web.webp",
                    image: "/assets/contributors/speakers/burak_oz.jpg",
                },
                type: "talk",
                stage: "A",
            },
            {
                id: "9",
                time: "01:20 pm",
                duration: "20 mins",
                title: "MYSTERIOUS COOL NEW PAPER",
                speaker: {
                    name: "Istvan Andreas Seres",
                    title: "PhD",
                    logo: "/assets/sponsors/aptos-web.webp",
                    image: "/assets/contributors/speakers/istvanandreas_seres.png",
                },
                type: "talk",
                stage: "A",
            },
            {
                id: "10",
                time: "01:40 pm",
                duration: "20 mins",
                title: "DESIGNING A SECURITY FOCUSED SEQUENCER",
                speaker: {
                    name: "Martinet Lee",
                    title: "Head of DevRel",
                    logo: "/assets/sponsors/taikai-web.webp",
                    image: "/assets/contributors/speakers/martinet_lee.png",
                },
                type: "talk",
                stage: "A",
            },
            {
                id: "11",
                time: "02:00 pm",
                duration: "1 hr",
                title: "BREAK",
                type: "break",
                stage: "A",
            },
            {
                id: "12",
                time: "03:00 pm",
                duration: "40 mins",
                title: "TBA",
                speaker: {
                    name: "David TSE",
                    title: "Co-founder",
                    logo: "/assets/sponsors/babylon-web.webp",
                    image: "/assets/contributors/speakers/david_tse.jpg",
                },
                type: "talk",
                stage: "A",
            },
            {
                id: "13",
                time: "03:20 pm",
                duration: "20 mins",
                title: "TBA",
                logo: "/assets/sponsors/citrea-web.webp",
                type: "talk",
                stage: "A",
            },
            {
                id: "14",
                time: "03:40 pm",
                duration: "40 mins",
                title: "BITCOIN DEFI",
                speaker: {
                    name: "Mara, Best in Slot, Oyl",
                    title: "Panel",
                    logo: "",
                    image: "",
                },
                type: "panel",
                stage: "A",
            },
            {
                id: "15",
                time: "04:20 pm",
                duration: "",
                title: "CLOSING",
                type: "closing",
                stage: "A",
            },
        ],
    },
    {
        day: "Saturday",
        date: "September 6",
        isHackathon: true,
        events: [
            {
                id: "16",
                time: "08:00",
                duration: "",
                title: "Hackathon registration continues",
                type: "hackathon",
            },
            {
                id: "17",
                time: "09:00-11:00",
                duration: "",
                title: "Breakfast",
                type: "hackathon",
            },
            {
                id: "18",
                time: "10:00-10:30",
                duration: "",
                title: "Hackathon Kickoff & Intros",
                type: "hackathon",
            },
            {
                id: "19",
                time: "10:30-11:30",
                duration: "",
                title: "Brainstorming & Ideation",
                type: "hackathon",
            },
            {
                id: "20",
                time: "11:30-20:00",
                duration: "",
                title: "Hacking Time",
                type: "hackathon",
            },
            {
                id: "21",
                time: "13:00-14:00",
                duration: "",
                title: "Lunch",
                type: "hackathon",
            },
            {
                id: "22",
                time: "18:00-19:00",
                duration: "",
                title: "Dinner",
                type: "hackathon",
            },
            {
                id: "23",
                time: "23:00-00:00",
                duration: "",
                title: "Late-night snacks",
                type: "hackathon",
            },
        ],
    },
    {
        day: "Sunday",
        date: "September 7",
        isHackathon: true,
        events: [
            {
                id: "24",
                time: "08:00-11:00",
                duration: "",
                title: "Breakfast",
                type: "hackathon",
            },
            {
                id: "25",
                time: "12:00",
                duration: "",
                title: "Project Submissions Due",
                type: "hackathon",
            },
            {
                id: "26",
                time: "12:00-14:00",
                duration: "",
                title: "Presentations",
                type: "hackathon",
            },
            {
                id: "27",
                time: "13:00-15:00",
                duration: "",
                title: "Lunch",
                type: "hackathon",
            },
            {
                id: "28",
                time: "14:00-16:00",
                duration: "",
                title: "Judging",
                type: "hackathon",
            },
            {
                id: "29",
                time: "16:00",
                duration: "",
                title: "Closing Ceremonies, Winners Announced, Prizes",
                type: "hackathon",
            },
            {
                id: "30",
                time: "16:00-18:00",
                duration: "",
                title: "Hackathon Ends",
                type: "hackathon",
            },
        ],
    },
];

export default scheduleData;
