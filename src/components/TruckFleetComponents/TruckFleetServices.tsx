/** @format */
"use client";
import React, { useState, useMemo } from "react";
import { useGetTruckFleetQuery } from "@/redux/features/truckFleetApi";
import VehicleCard from "../CommonComponents/VehicleCard";
import EnquiryForm from "../CommonComponents/EnquiryForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "../ui/skeleton";

const TruckFleetServices = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const { data, isLoading, isError } = useGetTruckFleetQuery();

  const filters = ["All", "Body Trucks","Twin Steer", "Truck and Trailer" ];

  // Filter trucks based on active category
  const filteredTrucks = useMemo(() => {
    if (!data?.data) return [];
    if (activeFilter === "All") return data.data;
    return data.data.filter((truck) => truck.category.name === activeFilter);
  }, [data, activeFilter]);

  // Extract unique service names for the form
  const services = useMemo(() => {
    if (!data?.data) return [];
    const uniqueServices = [...new Set(data.data.map((item) => item.name))];
    return uniqueServices;
  }, [data]);

  // Pass full services data for ID lookup
  const servicesData = useMemo(() => {
    if (!data?.data) return [];
    return data.data;
  }, [data]);

  const handleEnquiryClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="py-6 md:py-8 lg:py-12 xl:py-16 mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex  w-full items-center justify-center">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
        </div>
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
              <VehicleCard
                key={truck.id}
                vehicle={truck}
                onEnquiryClick={handleEnquiryClick}
              />
            ))}
          </div>
        )}
      </section>

      {/* Enquiry Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-center text-primary">
              Service Enquiry
            </DialogTitle>
          </DialogHeader>
          <EnquiryForm
            selectedService={selectedService}
            services={services}
            servicesData={servicesData}
            showHeaderWithIcon={false}
            onSuccess={() => setIsModalOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TruckFleetServices;
