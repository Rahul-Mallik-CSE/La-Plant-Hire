/** @format */

import CommonHero from "@/components/CommonComponents/CommonHero";

import AboutAndForm from "@/components/MaterialsComponents.tsx/AboutAndForm";
import MaterialSection from "@/components/MaterialsComponents.tsx/MaterialSection";
import SoilSection from "@/components/MaterialsComponents.tsx/SoilSection";
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

      <MaterialSection />

      <SoilSection />

      {/* about and form section */}
      <AboutAndForm />
    </div>
  );
};

export default MaterialPage;
