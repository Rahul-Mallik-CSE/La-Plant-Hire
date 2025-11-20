/** @format */

import CommonHero from "@/components/CommonComponents/CommonHero";
import CombineSections from "@/components/MaterialsComponents.tsx/CombineSections";
import React from "react";

const MaterialPage = () => {
  return (
    <div>
      {/* hero section */}
      <CommonHero
        title="Materials We Supply"
        description="Sand, Gravel, Recycled Concrete, and Soil for All Your Projects."
        bgColor="bg-[#1E1614]"
        textColor="text-white"
      />

      <CombineSections />
    </div>
  );
};

export default MaterialPage;
