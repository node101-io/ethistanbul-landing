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
  type: 'talk' | 'break' | 'panel' | 'opening' | 'closing';
  stage: 'A' | 'B';
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
          logo: "/assets/sponsors/rise-web.webp",
          image: "/assets/contributors/speakers/junger.webp"
        },
        type: "opening",
        stage: "A"
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
          image: "/assets/contributors/speakers/arnaud_schenk.png"
        },
        type: "talk",
        stage: "A"
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
          image: "/assets/contributors/speakers/miszke.png"
        },
        type: "talk",
        stage: "A"
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
          image: "/assets/contributors/speakers/akaki_mamageishvili.png"
        },
        type: "talk",
        stage: "A"
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
          image: "/assets/contributors/speakers/toghrul_maharramov.jpg"
        },
        type: "talk",
        stage: "A"
      },
      {
        id: "6",
        time: "11:40 am",
        duration: "1 hr",
        title: "BREAK",
        type: "break",
        stage: "A"
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
          image: "/assets/contributors/speakers/sami.jpg"
        },
        type: "talk",
        stage: "A"
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
          image: "/assets/contributors/speakers/burak_oz.jpg"
        },
        type: "talk",
        stage: "A"
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
          image: "/assets/contributors/speakers/istvanandreas_seres.png"
        },
        type: "talk",
        stage: "A"
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
          image: "/assets/contributors/speakers/martinet_lee.png"
        },
        type: "talk",
        stage: "A"
      },
      {
        id: "11",
        time: "02:00 pm",
        duration: "1 hr",
        title: "BREAK",
        type: "break",
        stage: "A"
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
          image: "/assets/contributors/speakers/david_tse.jpg"
        },
        type: "talk",
        stage: "A"
      },
      {
        id: "13",
        time: "03:20 pm",
        duration: "20 mins",
        title: "TBA",
        logo: "/assets/sponsors/citrea-web.webp",
        type: "talk",
        stage: "A"
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
          image: ""
        },
        type: "panel",
        stage: "A"
      },
      {
        id: "15",
        time: "04:20 pm",
        duration: "",
        title: "CLOSING",
        type: "closing",
        stage: "A"
      }
    ]
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
          logo: "/assets/sponsors/aptos-web.webp",
          image: "/assets/contributors/speakers/melike_kecelioglu.png"
        },
        type: "talk",
        stage: "B"
      },
      {
        id: "17",
        time: "11:00 am",
        duration: "20 mins",
        title: "UNLOCKING MULTICHAIN LIQUIDITY WITH AVAIL NEXUS",
        speaker: {
          name: "Don Mills",
          title: "Product Lead",
          logo: "/assets/sponsors/taikai-web.webp",
          image: "/assets/contributors/speakers/don_mills.png"
        },
        type: "talk",
        stage: "B"
      },
      {
        id: "18",
        time: "11:20 am",
        duration: "20 mins",
        title: "GAS TO ZERO",
        speaker: {
          name: "Filip Pajić",
          title: "Engineer",
          logo: "/assets/sponsors/aptos-web.webp",
          image: "/assets/contributors/speakers/filip_pajic.png"
        },
        type: "talk",
        stage: "B"
      },
      {
        id: "19",
        time: "11:40 am",
        duration: "1 hr",
        title: "BREAK",
        type: "break",
        stage: "B"
      },
      {
        id: "20",
        time: "12:40 pm",
        duration: "20 mins",
        title: "PERMISSIONED SHARDS MEET PUBLIC DEFI: ATOMIC SETTLEMENT IN 15",
        speaker: {
          name: "Nicky Chelebi",
          title: "CBO",
          logo: "/assets/sponsors/taikai-web.webp",
          image: "/assets/contributors/speakers/nicky_chalabi.jpg"
        },
        type: "talk",
        stage: "B"
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
          image: "/assets/contributors/speakers/kassandra.jpg"
        },
        type: "talk",
        stage: "B"
      },
      {
        id: "22",
        time: "01:20 pm",
        duration: "20 mins",
        title: "THE DAWN OF TYPE III STABLECOINS",
        speaker: {
          name: "Defi Dave",
          title: "Head of Growth",
          logo: "/assets/sponsors/aptos-web.webp",
          image: "/assets/contributors/speakers/defi_dave.jpg"
        },
        type: "talk",
        stage: "B"
      },
      {
        id: "23",
        time: "01:40 pm",
        duration: "20 mins",
        title: "SCALING PERPETUAL TRADING WITH ZK PROOFS",
        speaker: {
          name: "Furkan Doğan",
          title: "Product Lead",
          logo: "/assets/sponsors/taikai-web.webp",
          image: "/assets/contributors/speakers/furkan_dogan.jpg"
        },
        type: "talk",
        stage: "B"
      },
      {
        id: "24",
        time: "02:00 pm",
        duration: "1 hr",
        title: "BREAK",
        type: "break",
        stage: "B"
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
          image: ""
        },
        type: "panel",
        stage: "B"
      },
      {
        id: "26",
        time: "03:40 pm",
        duration: "20 mins",
        title: "TBA",
        logo: "/assets/sponsors/ledger-web.webp",
        type: "talk",
        stage: "B"
      },
      {
        id: "27",
        time: "04:00 pm",
        duration: "20 mins",
        title: "TBA",
        type: "talk",
        stage: "B"
      }
    ]
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
        stage: "A"
      },
      {
        id: "29",
        time: "11:00 am",
        duration: "1 hr",
        title: "JUDGING & AWARDS",
        type: "talk",
        stage: "A"
      },
      {
        id: "30",
        time: "12:00 pm",
        duration: "1 hr",
        title: "CLOSING CEREMONY",
        type: "closing",
        stage: "A"
      }
    ]
  }
];

export default scheduleData;
