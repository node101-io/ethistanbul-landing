import { StaticImageData } from "next/image";

export type ContributorType = "Speakers" | "Judges" | "Mentors";

export interface Contributor {
  name: string;
  company: string;
  image: string | StaticImageData;
  type: ContributorType;
  presentationTitle?: string;
  twitter?: string;
  linkedin?: string;
}
