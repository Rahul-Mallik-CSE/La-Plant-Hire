/** @format */

import React from "react";
import Image from "next/image";
import { MaterialItem } from "@/types/materialTypes";
import { getFullImageFullUrl } from "@/lib/utils";

interface MaterialCardProps {
  material: MaterialItem;
}

const MaterialCard = ({ material }: MaterialCardProps) => {
  const description = material.extra_note;
  const bulletPoints = material.ideal_for.map((item) => item.name);

  return (
    <div className="max-w-96  overflow-hidden ">
      {/* Image with Overlayed Title */}
      <div className="relative h-48 md:h-96 lg:h-[400px] xl:h-[430px] w-full">
        <Image
          src={getFullImageFullUrl(material.image)}
          alt={material.name}
          fill
          unoptimized
          className="object-cover"
        />
        {/* Title Overlay with Blur */}
        <div className="absolute bottom-0 left-0 right-0  backdrop-blur-sm bg-transparent  py-3 px-4">
          <h3 className="text-base md:text-lg font-bold text-white text-center">
            {material.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="py-4 md:py-6">
        {/* Description */}
        <div className="text-xs sm:text-sm text-primary mb-2 leading-relaxed space-y-1">
          {description
            .split(".")
            .filter((line) => line.trim())
            .map((line, index) => (
              <p key={index}>{line.trim()}.</p>
            ))}
        </div>

        {/* Bullet Points */}
        {bulletPoints && bulletPoints.length > 0 && (
          <div>
            <ul className="space-y-1">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start font-bold">
                  <span className="text-primary mr-1 text-xs md:text-sm">
                    •
                  </span>
                  <span className="text-xs md:text-sm text-primary/70">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MaterialCard;
