/** @format */

import CTAsection from "@/components/TruckFleetComponents/CTASection";
import CommonHero from "@/components/CommonComponents/CommonHero";

import React from "react";
import TruckFleetServices from "@/components/TruckFleetComponents/TruckFleetServices";

const TruckFleetsPage = () => {
  return (
    <div>
      {/*hero section */}
      <CommonHero
        title="Our fleets of 10+ trucks"
        description="Professional grade trucks for every hauling need. From single body trucks to heavy-duty truck and dog combinations, we have the right vehicle for your project."
        bgColor="bg-background2"
      />

      {/* TruckFleetsServices section */}
      <TruckFleetServices />

      {/* CTA Section */}
      <CTAsection />
    </div>
  );
};

export default TruckFleetsPage;
