/** @format */

import React from "react";
import MaterialCard from "./SubComponents/MaterialCard";
import { sandGravelConcreteData } from "@/data/materialData";

const MaterialSection = () => {
  return (
    <section className="bg-background py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-8 md:mb-12">
          Sand, Gravel & Recycled Concrete
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sandGravelConcreteData.map((material, index) => (
            <MaterialCard key={index} material={material} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialSection;
