/** @format */

import React from "react";
import { Button } from "../ui/button";
import type { Vehicle } from "@/types/AllHomeTypes";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <div className="max-w-96 min-w-80 overflow-hidden">
      <div
        className="h-40 sm:h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${vehicle.image})` }}
      />
      <div className="py-3 sm:py-6">
        <h3 className="text-base sm:text-xl font-bold text-primary mb-1 sm:mb-2">
          {vehicle.title}
        </h3>
        <p className="text-primary text-xs sm:text-sm mb-3 sm:mb-4">
          {vehicle.specs}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-base sm:text-lg font-bold text-primary">
            {vehicle.price}
          </span>
          <Button
            variant="outline"
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
