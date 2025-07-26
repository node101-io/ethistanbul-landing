import { getSpeakersWithFallback, Speaker } from "@/lib/api/speakers";
import Contributors from "./contributors";

const ContributorsWrapper = async () => {
  const speakers: Speaker[] = await getSpeakersWithFallback();

  return <Contributors speakers={speakers} />;
};

export default ContributorsWrapper;