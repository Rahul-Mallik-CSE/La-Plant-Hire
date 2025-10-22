/** @format */

import React from "react";

const HireTermsConditions = () => {
  return (
    <div>
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 sm:mb-3 md:mb-4">
        Dry Hire Terms & Conditions
      </h2>

      <div className="space-y-6 mb-8">
        <div className="flex gap-1">
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

      <button className="bg-accent text-white px-6 py-3 rounded font-bold text-sm hover:bg-[#e67e00] transition">
        DOWNLOAD HIRE TERMS PDF
      </button>
    </div>
  );
};

export default HireTermsConditions;
