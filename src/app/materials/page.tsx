/** @format */

import CommonHero from "@/components/Common/CommonHero";

import AboutAndForm from "@/components/MaterialsComponents.tsx/AboutAndForm";
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

      {/* about and form section */}
      <AboutAndForm />
    </div>
  );
};

export default MaterialPage;
