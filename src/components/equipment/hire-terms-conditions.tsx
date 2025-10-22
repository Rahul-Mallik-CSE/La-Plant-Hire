/** @format */

import React from "react";
import { Button } from "../ui/button";

const HireTermsConditions = () => {
  return (
    <div className="flex flex-col justify-center lg:block items-center">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 sm:mb-3 md:mb-4">
        Dry Hire Terms & Conditions
      </h2>

      <div className="space-y-2 md:space-y-3 lg:space-y-6 mb-4 sm:mb-6 lg:mb-8 flex flex-col ">
        <div className="flex gap-1   ">
          <div className="w-2.5 h-2.5 rounded-full bg-[#36b37e] flex items-center justify-center flex-shrink-0 mt-[4.5px]">
            <span className="text-white text-[7px]">✓</span>
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-semibold text-primary mb-1">
              Operator Not Included
            </h3>
            <p className="text-[9px] md:text-xs text-primary">
              Responsible qualified operators
            </p>
          </div>
        </div>

        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#36b37e] flex items-center justify-center flex-shrink-0 mt-[4.5px]">
            <span className="text-white text-[7px]">✓</span>
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-semibold text-primary mb-1">
              Insurance Required
            </h3>
            <p className="text-[9px] md:text-xs text-primary">
              Valid public liability & equipment mandatory
            </p>
          </div>
        </div>

        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#36b37e] flex items-center justify-center flex-shrink-0 mt-[4.5px]">
            <span className="text-white text-[7px]">✓</span>
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-semibold text-primary mb-1">
              Experience Necessary
            </h3>
            <p className="text-[9px] md:text-xs text-primary">
              Certified operators with relevant experience required
            </p>
          </div>
        </div>

        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#36b37e] flex items-center justify-center flex-shrink-0 mt-[4.5px]">
            <span className="text-white text-[7px]">✓</span>
          </div>

          <div>
            <h3 className="text-xs md:text-sm font-semibold text-primary mb-1">
              Delivery Available
            </h3>
            <p className="text-[9px] md:text-xs text-primary">
              Professional transport and setup service offered
            </p>
          </div>
        </div>
      </div>

      <Button className="bg-custom-orange border-1 md:border-2 border-primary text-primary px-2 md:px-4 h-7 md:h-8 lg:h-9 rounded font-bold text-xs md:text-sm hover:bg-[#e67e00] transition">
        DOWNLOAD HIRE TERMS PDF
      </Button>
    </div>
  );
};

export default HireTermsConditions;
