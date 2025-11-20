/** @format */

import React from "react";
import MaterialSection from "./MaterialSection";
import SoilSection from "./SoilSection";
import AboutAndForm from "./AboutAndForm";

const CombineSections = () => {
  return (
    <div>
      <MaterialSection />

      <SoilSection />

      {/* about and form section */}
      <AboutAndForm />
    </div>
  );
};

export default CombineSections;
