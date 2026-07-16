import { HeroSection } from "@/components/sections/hero";
import { AboutCompanySection } from "@/components/sections/about-company";
import { ClientLogosSection } from "@/components/sections/client-logos";
import { StatsBrandsSection } from "@/components/sections/stats-brands";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { OurClientsSection } from "@/components/sections/our-clients";
import { FeaturedIndustriesSection } from "@/components/sections/featured-industries";
import { OurTeamSection } from "@/components/sections/our-team";
import { CtaSection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutCompanySection />

      <StatsBrandsSection />
      <CapabilitiesSection />
      <OurClientsSection />
      <FeaturedIndustriesSection />
      <OurTeamSection />
      <ClientLogosSection />
      <CtaSection />
    </>
  );
}
