/** @format */

import { Skeleton } from "../ui/skeleton";

const TruckLoadingCard = () => {
  return (
    <div className="max-w-96 min-w-80 overflow-hidden">
      {/* Image skeleton */}
      <Skeleton className="h-40 sm:h-48 w-full" />

      {/* Content */}
      <div className="py-3 sm:py-6 space-y-2">
        {/* Title */}
        <Skeleton className="h-5 w-48" />
        {/* Description */}
        <Skeleton className="h-4 w-56" />

        {/* Button - right aligned */}
        <div className="flex w-full items-center justify-end pt-1">
          <Skeleton className="h-7 sm:h-9 w-28 rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default TruckLoadingCard;
