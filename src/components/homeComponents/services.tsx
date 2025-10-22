/** @format */

import { ArrowRight } from "lucide-react";

import { services } from "@/data/homeData";
import { Service } from "@/types/AllHomeTypes";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <section className="max-w-[2000px] mx-auto py-6 md:py-8 lg:py-12 xl:py-16 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center sm:text-left">
          <p className="text-primary/80 text-xs md:text-base lg:text-xl font-medium sm:font-bold uppercase tracking-wide mb-1 md:mb-2">
            OUR SERVICES
          </p>
          <h2 className="text-base md:text-xl lg:text-3xl xl:text-4xl font-semibold sm:font-bold text-primary mb-4">
            Professional equipment hire solutions for
            <br />
            <span className="text-primary/50">
              construction, landscaping, and industrial projects across
              Queensland.
            </span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-background2 rounded-lg">
          {services.map((service: Service, index: number) => (
            <div key={index} className=" p-2 md:p-4  flex gap-4 ">
              <div className="">
                <div className="!w-10 !h-10 bg-primary rounded-full flex items-center justify-center text-2xl mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={20}
                    height={30}
                    className="rounded-full "
                  />
                </div>
              </div>
              <div className="gap-1">
                <h3 className="text-sm sm:text-base font-medium text-primary">
                  {service.title}
                </h3>
                <p className="text-primary text-sm sm:text-base ">
                  {service.description}
                </p>
                <p className="text-foreground font-medium text-sm sm:text-base">
                  {service.price}
                </p>
                <Link
                  href="#"
                  className="text-blue-500 hover:text-blue-700 mt-2 text-xs flex items-center gap-1"
                >
                  View details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
