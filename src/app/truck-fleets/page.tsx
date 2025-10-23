/** @format */

import CTAsection from "@/components/TruckFleetsComponents/CTASection";
import CommonHero from "@/components/Common/CommonHero";
import TruckFleetsServices from "@/components/TruckFleetsComponents/TruckFleetsServices";

import React from "react";

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
      <TruckFleetsServices />

      {/* CTA Section */}
      <CTAsection />
    </div>
  );
};

export default TruckFleetsPage;
