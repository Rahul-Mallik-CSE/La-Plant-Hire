/** @format */

import CTAsection from "@/components/truckfleetsComponents/CTAsection";
import TruckFleetsHero from "@/components/truckfleetsComponents/truck-fleets-hero";
import TruckFleetsServices from "@/components/truckfleetsComponents/truck-fleets-services";

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
