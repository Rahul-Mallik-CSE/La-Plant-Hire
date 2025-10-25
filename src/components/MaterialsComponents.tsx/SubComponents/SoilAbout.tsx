/** @format */

import React from "react";

const soilFeatures = [
  "Organic Garden Soil + Organic Under Turf + Screened Soil",
  "We produce our own premium organic soils so you can be guaranteed a quality product",
  "We provide cost-effective solutions for your landscaping requirements",
];

const SoilAbout = () => {
  return (
    <div className="">
      {/* Bullet Points */}
      <ol className="space-y-2 mb-2 sm:mb-4 md:mb-6 ">
        {soilFeatures.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary flex justify-center mr-1 text-base sm:text-lg md:text-xl">
              •
            </span>
            <p className="text-base sm:text-lg md:text-xl text-primary font-bold">
              {feature}
            </p>
          </li>
        ))}
      </ol>

      {/* Description Paragraphs */}
      <div className="space-y-4">
        <p className="text-xs md:text-sm text-primary leading-relaxed">
          LA Plant Hire is a leading supplier of quality soil products. We also
          deliver sand and gravels and provide 10m tippers for hourly hire.{" "}
          <br />
          With over 35 years experience, our family owned and operated business
          can provide you with a quality service and advice you can rely on for
          all your landscaping needs.
          <br />
          Producing our own quality organic soils allows us to provide our
          clients with consistent, high-quality materials at a competitive
          price.
        </p>
      </div>
    </div>
  );
};

export default SoilAbout;
