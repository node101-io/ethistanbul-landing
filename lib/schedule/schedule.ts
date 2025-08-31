import AkakiMamageishvili from "@/assets/contributors/speakers/akaki_mamageishvili.png";
import MartinetLee from "@/assets/contributors/speakers/martinet_lee.png";
import Miszke from "@/assets/contributors/speakers/miszke.png";
import IstvanAndreasSeres from "@/assets/contributors/speakers/istvan_andreas_seres.png";
import ArnaudSchenk from "@/assets/contributors/speakers/arnaud_schenk.png";
import Sami from "@/assets/contributors/speakers/sami.jpg";
import DavidTSE from "@/assets/contributors/speakers/david_tse.jpg";
import BurakOz from "@/assets/contributors/speakers/burak_oz.jpg";
import ToghrulMaharramov from "@/assets/contributors/speakers/toghrul_maharramov.jpg";
import Junger from "@/assets/contributors/mentors/junger.webp";
import MelikeKecelioglu from "@/assets/contributors/speakers/melike_kecelioglu.png";
import DonMills from "@/assets/contributors/speakers/dan_mills.png";
import FilipPajic from "@/assets/contributors/speakers/filip_pajic.png";
import NickyChalabi from "@/assets/contributors/speakers/nicky_chalabi.jpg";
import Kassandra from "@/assets/contributors/speakers/kassandra.jpg";
import DefiDave from "@/assets/contributors/speakers/defi_dave.jpg";
import FurkanDogan from "@/assets/contributors/speakers/furkan_dogan.jpg";

// Sponsor SVG logos are rendered via components; no direct image imports needed here

export type SponsorLogoKey =
    | "avail"
    | "cap"
    | "lighter"
    | "pelagos"
    | "status"
    | "aptos"
    | "aztec"
    | "babylon"
    | "bme"
    | "bybit"
    | "citrea"
    | "flashbots"
    | "fluent"
    | "ledger"
    | "megaeth"
    | "olas"
    | "offchain"
    | "piku"
    | "rise"
    | "spire"
    | "taikai"
    | "yellow"
    | "zircuit"
    | "";

