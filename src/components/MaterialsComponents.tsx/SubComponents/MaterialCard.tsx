/** @format */

import React from "react";
import Image from "next/image";
import { MaterialCardType } from "@/types/materialTypes";

interface MaterialCardProps {
  material: MaterialCardType;
}

const MaterialCard = ({ material }: MaterialCardProps) => {
  return (
    <div className="bg-white  overflow-hidden ">
      {/* Image with Overlayed Title */}
      <div className="relative h-48 md:h-56 w-full">
        <Image
          src={material.image}
          alt={material.title}
          fill
          className="object-cover"
        />
        {/* Title Overlay with Blur */}
        <div className="absolute bottom-0 left-0 right-0  backdrop-blur-sm bg-transparent  py-3 px-4">
          <h3 className="text-base md:text-lg font-bold text-white text-center">
            {material.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="py-4 md:py-6">
        {/* Description */}
        <p className="text-xs sm:text-sm text-primary mb-2 leading-relaxed">
          {material.description}
        </p>

        {/* Bullet Points */}
        {material.bulletPoints && (
          <div>
            {material.bulletPoints.length > 0 && (
              <ul className="space-y-1">
                {material.bulletPoints.map((point, index) => (
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MaterialCard;
