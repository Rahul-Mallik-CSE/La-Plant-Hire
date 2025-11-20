/** @format */

import FeaturedFleetAndStatsForm from "@/components/HomeComponents/FeaturedFleetAndStatsForm";
import HeroSection from "@/components/HomeComponents/Hero";
import Services from "@/components/HomeComponents/Services";

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
