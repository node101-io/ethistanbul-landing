import { StaticImageData } from "next/image";
import Abdullah from "@/assets/contributors/mentors/abdullah.png";
import AbdullahTalayahan from "@/assets/contributors/mentors/abdullah_talayhan.png";
import AdnanDeniz from "@/assets/contributors/mentors/adnan_deniz.png";
import RamazanAgirtas from "@/assets/contributors/mentors/ramazan.png";
import AlicanAlasik from "@/assets/contributors/mentors/alican_alasik.png";
import BilginKocak from "@/assets/contributors/mentors/bilgin_kocak.png";
import ErayKocak from "@/assets/contributors/mentors/eray_kocak.png";
import ErhanTezcan from "@/assets/contributors/mentors/erhan_tezcan.png";
import Errol from "@/assets/contributors/mentors/errol.png";
import FuraknAkal from "@/assets/contributors/mentors/furkan_akal.png";
import Junger from "@/assets/contributors/mentors/junger.png";
import KaanUzadogan from "@/assets/contributors/mentors/kaan_uzadogan.png";
import MehmetGonen from "@/assets/contributors/mentors/mehmet_gonen.png";
import MuahmmetTanrikulu from "@/assets/contributors/mentors/muhammet_tanikulu.png";
import MustafaKircali from "@/assets/contributors/mentors/mustafa_kircali.png";
import OguzYayla from "@/assets/contributors/mentors/oguz_yayla.png";
import OmerYanar from "@/assets/contributors/mentors/omer_yanar.png";
import OrkunKulce from "@/assets/contributors/mentors/orkun_kulce.png";
import UgurSen from "@/assets/contributors/mentors/ugur_sen.png";
import YamanCan from "@/assets/contributors/mentors/yaman_can.png";
import YigitKilicoglu from "@/assets/contributors/mentors/yigit_kilicoglu.png";
import YunusGurlek from "@/assets/contributors/mentors/yunus_gurlek.png";
import IsaSertkaya from "@/assets/contributors/mentors/isa_sertkaya.png";

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
    name: "Kaan Uzadoğan",
    company: "Sourcify",
    image: KaanUzadogan,
    type: "Mentors",
    twitter: "https://x.com/kaanuzdogan?s=21&t=_622jfOfGQKD0pLPsXnjKg",
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
];
export default mentors;
