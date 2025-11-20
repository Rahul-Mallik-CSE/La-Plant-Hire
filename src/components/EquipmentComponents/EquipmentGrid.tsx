/** @format */

"use client";

import { useGetEquipmentQuery } from "@/redux/features/equipmentAPI";
import EquipmentCard from "./SubComponents/EquipmentCard";
import { Skeleton } from "../ui/skeleton";

interface EquipmentGridProps {
  onEnquiryClick: (serviceName: string) => void;
}

export default function EquipmentGrid({ onEnquiryClick }: EquipmentGridProps) {
  const { data, isLoading, isError } = useGetEquipmentQuery();

  if (isLoading) {
    return (
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16">
        <div className="flex  w-full items-center justify-center">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
        </div>
      </section>
    );
  }

  if (isError || !data?.success) {
    return (
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center text-primary">
            Unable to load equipment. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.data.map((item) => (
            <EquipmentCard
              key={item.id}
              equipment={item}
              onEnquiryClick={onEnquiryClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
