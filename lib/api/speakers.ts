import { StaticImageData } from "next/image";
import FigmaPic from "@/assets/figma_pic.png";
import LucaDonnoh from "@/assets/contributors/speakers/luca_donnoh.png";
import DavideRezzoli from "@/assets/contributors/speakers/davide_rezzoli.png";

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
  // "Ahmad Bitar": a,
  // "Arnaud Schenk": a,
  // "Nicky Chelebi": a,
  // "Kassandra": a,
  // "Miszke": a,
  // "Akaki Mamageishvili": a,
  // "Melike Keçecioğlu": a,
  // "Istvan Andreas Seres": a,
  // "Greg": a,
  // "Dan Mills": a,
  // "Filip Pajić": a,
  // "Sami": a,
  // "Martinet Lee": a,
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