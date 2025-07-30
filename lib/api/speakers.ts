import { StaticImageData } from "next/image";
import FigmaPic from "@/assets/figma_pic.png";
import LucaDonnoh from "@/assets/contributors/speakers/luca_donnoh.png";
import DavideRezzoli from "@/assets/contributors/speakers/davide_rezzoli.png";
import AkakiMamageishvili from "@/assets/contributors/speakers/akaki_mamageishvili.png";
import DanMills from "@/assets/contributors/speakers/dan_mills.png";
import FilipPajic from "@/assets/contributors/speakers/filip_pajic.png";
import MartinetLee from "@/assets/contributors/speakers/martinet_lee.png";
import MelikeKececioglu from "@/assets/contributors/speakers/melike_kececioglu.png";
import Miszke from "@/assets/contributors/speakers/miszke.png";
import IstvanAndreasSeres from "@/assets/contributors/speakers/istvan_andreas_seres.png";

export interface Speaker {
  name: string;
  company: string;
  image: string | StaticImageData;
  type: "Speakers";
  presentationTitle: string;
  twitter?: string;
  linkedin?: string;
}

export interface SpeakersApiResponse {
  speakers: Speaker[];
  lastUpdated: string;
}

const speakerImageMap: Record<string, StaticImageData> = {
  "Luca Donnoh": LucaDonnoh,
  "Davide Rezzoli": DavideRezzoli,
  "Akaki Mamageishvili": AkakiMamageishvili,
  "Dan Mills": DanMills,
  "Filip Pajić": FilipPajic,
  "Martinet Lee": MartinetLee,
  "Melike Keçecioğlu": MelikeKececioglu,
  "Miszke": Miszke,
  "Istvan Andreas Seres": IstvanAndreasSeres,
  // "Ahmad Bitar": a,
  // "Arnaud Schenk": a,
  // "Nicky Chelebi": a,
  // "Kassandra": a,
  // "Greg": a,
  // "Sami": a,
  // "Defi Dave": a,
};

export async function fetchSpeakersData(): Promise<SpeakersApiResponse> {
  const PublicGoogleSheetsParser = (await import('public-google-sheets-parser')).default;

  const spreadsheetId = '1Y7_M1geakyWfUARdjWv5V073lblMnr1r6FUQWEr09xY';
  const parser = new PublicGoogleSheetsParser(spreadsheetId);

  const data = await parser.parse();

  const speakers: Speaker[] = data.map((row: any) => {
    const speakerName = row.NAME || 'Unknown';
    const speakerImage = speakerImageMap[speakerName];

    if (!speakerImage && speakerName !== 'Unknown') {
      console.warn(`⚠️  Missing image for speaker: "${speakerName}" - Add to speakerImageMap`);
    }

    return {
      name: speakerName,
      company: row['COMPANY AND TITLE'] || 'Unknown Company',
      image: speakerImage || FigmaPic,
      type: "Speakers" as const,
      presentationTitle: row['PRESENTATION TITLE'] || '',
      twitter: row['TWITTER URL'] || undefined,
      linkedin: row['LINKEDIN URL'] || undefined,
    };
  });

  return {
    speakers,
    lastUpdated: new Date().toISOString(),
  };
}

export async function getSpeakersWithFallback(): Promise<Speaker[]> {
  const data = await fetchSpeakersData();
  return data.speakers;
}