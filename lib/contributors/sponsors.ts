import { StaticImageData } from "next/image";
import Babylon from "@/assets/sponsors/babylon";
import babylonWeb from "@/assets/sponsors/babylon-web.webp";
import Olas from "@/assets/sponsors/olas";
import olasWeb from "@/assets/sponsors/olas-web.webp";
import Taikai from "@/assets/sponsors/taikai";
import taikaiWeb from "@/assets/sponsors/taikai-web.webp";
import Rise from "@/assets/sponsors/rise";
import Citrea from "@/assets/sponsors/citrea";
import Ledger from "@/assets/sponsors/ledger";
import Bybit from "@/assets/sponsors/bybit";
import Yellow from "@/assets/sponsors/yellow";
import Aptos from "@/assets/sponsors/aptos";
import riseWeb from "@/assets/sponsors/rise-web.webp";
import citreaWeb from "@/assets/sponsors/citrea-web.webp";
import aptosWeb from "@/assets/sponsors/aptos-web.webp";
import ledgerWeb from "@/assets/sponsors/ledger-web.webp";
import bybitWeb from "@/assets/sponsors/bybit-web.webp";
import yellowWeb from "@/assets/sponsors/yellow-web.webp";

interface Sponsor {
  name: string;
  logo: React.ComponentType<any> | StaticImageData;
  hoverImage?: StaticImageData;
  website: string;
  color?: string;
  tier?: "premium" | "platinum" | "gold" | "silver" | "bronze";
  category: "conference" | "hackathon";
  size?: "xlarge" | "large" | "medium" | "small" | "xsmall";
}

const sponsors: Sponsor[] = [
  // Conference
  {
    name: "RISE",
    logo: Rise,
    hoverImage: riseWeb,
    website: "https://risechain.com",
    tier: "premium",
    category: "conference",
    size: "large",
  },
  {
    name: "Citrea",
    logo: Citrea,
    hoverImage: citreaWeb,
    website: "https://citrea.xyz",
    tier: "premium",
    category: "conference",
    size: "large",
  },
  {
    name: "Babylon",
    logo: Babylon,
    hoverImage: babylonWeb,
    website: "https://babylonlabs.io",
    tier: "premium",
    category: "conference",
    size: "large",
  },
  {
    name: "Ledger",
    logo: Ledger,
    hoverImage: ledgerWeb,
    website: "https://ledger.com",
    tier: "premium",
    category: "conference",
    size: "large",
  },
  {
    name: "BYBIT",
    logo: Bybit,
    hoverImage: bybitWeb,
    website: "https://bybit.com",
    tier: "premium",
    category: "conference",
    size: "large",
  },
  // Hackathon Platinum
  {
    name: "RISE",
    logo: Rise,
    hoverImage: riseWeb,
    website: "https://risechain.com",
    tier: "platinum",
    category: "hackathon",
    size: "xlarge",
  },
  // Hackathon Gold
  {
    name: "Citrea",
    logo: Citrea,
    hoverImage: citreaWeb,
    website: "https://citrea.xyz",
    tier: "gold",
    category: "hackathon",
    size: "medium",
  },
  {
    name: "Olas",
    logo: Olas,
    hoverImage: olasWeb,
    website: "https://olas.network",
    tier: "gold",
    category: "hackathon",
    size: "medium",
  },
  {
    name: "Taikai",
    logo: Taikai,
    hoverImage: taikaiWeb,
    website: "https://taikai.network",
    tier: "gold",
    category: "hackathon",
    size: "medium",
  },
  {
    name: "Yellow",
    logo: Yellow,
    hoverImage: yellowWeb,
    website: "https://yellow.org",
    tier: "gold",
    category: "hackathon",
    size: "medium",
  },
  // Hackathon Silver
  {
    name: "Babylon",
    logo: Babylon,
    hoverImage: babylonWeb,
    website: "https://babylonlabs.io",
    tier: "silver",
    category: "hackathon",
    size: "small",
  },
  {
    name: "APTOS",
    logo: Aptos,
    hoverImage: aptosWeb,
    website: "https://aptosfoundation.org",
    tier: "silver",
    category: "hackathon",
    size: "small",
  },
  {
    name: "Ledger",
    logo: Ledger,
    hoverImage: ledgerWeb,
    website: "https://ledger.com",
    tier: "silver",
    category: "hackathon",
    size: "small",
  },
  // Hackathon Bronze
];

export default sponsors;