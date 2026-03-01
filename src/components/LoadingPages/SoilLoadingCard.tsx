/** @format */

import { Skeleton } from "../ui/skeleton";

const SoilLoadingCard = () => {
  return (
    <div className="max-w-96 overflow-hidden">
      {/* Image with overlayed title (matches MaterialCard) */}
      <div className="relative h-48 md:h-96 lg:h-[400px] xl:h-[430px] w-full">
        <Skeleton className="w-full h-full" />

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/20 py-3 px-4 flex justify-center">
          <Skeleton className="h-5 w-36" />
        </div>
      </div>

      {/* Content */}
      <div className="py-4 md:py-6 space-y-3">
        {/* Description paragraphs */}
        <div className="space-y-1.5">
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-5/6" />
          <Skeleton className="h-3.5 w-4/6" />
        </div>

        {/* Bullet points */}
        <div className="space-y-1.5 pt-1">
          {[48, 40, 44].map((w, i) => (
            <div key={i} className="flex items-start gap-1">
              <span className="text-primary mr-1 text-xs font-bold mt-0.5">
                •
              </span>
              <Skeleton className={`h-3.5 w-${w}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoilLoadingCard;
