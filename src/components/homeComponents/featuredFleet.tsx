/** @format */

import { vehicles } from "@/data/homeData";
import type { Vehicle } from "@/types/AllHomeTypes";
import VehicleCard from "../Common/VehicleCard";

export default function FeaturedFleet() {
  return (
    <section className="pb-6 md:pb-8 lg:pb-12 xl:pb-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          <p className="text-primary/80 text-xs md:text-base lg:text-xl font-medium sm:font-bold uppercase tracking-wide mb-1 md:mb-2">
            FEATURED FLEET
          </p>
          <h2 className="text-xs md:text-sm text-primary">
            Our premium vehicles ready for your next project.
          </h2>
        </div>

        {/* Vehicle Cards */}
        <div className="flex flex-col md:flex-row  flex-wrap gap-4 xl:gap-12 2xl:gap-32 w-full items-center justify-center ">
          {vehicles.map((vehicle: Vehicle, index: number) => (
            <VehicleCard key={index} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
