/** @format */

"use client";

import React, { useState, useRef, useMemo } from "react";
import FeaturedFleet from "./FeaturedFleet";
import StatsAndForm from "./StatsAndForm";
import { useGetFeaturedFleetQuery } from "@/redux/features/featuredFleetApi";

const FeaturedFleetAndStatsForm = () => {
  const [selectedService, setSelectedService] = useState("");
  const formSectionRef = useRef<HTMLDivElement>(null);
  const { data } = useGetFeaturedFleetQuery();

  // Extract unique service names from API data
  const services = useMemo(() => {
    if (!data?.data) return [];
    const uniqueServices = [...new Set(data.data.map((item) => item.name))];
    return uniqueServices;
  }, [data]);

  const handleEnquiryClick = (serviceName: string) => {
    setSelectedService(serviceName);
    // Scroll to form section
    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div>
      {/* featured fleet section */}
      <FeaturedFleet onEnquiryClick={handleEnquiryClick} />

      {/* stats and form section */}
      <div ref={formSectionRef}>
        <StatsAndForm selectedService={selectedService} services={services} />
      </div>
    </div>
  );
};

export default FeaturedFleetAndStatsForm;
