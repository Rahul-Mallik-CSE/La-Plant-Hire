/** @format */

import React from "react";

interface CommonHeroProps {
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
}

const CommonHero: React.FC<CommonHeroProps> = ({
  title,
  description,
  bgColor = "bg-background2",
  textColor = "text-primary",
}) => {
  return (
    <section
      className={`${bgColor} h-48 sm:h-56 md:h-[250px] lg:h-[300px] xl:h-[310px] flex justify-center items-center text-center`}
    >
      <div className="max-w-3xl mx-auto px-4">
        <h1
          className={`text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${textColor} mb-1 sm:mb-2 md:mb-4`}
        >
          {title}
        </h1>
        <p
          className={`${textColor} text-xs md:text-sm lg:text-base leading-relaxed`}
        >
          {description}
        </p>
      </div>
    </section>
  );
};

export default CommonHero;
