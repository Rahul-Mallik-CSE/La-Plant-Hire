/** @format */
"use client";
import React, { useState } from "react";

import { trucks } from "@/data/truckfleetData";
import VehicleCard from "../CommonComponents/VehicleCard";

const TruckFleetServices = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Body trucks", "Twin steers", "Machinery"];
  return (
    <div className="py-6 md:py-8 lg:py-12 xl:py-16 mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
      <section className="max-w-7xl mx-auto px-4 pb-6 sm:pb-8 md:pb-12 ">
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer px-2 sm:px-3 md:px-4 py-0 sm:py-0.5 md:py-1 rounded-full font-medium transition ${
                activeFilter === filter
                  ? "bg-[#121221] text-white"
                  : "bg-white border-2 border-[#c4c4c8] text-[#121221] hover:border-[#121221]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Trucks Grid */}
      <section className="max-w-full mx-auto px-4 ">
        <div className="flex flex-col md:flex-row  flex-wrap  gap-4 sm:gap-8 md:gap-12 xl:gap-16  items-center justify-center">
          {trucks.map((truck) => (
            <VehicleCard key={truck.title} vehicle={truck} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TruckFleetServices;
