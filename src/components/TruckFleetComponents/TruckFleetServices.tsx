/** @format */
"use client";
import React, { useState, useMemo } from "react";
import { useGetTruckFleetQuery } from "@/redux/features/truckFleetApi";
import VehicleCard from "../CommonComponents/VehicleCard";

const TruckFleetServices = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { data, isLoading, isError } = useGetTruckFleetQuery();

  const filters = ["All", "Body Trucks", "Excavator", "Machinery"];

  // Filter trucks based on active category
  const filteredTrucks = useMemo(() => {
    if (!data?.data) return [];
    if (activeFilter === "All") return data.data;
    return data.data.filter((truck) => truck.category.name === activeFilter);
  }, [data, activeFilter]);

  if (isLoading) {
    return (
      <div className="py-6 md:py-8 lg:py-12 xl:py-16 mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="text-center text-primary">Loading truck fleet...</div>
      </div>
    );
  }

  if (isError || !data?.success) {
    return (
      <div className="py-6 md:py-8 lg:py-12 xl:py-16 mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="text-center text-primary">
          Unable to load truck fleet. Please try again later.
        </div>
      </div>
    );
  }

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
        {filteredTrucks.length === 0 ? (
          <div className="text-center text-primary py-8">
            No trucks found for this category.
          </div>
        ) : (
          <div className="flex flex-col md:flex-row  flex-wrap  gap-4 sm:gap-8 md:gap-12 xl:gap-16  items-center justify-center">
            {filteredTrucks.map((truck) => (
              <VehicleCard key={truck.id} vehicle={truck} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default TruckFleetServices;
