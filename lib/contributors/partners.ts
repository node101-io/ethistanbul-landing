import node101 from "@/assets/partners/node101.svg";
import node101Web from "@/assets/partners/node101-web.png";
import citrea from "@/assets/partners/citrea.svg";
import citreaWeb from "@/assets/partners/citrea-web.png";
import ethsofia from "@/assets/partners/ethsofia.svg";
import ethsofiaWeb from "@/assets/partners/ethsofia-web.png";
import modapalas from "@/assets/partners/modapalas.svg";
import modapalasWeb from "@/assets/partners/modapalas-web.png";
import { StaticImageData } from "next/image";

interface Partner {
  name: string;
  logo: StaticImageData;
  hoverImage?: StaticImageData;
  website: string;
  color?: string;
}

const partners: Partner[] = [
  {
    name: "Node101",
    logo: node101,
    hoverImage: node101Web,
    website: "https://node101.io",
    color: "#DFE5FF",
  },
  {
    name: "Citrea",
    logo: citrea,
    hoverImage: citreaWeb,

    website: "https://citrea.xyz/",
    color: "#FDBA0D",
  },
  {
    name: "ModaPalas",
    logo: modapalas,
    hoverImage: modapalasWeb,
    website: "https://www.x.com/modapalas",
    color: "#FC4000",
  },
  {
    name: "EthSofia",
    logo: ethsofia,
    hoverImage: ethsofiaWeb,
    website: "https://www.ethsofia.com/",
    color: "#E2C2FF",
  },
];

export default partners;
