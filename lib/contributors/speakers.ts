import { StaticImageData } from "next/image";
import FigmaPic from "@/assets/figma_pic.png";
import LucaDonnoh from "@/assets/contributors/speakers/luca_donnoh.png";
import DavideRezzoli from "@/assets/contributors/speakers/davide_rezzoli.png";

interface Speakers {
  name: string;
  company: string;
  image: string | StaticImageData;
  type: "Speakers";
  presentationTitle: string;
  twitter?: string;
  linkedin?: string;
}

const speakers: Speakers[] = [
  {
    name: "Luca Donnoh",
    company: "L2Beat, Researcher",
    image: LucaDonnoh,
    type: "Speakers",
    presentationTitle: "Formal modelling of stages in a prolog-like language",
    twitter: "https://x.com/donnoh_eth?s=21",
  },
  {
    name: "Davide Rezzoli",
    company: "PBS Foundation, Researcher",
    image: DavideRezzoli,
    type: "Speakers",
    presentationTitle: "How Taiko Lost $10M in Just 10 Days",
    twitter: "https://x.com/0xseiryu?s=21",
  },
  {
    name: "Justin Drake",
    company: "EF, Researcher",
    image: FigmaPic,
    type: "Speakers",
    presentationTitle: "",
  },
  {
    name: "Rahul Kothari",
    company: "Aztec, Product",
    image: FigmaPic,
    type: "Speakers",
    presentationTitle: "",
  },
  {
    name: "Marek Olszewski",
    company: "Budapest University, PhD",
    image: FigmaPic,
    type: "Speakers",
    presentationTitle: "Broken Randomness in Ethereum Consensus",
  },
  {
    name: "Ahmad",
    company: "Nethermind, Researcher",
    image: FigmaPic,
    type: "Speakers",
    presentationTitle: "",
  },
];

export default speakers;
