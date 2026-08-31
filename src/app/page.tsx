import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import FocusAreas from "@/components/FocusAreas";
import PoliticalJourney from "@/components/PoliticalJourney";
import SocialWork from "@/components/SocialWork";
import Media from "@/components/Media";
import CTABanner from "@/components/CTABanner";
export default function Home() {
  return (
    <main className="flex-1">
        <Hero />
        <About />
        <Achievements />
        <FocusAreas />
        <PoliticalJourney />
        <SocialWork />
        <Media />
        <CTABanner />
      </main>
  );
}
