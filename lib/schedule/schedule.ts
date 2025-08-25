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
            {
                id: "31",
                time: "08:00",
                duration: "",
                title: "Hackathon registration continues",
                type: "hackathon",
            },
            {
                id: "32",
                time: "09:00-11:00",
                duration: "",
                title: "Breakfast",
                type: "hackathon",
            },
            {
                id: "33",
                time: "10:00-10:30",
                duration: "",
                title: "Hackathon Kickoff & Intros",
                type: "hackathon",
            },
            {
                id: "34",
                time: "10:30-11:30",
                duration: "",
                title: "Brainstorming & Ideation",
                type: "hackathon",
            },
            {
                id: "35",
                time: "11:30-20:00",
                duration: "",
                title: "Hacking Time",
                type: "hackathon",
            },
            {
                id: "36",
                time: "13:00-14:00",
                duration: "",
                title: "Lunch",
                type: "hackathon",
            },
            {
                id: "37",
                time: "18:00-19:00",
                duration: "",
                title: "Dinner",
                type: "hackathon",
            },
            {
                id: "38",
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
                id: "39",
                time: "08:00-11:00",
                duration: "",
                title: "Breakfast",
                type: "hackathon",
            },
            {
                id: "40",
                time: "12:00",
                duration: "",
                title: "Project Submissions Due",
                type: "hackathon",
            },
            {
                id: "41",
                time: "12:00-14:00",
                duration: "",
                title: "Presentations",
                type: "hackathon",
            },
            {
                id: "42",
                time: "13:00-15:00",
                duration: "",
                title: "Lunch",
                type: "hackathon",
            },
            {
                id: "43",
                time: "14:00-16:00",
                duration: "",
                title: "Judging",
                type: "hackathon",
            },
            {
                id: "44",
                time: "16:00",
                duration: "",
                title: "Closing Ceremonies, Winners Announced, Prizes",
                type: "hackathon",
            },
            {
                id: "45",
                time: "16:00-18:00",
                duration: "",
                title: "Hackathon Ends",
                type: "hackathon",
            },
        ],
    },
];

export default scheduleData;
