/** @format */

import HeroSection from "@/components/homeComponents/hero";
import Services from "@/components/homeComponents/services";

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero section */}
      <HeroSection />

      {/* Service Section */}
      <Services />
    </div>
  );
}
