/** @format */

import { Button } from "@/components/ui/button";
import { vehicles } from "@/data/homeData";
import type { Vehicle } from "@/types/AllHomeTypes";

export default function FeaturedFleet() {
  return (
    <section className="pb-6 md:pb-8 lg:pb-12 xl:pb-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary/80 text-xs md:text-base lg:text-xl font-medium sm:font-bold uppercase tracking-wide mb-1 md:mb-2">
            FEATURED FLEET
          </p>
          <h2 className="text-xs md:text-sm text-primary">
            Our premium vehicles ready for your next project.
          </h2>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((vehicle: Vehicle, index: number) => (
            <div
              key={index}
              className="max-w-96 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${vehicle.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {vehicle.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {vehicle.specs}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">
                    {vehicle.price}
                  </span>
                  <Button
                    variant="outline"
                    className="border-foreground text-foreground hover:bg-foreground/10 text-sm font-bold bg-transparent"
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
