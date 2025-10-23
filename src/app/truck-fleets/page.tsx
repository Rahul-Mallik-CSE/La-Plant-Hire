/** @format */

import CTAsection from "@/components/TruckFleetsComponents/CTASection";
import TruckFleetsHero from "@/components/TruckFleetsComponents/TruckFleetsHero";
import TruckFleetsServices from "@/components/TruckFleetsComponents/TruckFleetsServices";

import React from "react";

const TruckFleetsPage = () => {
  return (
    <div>
      {/*hero section */}
      <TruckFleetsHero />

      {/* TruckFleetsServices section */}
      <TruckFleetsServices />

      {/* CTA Section */}
      <CTAsection />
    </div>
  );
};

export default TruckFleetsPage;
