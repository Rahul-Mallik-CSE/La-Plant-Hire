/** @format */

import Image from "next/image";
import React from "react";

const Stats = () => {
  return (
    <div>
      {/* Badge */}
      <div className="mb-4 sm:mb-8 flex justify-center ">
        <div className="text-center">
          <Image
            src="/logo/plant-logo2.png"
            alt="Stat Badge"
            width={100}
            height={100}
            className="xl:h-[145px] xl:w-[150px]"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-4 sm:mb-6 md:mb-8">
        <div className="text-center lg:text-left">
          <p className="text-3xl  md:text-4xl lg:text-5xl font-bold text-primary">
            20+
          </p>
          <p className="text-primary/50 text-xs md:text-sm font-medium">
            Years Experience
          </p>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-3xl  md:text-4xl lg:text-5xl font-bold text-primary">
            500+
          </p>
          <p className="text-primary/50 text-xs md:text-sm font-medium">
            Satisfied Clients
          </p>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-3xl  md:text-4xl lg:text-5xl font-bold text-primary">
            50+
          </p>
          <p className="text-primary/50 text-xs md:text-sm font-medium">
            Fleet Vehicles
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="text-center md:text-left">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 sm:mb-3 md:mb-4">
          Family-Owned Since Day One
        </h3>
        <p className="text-secondary text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 md:mb-4 text-justify">
          For over two decades, LA Plant Hire has been Queensland&apos;s trusted
          partner for construction equipment and truck hire. As a family-owned
          business, we understand the importance of quality service, and
          building lasting relationships with our clients.
        </p>
        <p className="text-secondary text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 md:mb-4 text-justify">
          Our commitment to excellence and personalized service has made us the
          preferred choice for contractors, builders, and businesses across the
          region. When you choose LA Plant Hire, you&apos;re choosing a partner
          who cares about your project&apos;s success.
        </p>
      </div>
    </div>
  );
};

export default Stats;
