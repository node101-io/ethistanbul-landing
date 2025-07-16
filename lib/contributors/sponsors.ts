import { StaticImageData } from "next/image";
import Babylon from "@/assets/sponsors/babylon";
import babylonWeb from "@/assets/sponsors/babylon-web.webp";
import Olas from "@/assets/sponsors/olas";
import olasWeb from "@/assets/sponsors/olas-web.webp";
import Taikai from "@/assets/sponsors/taikai";
import taikaiWeb from "@/assets/sponsors/taikai-web.webp";

interface Sponsor {
  name: string;
  logo: React.ComponentType<any> | StaticImageData;
  hoverImage?: StaticImageData;
  website: string;
  color?: string;
}

const sponsors: Sponsor[] = [
  {
    name: 'Babylon',
    logo: Babylon,
    hoverImage: babylonWeb,
    website: "https://babylonlabs.io",
    color: "#000000",
  },
  {
    name: 'Olas',
    logo: Olas,
    hoverImage: olasWeb,
    website: "https://olas.network",
    color: "#000000",
  },
  {
    name: 'Taikai',
    logo: Taikai,
    hoverImage: taikaiWeb,
    website: "https://taikai.network",
    color: "#000000",
  },
  // {
  //   name: "Node101",
  //   logo: Node101,
  //   hoverImage: node101Web,
  //   website: "https://node101.io",
  //   color: "#DFE5FF",
  // },
  // {
  //   name: "Citrea",
  //   logo: Citrea,
  //   hoverImage: citreaWeb,
  //   website: "https://citrea.xyz/",
  //   color: "#FDBA0D",
  // },
  // {
  //   name: "ModaPalas",
  //   logo: Modapalas,
  //   hoverImage: modapalasWeb,
  //   website: "https://www.x.com/modapalas",
  //   color: "#FC4000",
  // },
  // {
  //   name: "EthSofia",
  //   logo: Ethsofia,
  //   hoverImage: ethsofiaWeb,
  //   website: "https://www.ethsofia.com/",
  //   color: "#E2C2FF",
  // },
  // {
  //   name: "EthBratislava",
  //   logo: Bratislava,
  //   hoverImage: bratislavaWeb,
  //   website: "https://ethbratislava.com/",
  //   color: "#000000",
  // },
  // {
  //   name: "EthVietnam",
  //   logo: EthVietnam,
  //   hoverImage: ethvietnamWeb,
  //   website: "https://www.eth-vietnam.com/",
  // },
];

export default sponsors;