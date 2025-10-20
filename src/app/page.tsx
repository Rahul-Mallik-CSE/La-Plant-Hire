/** @format */

import FeaturedFleet from "@/components/homeComponents/featuredFleet";
import HeroSection from "@/components/homeComponents/hero";
import Services from "@/components/homeComponents/services";
import StatsAndForm from "@/components/homeComponents/stats-and-form";

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
