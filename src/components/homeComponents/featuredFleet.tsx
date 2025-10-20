/** @format */

import { Button } from "@/components/ui/button";
import { vehicles } from "@/data/homeData";
import type { Vehicle } from "@/types/AllHomeTypes";

export default function FeaturedFleet() {
  return (
    <section className="pb-6 md:pb-8 lg:pb-12 xl:pb-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          <p className="text-primary/80 text-xs md:text-base lg:text-xl font-medium sm:font-bold uppercase tracking-wide mb-1 md:mb-2">
            FEATURED FLEET
          </p>
          <h2 className="text-xs md:text-sm text-primary">
            Our premium vehicles ready for your next project.
          </h2>
        </div>

        {/* Vehicle Cards */}
        <div className="flex flex-col md:flex-row  flex-wrap gap-4 xl:gap-12 2xl:gap-32 w-full items-center justify-center ">
          {vehicles.map((vehicle: Vehicle, index: number) => (
            <div key={index} className="max-w-96  min-w-80 overflow-hidden ">
              <div
                className="h-40 sm:h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${vehicle.image})` }}
              />
              <div className="py-3 sm:py-6">
                <h3 className="text-base sm:text-xl font-bold text-primary mb-1 sm:mb-2">
                  {vehicle.title}
                </h3>
                <p className="text-primary text-xs sm:text-sm mb-3 sm:mb-4">
                  {vehicle.specs}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-bold text-primary">
                    {vehicle.price}
                  </span>
                  <Button
                    variant="outline"
                    className="px-2 sm:px-3 h-7 sm:h-9 border-primary text-primary hover:text-primary hover:bg-primary/5 text-xs sm:text-sm font-medium sm:font-bold bg-transparent border sm:border-2 rounded-sm"
                  >
                    ENQUIRE NOW
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
