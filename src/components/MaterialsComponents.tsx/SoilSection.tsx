/** @format */

import React from "react";
import MaterialCard from "./SubComponents/MaterialCard";
import { soilsData } from "@/data/materialData";

const SoilSection = () => {
  return (
    <section className="p-6 md:p-8 lg:p-12 xl:p-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary text-center mb-8 md:mb-12">
          Our Soils
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {soilsData.map((soil, index) => (
            <MaterialCard key={index} material={soil} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoilSection;
