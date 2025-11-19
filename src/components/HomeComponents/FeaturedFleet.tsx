/** @format */

"use client";

import { useGetFeaturedFleetQuery } from "@/redux/features/featuredFleetApi";
import VehicleCard from "../CommonComponents/VehicleCard";

interface FeaturedFleetProps {
  onEnquiryClick?: (serviceName: string) => void;
}

export default function FeaturedFleet({ onEnquiryClick }: FeaturedFleetProps) {
  const { data, isLoading, isError } = useGetFeaturedFleetQuery();

  if (isLoading) {
    return (
      <section className="pb-6 md:pb-8 lg:pb-12 xl:pb-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <p className="text-primary/80 text-xs md:text-base lg:text-xl font-medium sm:font-bold uppercase tracking-wide mb-1 md:mb-2">
              FEATURED FLEET
            </p>
            <h2 className="text-xs md:text-sm text-primary">Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  if (isError || !data?.success) {
    return (
      <section className="pb-6 md:pb-8 lg:pb-12 xl:pb-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <p className="text-primary/80 text-xs md:text-base lg:text-xl font-medium sm:font-bold uppercase tracking-wide mb-1 md:mb-2">
              FEATURED FLEET
            </p>
            <h2 className="text-xs md:text-sm text-primary">
              Unable to load featured fleet. Please try again later.
            </h2>
          </div>
        </div>
      </section>
    );
  }

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
          {data.data.map((item) => (
            <VehicleCard
              key={item.id}
              vehicle={item}
              onEnquiryClick={onEnquiryClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
