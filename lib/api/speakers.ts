import { StaticImageData } from "next/image";
import FigmaPic from "@/assets/figma_pic.png";
import LucaDonnoh from "@/assets/contributors/speakers/luca_donnoh.png";
import DavideRezzoli from "@/assets/contributors/speakers/davide_rezzoli.png";
import AkakiMamageishvili from "@/assets/contributors/speakers/akaki_mamageishvili.png";
import DanMills from "@/assets/contributors/speakers/dan_mills.png";
import FilipPajic from "@/assets/contributors/speakers/filip_pajic.png";
import MartinetLee from "@/assets/contributors/speakers/martinet_lee.png";
import MelikeKecelioglu from "@/assets/contributors/speakers/melike_kecelioglu.png";
import Miszke from "@/assets/contributors/speakers/miszke.png";
import IstvanAndreasSeres from "@/assets/contributors/speakers/istvan_andreas_seres.png";
import AhmadBitar from "@/assets/contributors/speakers/ahmad_bitar.jpg";
import ArnaudSchenk from "@/assets/contributors/speakers/arnaud_schenk.png";
import NickyChalabi from "@/assets/contributors/speakers/nicky_chalabi.jpg";
import Kassandra from "@/assets/contributors/speakers/kassandra.jpg";
import Sami from "@/assets/contributors/speakers/sami.jpg";
import DefiDave from "@/assets/contributors/speakers/defi_dave.jpg";
import FurkanDogan from "@/assets/contributors/speakers/furkan_dogan.jpg";
import DavidTSE from "@/assets/contributors/speakers/david_tse.jpg";
import BurakOz from "@/assets/contributors/speakers/burak_oz.jpg";
import BerkaySecil from "@/assets/contributors/speakers/berkay_secil.jpg";
import ToghrulMaharramov from "@/assets/contributors/speakers/toghrul_maharramov.jpg";
import AlpErgin from "@/assets/contributors/speakers/alp_ergin.jpg";
import BurakBudak from "@/assets/contributors/speakers/burak_budak.jpg";
import YunusSahin from "@/assets/contributors/speakers/yunus_sahin.jpg";
import FisherYu from "@/assets/contributors/speakers/fisher_yu.jpeg";
// import MaximMerkulov from "@/assets/contributors/speakers/maxim_merkulov.jpg";

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
  "Melike Keçelioğlu": MelikeKecelioglu,
  "Miszke": Miszke,
  "Istvan Andreas Seres": IstvanAndreasSeres,
  "Ahmad Bitar": AhmadBitar,
  "Arnaud Schenk": ArnaudSchenk,
  "Nicky Chalabi": NickyChalabi,
  "Kassandra": Kassandra,
  "Sami": Sami,
  "Defi Dave": DefiDave,
  "Furkan Doğan": FurkanDogan,
  "David TSE": DavidTSE,
  "Burak Öz": BurakOz,
  "Berkay Seçil": BerkaySecil,
  "Toghrul Maharramov": ToghrulMaharramov,
  "Alp Ergin": AlpErgin,
  "Burak Budak": BurakBudak,
  "Yunus Şahin": YunusSahin,
  "Fisher Yu": FisherYu,
  // "Maxim Merkulov": MaximMerkulov,
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
  }).sort((a, b) => a.name.localeCompare(b.name));

  return {
    speakers,
    lastUpdated: new Date().toISOString(),
  };
}

export async function getSpeakersWithFallback(): Promise<Speaker[]> {
  const data = await fetchSpeakersData();
  return data.speakers;
}