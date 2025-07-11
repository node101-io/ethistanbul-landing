import Node101 from "@/assets/partners/node101";
import node101Web from "@/assets/partners/node101-web.png";
import Citrea from "@/assets/partners/citrea";
import citreaWeb from "@/assets/partners/citrea-web.png";
import Ethsofia from "@/assets/partners/ethsofia";
import ethsofiaWeb from "@/assets/partners/ethsofia-web.png";
import Modapalas from "@/assets/partners/modapalas";
import modapalasWeb from "@/assets/partners/modapalas-web.png";
import { StaticImageData } from "next/image";
import Bratislava from "@/assets/partners/bratislava";
import bratislavaWeb from "@/assets/partners/bratislava-web.png";
import EthVietnam from "@/assets/partners/ethvietnam";
import ethvietnamWeb from "@/assets/partners/ethvietnam-web.png";

interface Partner {
  name: string;
  logo: React.ComponentType<any> | StaticImageData;
  hoverImage?: StaticImageData;
  website: string;
  color?: string;
}

const partners: Partner[] = [
  {
    name: "Node101",
    logo: Node101,
    hoverImage: node101Web,
    website: "https://node101.io",
    color: "#DFE5FF",
  },
  {
    name: "Citrea",
    logo: Citrea,
    hoverImage: citreaWeb,

    website: "https://citrea.xyz/",
    color: "#FDBA0D",
  },
  {
    name: "ModaPalas",
    logo: Modapalas,
    hoverImage: modapalasWeb,
    website: "https://www.x.com/modapalas",
    color: "#FC4000",
  },
  {
    name: "EthSofia",
    logo: Ethsofia,
    hoverImage: ethsofiaWeb,
    website: "https://www.ethsofia.com/",
    color: "#E2C2FF",
  },
  {
    name: "EthBratislava",
    logo: Bratislava,
    hoverImage: bratislavaWeb,
    website: "https://ethbratislava.com/",
    color: "#000000",
  },
  {
    name: "EthVietnam",
    logo: EthVietnam,
    hoverImage: ethvietnamWeb,
    website: "https://www.eth-vietnam.com/",
  },
];

export default partners;
