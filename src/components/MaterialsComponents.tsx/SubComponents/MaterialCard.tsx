/** @format */

import React from "react";
import Image from "next/image";
import { MaterialCardType } from "@/types/materialTypes";

interface MaterialCardProps {
  material: MaterialCardType;
}

const MaterialCard = ({ material }: MaterialCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 md:h-56 w-full">
        <Image
          src={material.image}
          alt={material.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white bg-primary text-center py-2 mb-4">
          {material.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-primary/80 mb-4 leading-relaxed">
          {material.description}
        </p>

        {/* Bullet Points */}
        {material.bulletPoints && (
          <div>
            {material.bulletPoints.length > 0 && (
              <ul className="space-y-2">
                {material.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2 mt-1 text-sm">•</span>
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
