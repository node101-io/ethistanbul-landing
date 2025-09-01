import { StaticImageData } from "next/image";
import FigmaPic from "@/assets/figma_pic.png";
import DenizBas from "@/assets/contributors/judges/deniz_bas.jpeg";
import MelikeKecelioğlu from "@/assets/contributors/speakers/melike_kecelioglu.png";
import RamazanAgirtas from "@/assets/contributors/mentors/ramazan.webp";
import YunusGurlek from "@/assets/contributors/mentors/yunus_gurlek.webp";
import EmrePiconbello from "@/assets/contributors/judges/emre.jpg";
import Junger from "@/assets/contributors/mentors/junger.webp";
import ErayAcikgoz from "@/assets/contributors/judges/eray_acikgoz.jpeg";
import BilginKocak from "@/assets/contributors/judges/bilgin_kocak.jpg";
import KatherineStefanovich from "@/assets/contributors/judges/katerina.jpg";
interface Judges {
  name: string;
  company: string;
  image: string | StaticImageData;
  type: "Judges";
  twitter?: string;
  linkedin?: string;
  expertise?: string;
}

const judges: Judges[] = [
  {
    name: "Deniz Baş",
    company: "o1Labs",
    image: DenizBas,
    type: "Judges",
    twitter: "https://x.com/d0x471b",
    linkedin: "",
    expertise: ""
  },
  {
    name: "Melike Keçelioğlu",
    company: "Piku",
    image: MelikeKecelioğlu,
    type: "Judges",
    twitter: "https://x.com/melkecelioglu",
    linkedin: "",
    expertise: ""
  },
  {
    name: "Ahmet Ramazan Ağırtaş",
    company: "prev. Nethermind",
    image: RamazanAgirtas,
    type: "Judges",
    twitter: "https://x.com/rmzcrypt",
    linkedin: "",
    expertise: ""
  },
  {
    name: "Yunus Gürlek",
    company: "node101",
    image: YunusGurlek,
    type: "Judges",
    twitter: "https://x.com/yunusguerlek",
    linkedin: "",
    expertise: ""
  },
  {
    name: "Emre",
    company: "Piconbello",
    image: EmrePiconbello,
    type: "Judges",
    twitter: "",
    linkedin: "",
    expertise: ""
  },
  {
    name: "Jünger",
    company: "RISE",
    image: Junger,
    type: "Judges",
    twitter: "https://x.com/Junger0x",
    linkedin: "",
    expertise: ""
  },
  {
    name: "Eray Açıkgöz",
    company: "Graph",
    image: ErayAcikgoz,
    type: "Judges",
    twitter: "https://x.com/erayajk",
    linkedin: "",
    expertise: ""
  },
  {
    name: "Bilgin Koçak",
    company: "",
    image: BilginKocak,
    type: "Judges",
    twitter: "https://x.com/KocakBilgin",
    linkedin: "",
    expertise: ""
  },
  {
    name: "Katherine Stefanových",
    company: "Yellow",
    image: KatherineStefanovich,
    type: "Judges",
    twitter: "https://x.com/KStefanovych",
    linkedin: "",
    expertise: ""
  }
];

export default judges;
