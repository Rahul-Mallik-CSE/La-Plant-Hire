/** @format */

"use client";

import React, { useState, useRef, useMemo } from "react";
import EquipmentGrid from "./EquipmentGrid";
import TermsAndForm from "./TermsAndForm";
import { useGetEquipmentQuery } from "@/redux/features/equipmentAPI";

const EquipmentGridAndTermsForm = () => {
  const [selectedService, setSelectedService] = useState("");
  const formSectionRef = useRef<HTMLDivElement>(null);
  const { data } = useGetEquipmentQuery();

  // Extract unique service names and full data from API
  const services = useMemo(() => {
    if (!data?.data) return [];
    return [...new Set(data.data.map((item) => item.name))];
  }, [data]);

  const servicesData = useMemo(() => {
    if (!data?.data) return [];
    return data.data;
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
      {/* Equipment grid section */}
      <EquipmentGrid onEnquiryClick={handleEnquiryClick} />

      {/* Terms and form */}
      <div ref={formSectionRef}>
        <TermsAndForm
          selectedService={selectedService}
          services={services}
          servicesData={servicesData}
        />
      </div>
    </div>
  );
};

export default EquipmentGridAndTermsForm;
