/** @format */

"use client";

import { Button } from "@/components/ui/button";
import type { EquipmentCardProps } from "@/types/equipmentTypes";
import { BellRing, Check } from "lucide-react";
import Image from "next/image";
import { PiSelectionPlusBold } from "react-icons/pi";

export default function EquipmentCard({
  name,
  image,
  label,
  description,
  features,
  specs,
  price,
  isExpanding,
}: EquipmentCardProps) {
  return (
    <div className="overflow-visible relative pt-7">
      {/* Image Container - Overflows above the card */}
      <div className="relative h-72 flex items-center justify-center -mt-7 mb-0 z-10">
        {!isExpanding && (
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={400}
            className="object-contain w-full h-full mb-6 mx-2"
          />
        )}
      </div>
      {label && (
        <div className="absolute top-28 left-1 bg-background2 text-custom-orange z-100 px-3 py-1 rounded text-xs font-bold">
          {label}
        </div>
      )}
      {/* Background div */}
      <div
        className={`absolute top-24  left-0 right-0 ${
          isExpanding ? "bg-[#E0E0E2]" : "bg-background2"
        } h-48 -z-10 rounded-sm flex justify-center items-center`}
      >
        {isExpanding && (
          <div className="flex flex-col justify-center items-center ">
            <PiSelectionPlusBold className="w-4 md:w-6 h-4 md:h-6 mb-2" />
            <h1 className="text-sm md:text-lg font-bold text-primary/70 ">
              New Equipment
            </h1>
            <p className="text-xs text-primary/50">More equipment arriving</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className=" py-4 bg-white rounded-b-lg">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-1 md:mb-2">
          {name}
        </h3>

        <>
          <p className="text-primary text-sm mb-1 font-bold">{description}</p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex  gap-2 items-center">
                <Check className="w-2.5 h-2.5 bg-gray-500 rounded-full text-white" />
                <span className="text-primary text-xs">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Specs */}
          {specs && (
            <p className="text-xs text-primary bg-background2 mb-6 p-2 border-b border-border">
              {specs.split("\n").map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </p>
          )}

          {/* Price and CTA */}
          {!isExpanding ? (
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg lg:text-xl font-bold text-custom-orange">
                {price}
              </span>
              <Button className="border-1 md:border-2 border-primary text-primary px-2 md:px-4 py-2 h-6 sm:h-7 md:h-8 rounded text-xs  font-bold bg-transparent hover:bg-gray-100  transition">
                ENQUIRE NOW
              </Button>
            </div>
          ) : (
            <div className="flex w-full items-center justify-center">
              <Button className="w-full border-1 md:border-2 text-amber-400 border-amber-400 px-2 md:px-4 py-2 h-6 sm:h-7 md:h-8 rounded text-xs  font-bold bg-transparent hover:bg-amber-50  transition">
                <BellRing /> ENQUIRE NOW
              </Button>
            </div>
          )}
        </>
      </div>
    </div>
  );
}
