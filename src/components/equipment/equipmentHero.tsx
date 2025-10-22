/** @format */

import Image from "next/image";
import React from "react";

const EquipmentHero = () => {
  return (
    <section className="bg-background2 w-full h-48 sm:h-56 md:h-[250px] lg:h-[300px] xl:h-[310px] flex justify-center items-center text-center">
      <div className=" w-full flex justify-between   ">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl lg:text-4xl font-black text-primary mb-4 leading-tight">
            Earthmoving Equipment Dry Hire
          </h1>
          <p className="text-muted-foreground mb-6 text-lg">
            Professional Equipment - You Operate
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#36b37e] flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#36b37e] flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">Delivery Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#36b37e] flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Middle Image */}
        <div className="hidden  relative h-96 lg:h-full w-1/4">
          <Image
            src="/banners/equipment-banner-Z.png"
            alt="Excavator Equipment Hire"
            width={300}
            height={400}
            className=" h-full w-full "
          />
        </div>

        {/* Right Image */}
        <div className=" h-96 lg:h-full border-2">
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
