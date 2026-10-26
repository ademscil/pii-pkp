import { HeroSlider } from "@/components/sections/hero-slider";
import { ServicesSection } from "@/components/sections/services";
import { BannerHighlight } from "@/components/sections/banner-highlight";
import { AboutSection } from "@/components/sections/about-section";
import { NewsGrid } from "@/components/sections/news-grid";
import { BenefitsCarousel } from "@/components/sections/benefits-carousel";
import { AgendaSlider } from "@/components/sections/agenda-slider";
import { PartnersGrid } from "@/components/sections/partners-grid";
import { DocumentsSection } from "@/components/sections/documents";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSlider />
      <ServicesSection />
      <BannerHighlight />
      <AboutSection />
      <NewsGrid />
      <BenefitsCarousel />
      <AgendaSlider />
      <PartnersGrid />
      <DocumentsSection />
    </div>
  );
}
