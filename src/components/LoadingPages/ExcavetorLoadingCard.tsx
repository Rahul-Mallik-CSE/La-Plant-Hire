/** @format */

import { Skeleton } from "../ui/skeleton";

const ExcavetorLoadingCard = () => {
  return (
    <div className="overflow-visible relative pt-7">
      {/* Image area - overflows above the card (matches EquipmentCard) */}
      <div className="relative h-72 flex items-center justify-center -mt-7 mb-0 z-10">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Category badge skeleton */}
      <div className="absolute top-28 left-1 z-20">
        <Skeleton className="h-5 w-20 rounded" />
      </div>

      {/* Background panel (matches the bg-background2 bar) */}
      <div className="absolute top-24 left-0 right-0 bg-[#E0E0E2] h-48 -z-10 rounded-sm" />

      {/* Content */}
      <div className="py-4 bg-white rounded-b-lg space-y-3">
        {/* Title */}
        <Skeleton className="h-5 w-40" />

        {/* "Ideal For" label */}
        <Skeleton className="h-4 w-20" />

        {/* Feature list */}
        <div className="space-y-2">
          {[52, 44, 60].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="w-2.5 h-2.5 rounded-full flex-shrink-0" />
              <Skeleton className={`h-3 w-${w}`} />
            </div>
          ))}
        </div>

        {/* Specs box */}
        <Skeleton className="h-10 w-full rounded" />

        {/* Button - right aligned */}
        <div className="flex w-full items-center justify-end">
          <Skeleton className="h-7 md:h-8 w-28 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ExcavetorLoadingCard;
