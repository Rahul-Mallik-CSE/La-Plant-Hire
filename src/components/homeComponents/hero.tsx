/** @format */

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className=" ">
      <div className="max-w-[2000px] mx-auto relative w-full h-72 sm:h-80 md:h-96 lg:h-[400px] xl:h-[467px] 2xl:h-[560px] overflow-hidden">
        {/* Background Image - Right Side */}
        <Image
          src="/banners/HomeBanner.jpg"
          alt="Truck on highway at sunset"
          fill
          className="h-full w-full object-cover object-right"
          priority
        />

        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-gray-50 to-transparent" />

        {/* Content Container */}
        <div className="relative h-full flex items-center">
          <div className="w-full sm:w-1/2 px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col justify-center">
            {/* Heading */}
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xl text-primary font-black leading-tight mb-2 md:mb-4 lg:mb-6">
              FAMILY-OWNED
              <span className="text-orange-500"> PLANT HIRE </span>
              SOLUTION
            </h1>

            {/* Description */}
            <p className="text-primary text-xs md:text-sm lg:text-base leading-relaxed mb-2 md:mb-4 lg:mb-8 max-w-xl">
              Trusted Truck & Equipment Hire in Queensland. Professional
              service, competitive rates, and reliable equipment for all your
              construction needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-2 md:gap-4 flex-wrap">
              <Button className="bg-orange-500 hover:bg-orange-600 text-xs md:text-base text-primary font-bold px-2 md:px-4 py-0.5 md:py-3 rounded-sm border md:border-2 border-primary flex items-center gap-1 md:gap-2">
                <Image
                  src="/logo/truck-logo.png"
                  alt="T"
                  width={20}
                  height={20}
                />
                VIEW OUR FLEET
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-400 sm:border-primary text-xs md:text-base text-gray-400 sm:text-primary hover:bg-black hover:text-white font-bold  px-2 md:px-4 py-0.5 md:py-3 rounded-sm md:border-2  bg-transparent"
              >
                GET A QUOTE NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
