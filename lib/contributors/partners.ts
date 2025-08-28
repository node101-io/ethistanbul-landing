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
import Coinzonia from "@/assets/partners/coinzonia";
import EthBelgrade from "@/assets/partners/ethbelgrade";
import EthCluj from "@/assets/partners/ethcluj";
import Coinkolik from "@/assets/partners/coinkolik";
import Sero from "@/assets/partners/sero";
import YTUBlockchain from "@/assets/partners/yildiz-blockchain.png";
import ITUBlockchain from "@/assets/partners/itu-blockchain.png";
import ODTUBlockchain from "@/assets/partners/odtu-blockchain.png";
import ITUBlockchainHover from "@/assets/partners/itu-blockchain-hover.png";
import ODTUBlockchainHover from "@/assets/partners/odtu-blockchain-hover.png";
import YTUBlockchainHover from "@/assets/partners/yildiz-blockchain-hover.png";
import IYTEBlockchain from "@/assets/partners/iyte-blockchain.png";
import IYTEBlockchainHover from "@/assets/partners/iyte-blockchain-hover.png";
import MEFBlockchain from "@/assets/partners/mef-blockchain.png";
import MEFBlockchainHover from "@/assets/partners/mef-blockchain-hover.png";

interface Partner {
  name: string;
  logo: React.ComponentType<any> | StaticImageData;
  website: string;
  color?: string;
  hoverLogo?: React.ComponentType<any> | StaticImageData;
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
  {
    name: "ETH Belgrade",
    logo: EthBelgrade,
    website: "https://ethbelgrade.rs/",
  },
  {
    name: "ETHCluj",
    logo: EthCluj,
    website: "https://www.ethcluj.org/",
  },
  {
    name: "Sero",
    logo: Sero,
    website: "https://se.ro/events",
  }
];

const mediaPartners: Partner[] = [
  {
    name: "CryptoDataSpace",
    logo: CrpytoDataSpace,
    website: "https://cryptodataspace.com/",
  },
  {
    name: "Coinzonia",
    logo: Coinzonia,
    website: "",
  },
  {
    name: "Coinkolik",
    logo: Coinkolik,
    website: "",
  }
];

const talentPartners: Partner[] = [
  {
    name: "ITÜ Blockchain",
    logo: ITUBlockchain,
    hoverLogo: ITUBlockchainHover,
    website: "https://www.itublockchain.com/",
  },
  {
    name: "ODTÜ Blockchain",
    logo: ODTUBlockchain,
    hoverLogo: ODTUBlockchainHover,
    website: "https://x.com/DaysBlockchain",
  },
  {
    name: "YTÜ Blockchain",
    logo: YTUBlockchain,
    hoverLogo: YTUBlockchainHover,
    website: "https://linktr.ee/blockchainytu",
  },
  {
    name: "Iztech Blockchain",
    logo: IYTEBlockchain,
    hoverLogo: IYTEBlockchainHover,
    website: "https://iyteblockchain.com/#contact",
  },
  {
    name: "MEF Blockhain",
    logo: MEFBlockchain,
    hoverLogo: MEFBlockchainHover,
    website: "https://x.com/MEFblockchain",
  }
];

const partnersData = {
  communityPartners,
  mediaPartners,
  talentPartners,
};

export default partnersData;