export interface ScheduleEvent {
    id: string;
    time: string;
    duration: string;
    title: string;
    speaker?: {
        name: string;
        title: string;
        logo: SponsorLogoKey;
        image: string;
    };
    logo?: SponsorLogoKey;
    type: "talk" | "break" | "panel" | "opening" | "closing" | "hackathon" | "";
    stage?: "A" | "B"; // Made optional since hackathon days won't have stages
    spanBoth?: boolean; // If true, render across both columns (desktop)
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
                id: "0",
                time: "09:00 am",
                title: "Hackathon Registration Starts",
                duration: "",
                type: "hackathon",
                spanBoth: true,
            },
            {
                id: "1",
                time: "10:00 am",
                duration: "20 mins",
                title: "OPENING",
                speaker: {
                    name: "Jünger",
                    title: "",
                    logo: "rise",
                    image: Junger.src,
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
                    name: "Arnaud Schenk",
                    title: "Co-Founder",
                    logo: "aztec",
                    image: ArnaudSchenk.src,
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
                    logo: "spire",
                    image: Miszke.src,
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
                    logo: "offchain",
                    image: AkakiMamageishvili.src,
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
                    logo: "fluent",
                    image: ToghrulMaharramov.src,
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
                    logo: "megaeth",
                    image: Sami.src,
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
                    logo: "flashbots",
                    image: BurakOz.src,
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
                    logo: "bme",
                    image: IstvanAndreasSeres.src,
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
                    logo: "zircuit",
                    image: MartinetLee.src,
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
                duration: "20 mins",
                title: "TBA",
                speaker: {
                    name: "David TSE",
                    title: "Co-founder",
                    logo: "babylon",
                    image: DavidTSE.src,
                },
                type: "talk",
                stage: "A",
            },
            {
                id: "13",
                time: "03:20 pm",
                duration: "20 mins",
                title: "TBA",
                logo: "citrea",
                type: "talk",
                stage: "A",
            },
            {
                id: "14",
                time: "03:40 pm",
                duration: "40 mins",
                title: "BITCOIN DEFI",
                speaker: {
                    name: "Mora, Best in Slot, Oyl",
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
            {
                id: "16",
                time: "05:00 pm",
                duration: "",
                title: "Hackathon Registration End for Friday",
                type: "hackathon",
                spanBoth: true,
            },
            // Stage B Events - Updated with new events from the image
            {
                id: "1",
                time: "10:00 am",
                duration: "20 mins",
                title: "",
                type: "",
                stage: "B",
            },
            {
                id: "2",
                time: "10:20 am",
                duration: "20 mins",
                title: "",
                type: "",
                stage: "B",
            },
            {
                id: "3",
                time: "10:40 am",
                duration: "20 mins",
                title: "AI X STABLECOINS",
                speaker: {
                    name: "Melike Keçelioglu",
                    title: "Technical Lead",
                    logo: "piku",
                    image: MelikeKecelioglu.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "4",
                time: "11:00 am",
                duration: "20 mins",
                title: "UNLOCKING MULTICHAIN LIQUIDITY WITH AVAIL NEXUS",
                speaker: {
                    name: "Don Mills",
                    title: "Product Lead",
                    logo: "avail",
                    image: DonMills.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "5",
                time: "11:20 am",
                duration: "20 mins",
                title: "GAS TO ZERO",
                speaker: {
                    name: "Filip Pajló",
                    title: "Engineer",
                    logo: "status",
                    image: FilipPajic.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "6",
                time: "11:40 am",
                duration: "1 hr",
                title: "BREAK",
                type: "break",
                stage: "B",
            },
            {
                id: "7",
                time: "12:40 pm",
                duration: "20 mins",
                title: "PERMISSIONED SHARDS MEET PUBLIC DEFI: ATOMIC SETTLEMENT IN <1S",
                speaker: {
                    name: "Nicky Chelebi",
                    title: "CBO",
                    logo: "pelagos",
                    image: NickyChalabi.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "8",
                time: "01:00 pm",
                duration: "20 mins",
                title: "WALLETS 2.0: THE NEXT GENERATION OF ETHEREUM USER EXPERIENCE",
                speaker: {
                    name: "Kassandra",
                    title: "Engineer",
                    logo: "",
                    image: Kassandra.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "9",
                time: "01:20 pm",
                duration: "20 mins",
                title: "THE DAWN OF TYPE III STABLECOINS",
                speaker: {
                    name: "Defi Dave",
                    title: "Head of Growth",
                    logo: "cap",
                    image: DefiDave.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "10",
                time: "01:40 pm",
                duration: "20 mins",
                title: "SCALING PERPETUAL TRADING WITH ZK PROOFS",
                speaker: {
                    name: "Furkan Doğan",
                    title: "Product Lead",
                    logo: "lighter",
                    image: FurkanDogan.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "11",
                time: "02:00 pm",
                duration: "1 hr",
                title: "BREAK",
                type: "break",
                stage: "B",
            },
            {
                id: "12",
                time: "03:00 pm",
                duration: "40 mins",
                title: "CRYPTO&FINTECH IN TÜRKIYE",
                speaker: {
                    name: "Tether, Inverter, Poribu, Fintables",
                    title: "Panel",
                    logo: "",
                    image: "",
                },
                type: "panel",
                stage: "B",
            },
            {
                id: "13",
                time: "03:40 pm",
                duration: "20 mins",
                title: "TBA",
                logo: "",
                type: "talk",
                stage: "B",
            },
            {
                id: "14",
                time: "04:00 pm",
                duration: "20 mins",
                title: "TBA",
                logo: "ledger",
                type: "talk",
                stage: "B",
            },
            {
                id: "15",
                time: "04:20 pm",
                duration: "",
                title: "CLOSING",
                type: "closing",
                stage: "B",
            },
        ],
    },
    {
        day: "Saturday",
        date: "September 6",
        isHackathon: true,
        events: [
            // Room 1 (stage A)
            {
                id: "1",
                time: "08:00-17:00",
                duration: "",
                title: "Hackathon Registration",
                type: "hackathon",
                stage: "A",
                spanBoth: true,
            },
            {
                id: "2",
                time: "09:00-11:00",
                duration: "",
                title: "Breakfast",
                type: "hackathon",
                stage: "A",
                spanBoth: true,
            },
            {
                id: "3",
                time: "10:00-10:30",
                duration: "",
                title: "Hackathon Opening Ceremony",
                speaker: {
                    name: "Yunus Gurlek",
                    title: "",
                    logo: "",
                    image: "",
                },
                type: "hackathon",
                stage: "A",
                spanBoth: true,
            },
            {
                id: "4",
                time: "10:30-11:30",
                duration: "",
                title: "Aptos Workshop — \"Unlocking the Power of Aptos & Move\"",
                speaker: {
                    name: "İsmet Loğoğlu",
                    title: "",
                    logo: "aptos",
                    image: "",
                },
                logo: "aptos",
                type: "hackathon",
                stage: "A",
            },
            {
                id: "124221",
                time: "10.30-11.30",
                duration: "",
                title: "",
                type: "",
                stage: "A",
            },
            {
                id: "5",
                time: "11:30-12:30",
                duration: "",
                title: "Yellow Workshop — TBA",
                logo: "yellow",
                type: "hackathon",
                stage: "A",
            },
            {
                id: "6",
                time: "12:30-13:00",
                duration: "",
                title: "Rise Workshop 2 — TBA",
                logo: "rise",
                type: "hackathon",
                stage: "A",
            },
            {
                id: "7",
                time: "13:00-14:00",
                duration: "",
                title: "Lunch",
                type: "hackathon",
                stage: "A",
                spanBoth: true,
            },
            {
                id: "8",
                time: "14:00-14:45",
                duration: "",
                title: "Citrea Workshop 2 — TBA",
                logo: "citrea",
                type: "hackathon",
                stage: "A",
            },
            {
                id: "9",
                time: "15:00-16:00",
                duration: "",
                title: "Babylon Workshop — TBA",
                logo: "babylon",
                type: "hackathon",
                stage: "A",
            },
            {
                id: "10",
                time: "18:00-19:00",
                duration: "",
                title: "Dinner",
                type: "hackathon",
                stage: "A",
                spanBoth: true,
            },
            {
                id: "11",
                time: "23:00-00:00",
                duration: "",
                title: "Late Night Snacks",
                type: "hackathon",
                stage: "A",
                spanBoth: true,
            },

            // Room 2 (stage B)
            {
                id: "21421",
                time: "10.30-11.30",
                duration: "",
                title: "",
                type: "",
                stage: "B",
            },
            {
                id: "4",
                time: "11:00-11:30",
                duration: "",
                title: "Rise Workshop 1 — TBA",
                logo: "rise",
                type: "hackathon",
                stage: "B",
            },
            {
                id: "rewr232",
                time: "11:30-12:00",
                duration: "",
                title: "",
                type: "",
                stage: "B",
            },
            {
                id: "5",
                time: "12:00-12:45",
                duration: "",
                title: "Citrea Workshop 1 — TBA",
                logo: "citrea",
                type: "hackathon",
                stage: "B",
            },
        ],
    },
    {
        day: "Sunday",
        date: "September 7",
        isHackathon: true,
        events: [
            // Room 1 (stage A)
            {
                id: "1323123",
                time: "08:00-11:00",
                duration: "",
                title: "Breakfast",
                type: "hackathon",
                stage: "A",
                spanBoth: true,
            },
            {
                id: "124212132",
                time: "12:00",
                duration: "",
                title: "Project Submission Deadline",
                type: "hackathon",
                stage: "A",
                spanBoth: true,
            },
            {
                id: "4235ygfd3",
                time: "12:00-15:00",
                duration: "",
                title: "Presentations",
                type: "hackathon",
                stage: "A",
                spanBoth: true,
            },
            {
                id: "45657567567",
                time: "13:00-15:00",
                duration: "",
                title: "Lunch",
                type: "hackathon",
                stage: "A",
                spanBoth: true,
            },
            {
                id: "567567567",
                time: "15:00-17:00",
                duration: "",
                title: "Judging Period",
                type: "hackathon",
                stage: "A",
                spanBoth: true,
            },
            {
                id: "678678678678",
                time: "17:00-17:45",
                duration: "",
                title: "Closing Ceremony",
                speaker: {
                    name: "Yunus Gurlek",
                    title: "",
                    logo: "",
                    image: "",
                },
                type: "hackathon",
                stage: "A",
                spanBoth: true,
            },

            // Room 2 (stage B)
            // {}
        ],
    },
];

export default scheduleData;
