/** @format */

import FeaturedFleet from "@/components/HomeComponents/FeaturedFleet";
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

      {/* featured fleet section */}
      <FeaturedFleet />

      {/* stats and form section */}
      <StatsAndForm />
    </div>
  );
}
