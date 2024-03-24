import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import StickyScroll from "@/components/StickyScroll";
import ReviewCards from "@/components/ReviewCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WaveBackground from "@/components/WaveBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <StickyScroll />
      <ReviewCards />
      <UpcomingWebinars />
      <WaveBackground />
    </main>
  );
}
