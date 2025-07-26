import ContributorsWrapper from "@/components/contributors/ContributorsWrapper";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import Partners from "@/components/partners/partners";
import Sponsors from "@/components/sponsors/sponsors";
import FooterImage from "@/components/FooterImage";
import ClientPageWrapper from "@/components/ClientPageWrapper";

export default function Home() {
  return (
    <ClientPageWrapper>
      <main className="relative">
        <HeroSection />
        <ContributorsWrapper />
        <Sponsors />
        <Partners />
        <FAQ />

        <div className="relative bg-[#D5FFCA]">
          <FooterImage />
          <div className="relative">
            <Footer />
          </div>
        </div>
      </main>
    </ClientPageWrapper>
  );
}
