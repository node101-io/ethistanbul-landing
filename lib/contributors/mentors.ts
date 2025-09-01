import { StaticImageData } from "next/image";
import Abdullah from "@/assets/contributors/mentors/abdullah.webp";
import AbdullahTalayahan from "@/assets/contributors/mentors/abdullah_talayhan.webp";
import AdnanDeniz from "@/assets/contributors/mentors/adnan_deniz.webp";
import RamazanAgirtas from "@/assets/contributors/mentors/ramazan.webp";
import AlicanAlasik from "@/assets/contributors/mentors/alican_alasik.webp";
import BilginKocak from "@/assets/contributors/mentors/bilgin_kocak.webp";
import ErayKocak from "@/assets/contributors/mentors/eray_kocak.webp";
import ErhanTezcan from "@/assets/contributors/mentors/erhan_tezcan.webp";
import Errol from "@/assets/contributors/mentors/errol.webp";
import FuraknAkal from "@/assets/contributors/mentors/furkan_akal.webp";
import Junger from "@/assets/contributors/mentors/junger.webp";
import MehmetGonen from "@/assets/contributors/mentors/mehmet_gonen.webp";
import MuahmmetTanrikulu from "@/assets/contributors/mentors/muhammet_tanikulu.webp";
import MustafaKircali from "@/assets/contributors/mentors/mustafa_kircali.webp";
import OguzYayla from "@/assets/contributors/mentors/oguz_yayla.webp";
import OmerYanar from "@/assets/contributors/mentors/omer_yanar.webp";
import OrkunKulce from "@/assets/contributors/mentors/orkun_kulce.webp";
import UgurSen from "@/assets/contributors/mentors/ugur_sen.webp";
import YigitKilicoglu from "@/assets/contributors/mentors/yigit_kilicoglu.webp";
import YunusGurlek from "@/assets/contributors/mentors/yunus_gurlek.webp";
import IsaSertkaya from "@/assets/contributors/mentors/isa_sertkaya.webp";
import YamanCan from "@/assets/contributors/mentors/yaman_can.webp";
import TalhaUnsal from "@/assets/contributors/mentors/talha_unsal.webp";
import OmerAksu from "@/assets/contributors/mentors/omer_aksu.jpg";
import HatunOzcan from "@/assets/contributors/mentors/hatun_ozcan.png";
import GoktugOguzGungor from "@/assets/contributors/mentors/goktug_oguz_gungor.jpg";
import KorayAkpinar from "@/assets/contributors/mentors/koray_akpinar.jpg";
import BerkayGuven from "@/assets/contributors/mentors/berkay_guven.jpeg";
import AliEkmekci from "@/assets/contributors/mentors/ali_ekmekci.jpg";

interface Mentors {
  name: string;
  company: string;
  image: string | StaticImageData;
  type: "Mentors";
  twitter?: string;
}

const mentors: Mentors[] = [
  {
    name: "Abdullah Eryuzlu",
    company: "UnionLabs",
    image: Abdullah,
    type: "Mentors",
    twitter: "https://x.com/aeryz2?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Abdullah Talayhan",
    company: "EPFL",
    image: AbdullahTalayahan,
    type: "Mentors",
    twitter: "https://x.com/talayhan_a?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Adnan Deniz Çorlu",
    company: "Omniflx",
    image: AdnanDeniz,
    type: "Mentors",
    twitter: "https://x.com/adenizcorlu?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "A. Ramazan Ağırtaş",
    company: "Nethermind",
    image: RamazanAgirtas,
    type: "Mentors",
    twitter: "https://x.com/rmzcrypt?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Alican Alaşık",
    company: "Crypto Economics Expert",
    image: AlicanAlasik,
    type: "Mentors",
    twitter: "https://x.com/alicanalasik?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Bilgin Koçak",
    company: "Nethermind",
    image: BilginKocak,
    type: "Mentors",
    twitter: "https://x.com/kocakbilgin?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Eray Açıkgöz",
    company: "DeFi Expert",
    image: ErayKocak,
    type: "Mentors",
    twitter: "https://x.com/erayajk?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Erhan Tezcan",
    company: "FirsthBatch",
    image: ErhanTezcan,
    type: "Mentors",
    twitter: "https://x.com/0xerhant?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Errol Drummond",
    company: "Terminal 3 Labs",
    image: Errol,
    type: "Mentors",
    twitter: "https://x.com/edgdrummond?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Furkan Akal",
    company: "Inco Network",
    image: FuraknAkal,
    type: "Mentors",
    twitter: "https://x.com/furkanakalcom?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "jünger",
    company: "Taiko",
    image: Junger,
    type: "Mentors",
    twitter: "https://x.com/junger0x?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Mehmet Gönen",
    company: "Cryptography Researcher",
    image: MehmetGonen,
    type: "Mentors",
    twitter: "https://x.com/0xmeming?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Muhammet Tanrıkulu",
    company: "ENS",
    image: MuahmmetTanrikulu,
    type: "Mentors",
    twitter: "https://x.com/md_tanrikulu?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Mustafa Kırcalı",
    company: "Cryptography PhD ODTU",
    image: MustafaKircali,
    type: "Mentors",
    twitter: "https://x.com/kircalimustafaa?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Oğuz Yayla",
    company: "ODTU",
    image: OguzYayla,
    type: "Mentors",
    twitter: "https://x.com/oguzyayla?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Ömer Yanar",
    company: "Stable Summit",
    image: OmerYanar,
    type: "Mentors",
    twitter: "https://x.com/arbnom?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Orkun Külçe",
    company: "Blockchain Dev",
    image: OrkunKulce,
    type: "Mentors",
    twitter: "https://x.com/orkunkl_?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Uğur Şen",
    company: "Cryptography Researcher",
    image: UgurSen,
    type: "Mentors",
    twitter: "https://x.com/ugursen188?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Yaman Can",
    company: "UI-UX",
    image: YamanCan,
    type: "Mentors",
    twitter: "https://x.com/yamancan_?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Yiğit Kılıçoğlu",
    company: "Yale Uni",
    image: YigitKilicoglu,
    type: "Mentors",
    twitter: "https://x.com/yigit_kilicoglu?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Yunus Gürlek",
    company: "node101",
    image: YunusGurlek,
    type: "Mentors",
    twitter: "https://x.com/yunusguerlek?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "İsa Sertkaya",
    company: "Silent Research Labs",
    image: IsaSertkaya,
    type: "Mentors",
    twitter: "https://x.com/isa_sertkaya?s=21&t=_622jfOfGQKD0pLPsXnjKg",
  },
  {
    name: "Talha Ünsal",
    company: "Community Growth",
    image: TalhaUnsal,
    type: "Mentors",
    twitter: "https://x.com/talhab62",
  },
  {
    name: "Berkay Güven",
    company: "Bitward",
    type: "Mentors",
    image: BerkayGuven,
  },
  {
    name: "Ömer Aksu",
    company: "",
    type: "Mentors",
    image: OmerAksu,
    twitter: "https://x.com/aksuomeer"
  },
  {
    name: "Hatun Özcan",
    company: "",
    type: "Mentors",
    image: HatunOzcan,
    twitter: "https://x.com/0xhatun"
  },
  {
    name: "Göktuğ Oğuz Güngör",
    company: "",
    type: "Mentors",
    image: GoktugOguzGungor,
  },
  {
    name: "Koray Akpınar",
    company: "",
    type: "Mentors",
    image: KorayAkpinar,
  },
  {
    name: "Ali Ekmekçi",
    company: "",
    type: "Mentors",
    image: AliEkmekci,
    twitter: ""
  }
];
export default mentors;
