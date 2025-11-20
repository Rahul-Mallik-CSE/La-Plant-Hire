/** @format */

"use client";

import React from "react";
import MaterialCard from "./SubComponents/MaterialCard";
import { useGetMaterialsQuery } from "@/redux/features/materialApi";

const SoilSection = () => {
  const { data, isLoading, isError } = useGetMaterialsQuery();

  // Get last 3 items for Our Soils
  const soils = data?.data?.slice(3, 6) || [];

  if (isLoading) {
    return (
      <section className="py-6 md:py-8 lg:py-12 xl:py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="text-center text-primary">Loading soils...</div>
        </div>
      </section>
    );
  }

  if (isError || !data?.success) {
    return (
      <section className="py-6 md:py-8 lg:py-12 xl:py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="text-center text-primary">
            Unable to load soils. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary text-center mb-8 md:mb-12">
          Our Soils
        </h2>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center  gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {soils.map((soil) => (
            <MaterialCard key={soil.id} material={soil} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoilSection;
