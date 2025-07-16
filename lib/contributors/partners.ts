import Node101 from "@/assets/partners/node101";
import Citrea from "@/assets/partners/citrea";
import Ethsofia from "@/assets/partners/ethsofia";
import Modapalas from "@/assets/partners/modapalas";
import { StaticImageData } from "next/image";
import Bratislava from "@/assets/partners/bratislava";
import EthVietnam from "@/assets/partners/ethvietnam";
import Metahub from "@/assets/partners/metahub";
import Zukas from "@/assets/partners/zukas";
import CrpytoDataSpace from "@/assets/partners/cryptodata";

interface Partner {
  name: string;
  logo: React.ComponentType<any> | StaticImageData;
  website: string;
  color?: string;
}

const communityPartners: Partner[] = [
  {
    name: "node101",
    logo: Node101,
    website: "https://node101.io",
    color: "#DFE5FF",
  },
  {
    name: "Citrea",
    logo: Citrea,
    website: "https://citrea.xyz/",
    color: "#FDBA0D",
  },
  {
    name: "ModaPalas",
    logo: Modapalas,
    website: "https://www.x.com/modapalas",
    color: "#FC4000",
  },
  {
    name: "EthSofia",
    logo: Ethsofia,
    website: "https://www.ethsofia.com/",
    color: "#E2C2FF",
  },
  {
    name: "EthBratislava",
    logo: Bratislava,
    website: "https://ethbratislava.com/",
    color: "#000000",
  },
  {
    name: "EthVietnam",
    logo: EthVietnam,
    website: "https://www.eth-vietnam.com/",
  },
  {
    name: "Metahub",
    logo: Metahub,
    website: "https://linktr.ee/web3hubkas",
  },
  {
    name: "Zukaş",
    logo: Zukas,
    website: "",
  },
];

const mediaPartners: Partner[] = [
  {
    name: "CryptoDataSpace",
    logo: CrpytoDataSpace,
    website: "https://cryptodataspace.com/",
  },
];

const partnersData = {
  communityPartners,
  mediaPartners,
};

export default partnersData;
