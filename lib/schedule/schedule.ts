import AkakiMamageishvili from "@/assets/contributors/speakers/akaki_mamageishvili.png";
import DanMills from "@/assets/contributors/speakers/dan_mills.png";
import FilipPajic from "@/assets/contributors/speakers/filip_pajic.png";
import MartinetLee from "@/assets/contributors/speakers/martinet_lee.png";
import MelikeKecelioglu from "@/assets/contributors/speakers/melike_kecelioglu.png";
import Miszke from "@/assets/contributors/speakers/miszke.png";
import IstvanAndreasSeres from "@/assets/contributors/speakers/istvan_andreas_seres.png";
import ArnaudSchenk from "@/assets/contributors/speakers/arnaud_schenk.png";
import NickyChalabi from "@/assets/contributors/speakers/nicky_chalabi.jpg";
import Kassandra from "@/assets/contributors/speakers/kassandra.jpg";
import Sami from "@/assets/contributors/speakers/sami.jpg";
import DefiDave from "@/assets/contributors/speakers/defi_dave.jpg";
import FurkanDogan from "@/assets/contributors/speakers/furkan_dogan.jpg";
import DavidTSE from "@/assets/contributors/speakers/david_tse.jpg";
import BurakOz from "@/assets/contributors/speakers/burak_oz.jpg";
import ToghrulMaharramov from "@/assets/contributors/speakers/toghrul_maharramov.jpg";
import Junger from "@/assets/contributors/mentors/junger.webp";

import RiseWeb from "@/assets/sponsors/rise-web.webp";
import AptosWeb from "@/assets/sponsors/aptos-web.webp";
import TaikaiWeb from "@/assets/sponsors/taikai-web.webp";
import BabylonWeb from "@/assets/sponsors/babylon-web.webp";
import CitreaWeb from "@/assets/sponsors/citrea-web.webp";
import LedgerWeb from "@/assets/sponsors/ledger-web.webp";

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
    type: "talk" | "break" | "panel" | "opening" | "closing";
    stage: "A" | "B";
}

export interface DaySchedule {
    day: string;
    date: string;
    events: ScheduleEvent[];
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
                    logo: RiseWeb.src,
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
                    name: "Arnoud Schenk",
                    title: "Co-Founder",
                    logo: AptosWeb.src,
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
                    logo: TaikaiWeb.src,
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
                    logo: AptosWeb.src,
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
                    logo: TaikaiWeb.src,
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
                    logo: AptosWeb.src,
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
                    logo: TaikaiWeb.src,
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
                    logo: AptosWeb.src,
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
                    logo: TaikaiWeb.src,
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
                duration: "40 mins",
                title: "TBA",
                speaker: {
                    name: "David TSE",
                    title: "Co-founder",
                    logo: BabylonWeb.src,
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
                logo: CitreaWeb.src,
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
        events: [
            {
                id: "16",
                time: "10:40 am",
                duration: "20 mins",
                title: "AI X STABLECOINS",
                speaker: {
                    name: "Melike Keçelioğlu",
                    title: "Technical Lead",
                    logo: AptosWeb.src,
                    image: MelikeKecelioglu.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "17",
                time: "11:00 am",
                duration: "20 mins",
                title: "UNLOCKING MULTICHAIN LIQUIDITY WITH AVAIL NEXUS",
                speaker: {
                    name: "Don Mills",
                    title: "Product Lead",
                    logo: TaikaiWeb.src,
                    image: DanMills.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "18",
                time: "11:20 am",
                duration: "20 mins",
                title: "GAS TO ZERO",
                speaker: {
                    name: "Filip Pajić",
                    title: "Engineer",
                    logo: AptosWeb.src,
                    image: FilipPajic.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "19",
                time: "11:40 am",
                duration: "1 hr",
                title: "BREAK",
                type: "break",
                stage: "B",
            },
            {
                id: "20",
                time: "12:40 pm",
                duration: "20 mins",
                title: "PERMISSIONED SHARDS MEET PUBLIC DEFI: ATOMIC SETTLEMENT IN 15",
                speaker: {
                    name: "Nicky Chelebi",
                    title: "CBO",
                    logo: TaikaiWeb.src,
                    image: NickyChalabi.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "21",
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
                id: "22",
                time: "01:20 pm",
                duration: "20 mins",
                title: "THE DAWN OF TYPE III STABLECOINS",
                speaker: {
                    name: "Defi Dave",
                    title: "Head of Growth",
                    logo: AptosWeb.src,
                    image: DefiDave.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "23",
                time: "01:40 pm",
                duration: "20 mins",
                title: "SCALING PERPETUAL TRADING WITH ZK PROOFS",
                speaker: {
                    name: "Furkan Doğan",
                    title: "Product Lead",
                    logo: TaikaiWeb.src,
                    image: FurkanDogan.src,
                },
                type: "talk",
                stage: "B",
            },
            {
                id: "24",
                time: "02:00 pm",
                duration: "1 hr",
                title: "BREAK",
                type: "break",
                stage: "B",
            },
            {
                id: "25",
                time: "03:00 pm",
                duration: "40 mins",
                title: "CRYPTO&FINTECH IN TÜRKIYE",
                speaker: {
                    name: "Tethor, Invertor, Paribu, Fintables",
                    title: "Panel",
                    logo: "",
                    image: "",
                },
                type: "panel",
                stage: "B",
            },
            {
                id: "26",
                time: "03:40 pm",
                duration: "20 mins",
                title: "TBA",
                logo: LedgerWeb.src,
                type: "talk",
                stage: "B",
            },
            {
                id: "27",
                time: "04:00 pm",
                duration: "20 mins",
                title: "TBA",
                type: "talk",
                stage: "B",
            },
        ],
    },
    {
        day: "Sunday",
        date: "September 7",
        events: [
            {
                id: "28",
                time: "10:00 am",
                duration: "1 hr",
                title: "HACKATHON FINAL PRESENTATIONS",
                type: "talk",
                stage: "A",
            },
            {
                id: "29",
                time: "11:00 am",
                duration: "1 hr",
                title: "JUDGING & AWARDS",
                type: "talk",
                stage: "A",
            },
            {
                id: "30",
                time: "12:00 pm",
                duration: "1 hr",
                title: "CLOSING CEREMONY",
                type: "closing",
                stage: "A",
            },
        ],
    },
];

export default scheduleData;
