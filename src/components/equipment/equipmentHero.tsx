/** @format */

import { Headset, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import React from "react";

const EquipmentHero = () => {
  return (
    <section className="bg-background2 w-full h-48 sm:h-56 md:h-[250px] lg:h-[300px] xl:h-[310px] relative overflow-hidden">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 flex justify-center md:justify-between items-center h-full relative">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center z-10">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-1 sm:mb-2 ">
              Earthmoving Equipment Dry Hire
            </h1>
            <p className="text-primary text-xs md:text-sm lg:text-base leading-relaxed mb-1 sm:mb-2 md:mb-4">
              Professional Equipment - You Operate
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 mb-8 text-primary">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-5 h-5 font-bold text-[#36b37e]" />
                <p className="text-xs md:text-sm font-medium">Fully Insured</p>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-5 h-5 font-bold text-[#FFAB00]" />
                <p className="text-xs md:text-sm font-medium">
                  Delivery Available
                </p>
              </div>
              <div className="flex items-center gap-1 ">
                <Headset className="w-5 h-5 font-bold text-[#36b37e]" />
                <p className="text-xs md:text-sm font-medium">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Diagonal Divider */}
        <div className="hidden xl:block absolute left-1/2 top-0 bottom-0  pointer-events-none z-0">
          <div className="relative h-full w-64">
            {/* Diagonal lines - two parallel lines */}
            <svg
              className="absolute top-0 left-0 h-full w-full"
              viewBox="0 0 256 400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top horizontal line */}
              <line
                x1="100"
                y1="0"
                x2="0"
                y2="0"
                stroke="#121221"
                strokeWidth="2"
              />
              {/* First diagonal line */}
              <line
                x1="100"
                y1="0"
                x2="0"
                y2="400"
                stroke="#121221"
                strokeWidth="2"
              />
              {/* Second diagonal line */}
              <line
                x1="105"
                y1="0"
                x2="5"
                y2="400"
                stroke="#121221"
                strokeWidth="2"
              />
              {/* Bottom horizontal line */}
              <line
                x1="0"
                y1="400"
                x2="100"
                y2="400"
                stroke="#121221"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block h-96 lg:h-full z-10">
          <Image
            src="/banners/equipment-banner-excavator.png"
            alt="Earthmoving Equipment"
            width={300}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default EquipmentHero;
