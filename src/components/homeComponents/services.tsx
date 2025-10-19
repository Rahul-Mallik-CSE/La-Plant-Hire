/** @format */

import { ArrowRight } from "lucide-react";

import { services } from "@/data/homeData";
import { Service } from "@/types/AllHomeTypes";

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wide mb-2">
            OUR SERVICES
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional equipment hire solutions for
            <br />
            <span className="text-muted-foreground">
              construction, landscaping, and industrial projects across
              Queensland.
            </span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service: Service, index: number) => (
            <div
              key={index}
              className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <p className="text-foreground font-bold mb-4">{service.price}</p>
              <a
                href="#"
                className="text-accent hover:text-[#e67e00] font-semibold text-sm flex items-center gap-1"
              >
                View details <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
