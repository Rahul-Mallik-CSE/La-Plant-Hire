/** @format */

"use client";

import React, { useMemo } from "react";
import MaterialSection from "./MaterialSection";
import SoilSection from "./SoilSection";
import AboutAndForm from "./AboutAndForm";
import { useGetMaterialsQuery } from "@/redux/features/materialApi";

const CombineSections = () => {
  const { data } = useGetMaterialsQuery();

  // Extract service names and full data from API
  const services = useMemo(() => {
    if (!data?.data) return [];
    return data.data.map((item) => item.name);
  }, [data]);

  const servicesData = useMemo(() => {
    if (!data?.data) return [];
    return data.data;
  }, [data]);

  return (
    <div>
      <MaterialSection />

      <SoilSection />

      {/* about and form section */}
      <AboutAndForm services={services} servicesData={servicesData} />
    </div>
  );
};

export default CombineSections;
