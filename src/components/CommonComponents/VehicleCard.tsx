/** @format */

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import type { FeaturedFleetItem } from "@/types/AllHomeTypes";
import { getFullImageFullUrl } from "@/lib/utils";

interface VehicleCardProps {
  vehicle: FeaturedFleetItem;
  onEnquiryClick?: (serviceName: string) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  onEnquiryClick,
}) => {
  const description =
    vehicle.ideal_for.length > 0
      ? vehicle.ideal_for[0].name
      : vehicle.category.description;

  const handleEnquiryClick = () => {
    if (onEnquiryClick) {
      onEnquiryClick(vehicle.name);
    }
  };

  return (
    <div className="max-w-96 min-w-80 overflow-hidden">
      <div className="relative h-40 sm:h-48 w-full overflow-hidden">
        <Image
          src={getFullImageFullUrl(vehicle.image)}
          alt={vehicle.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 320px, 384px"
          unoptimized
        />
      </div>
      <div className="py-3 sm:py-6">
        <h3 className="text-base sm:text-xl font-bold text-primary mb-1 sm:mb-2">
          {vehicle.name}
        </h3>
        <p className="text-primary text-xs sm:text-sm mb-3 sm:mb-4">
          {description}
        </p>
        <div className="flex w-full items-center justify-end">
          <Button
            variant="outline"
            onClick={handleEnquiryClick}
            className="px-2 sm:px-3 h-7 sm:h-9 border-primary text-primary hover:text-primary hover:bg-primary/5 text-xs sm:text-sm font-medium sm:font-bold bg-transparent border sm:border-2 rounded-sm"
          >
            ENQUIRE NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
