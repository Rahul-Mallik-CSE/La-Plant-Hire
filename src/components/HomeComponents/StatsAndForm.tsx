/** @format */

"use client";

import { useRef } from "react";
import Stats from "./SubComponents/Stats";
import EnquiryForm from "@/components/CommonComponents/EnquiryForm";
import type { FeaturedFleetItem } from "@/types/AllHomeTypes";

interface StatsAndFormProps {
  selectedService?: string;
  services?: string[];
  servicesData?: FeaturedFleetItem[];
}

export default function StatsAndForm({
  selectedService,
  services,
  servicesData,
}: StatsAndFormProps) {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <section className="p-6 md:p-8 lg:p-12 xl:p-16 bg-background2">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Stats & Info */}
          <Stats />

          {/* Right Column - Form */}
          <EnquiryForm
            ref={formRef}
            selectedService={selectedService}
            services={services}
            servicesData={servicesData}
          />
        </div>
      </div>
    </section>
  );
}
