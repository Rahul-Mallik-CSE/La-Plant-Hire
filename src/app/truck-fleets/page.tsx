/** @format */

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
    </div>
  );
};

export default TruckFleetsPage;
