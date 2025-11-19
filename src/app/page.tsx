/** @format */

import FeaturedFleet from "@/components/HomeComponents/FeaturedFleet";
import FeaturedFleetAndStatsForm from "@/components/HomeComponents/FeaturedFleetAndStatsForm";
import HeroSection from "@/components/HomeComponents/Hero";
import Services from "@/components/HomeComponents/Services";
import StatsAndForm from "@/components/HomeComponents/StatsAndForm";

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero section */}
      <HeroSection />

      {/* Service Section */}
      <Services />

      {/* Featured Fleet and Stats/Form Section */}
      <FeaturedFleetAndStatsForm />
    </div>
  );
}
