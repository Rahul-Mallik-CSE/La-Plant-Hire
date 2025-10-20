/** @format */

import React from "react";

const Stats = () => {
  return (
    <div>
      {/* Badge */}
      <div className="mb-8 flex justify-center lg:justify-start">
        <div className="text-center">
          <div className="text-5xl font-bold text-accent mb-2">🏆</div>
          <p className="text-foreground font-bold">#1 No.</p>
          <p className="text-muted-foreground text-sm">Choice</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="text-center lg:text-left">
          <p className="text-4xl font-bold text-foreground">20+</p>
          <p className="text-muted-foreground text-sm">Years Experience</p>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-4xl font-bold text-foreground">500+</p>
          <p className="text-muted-foreground text-sm">Satisfied Clients</p>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-4xl font-bold text-foreground">50+</p>
          <p className="text-muted-foreground text-sm">Fleet Vehicles</p>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Family-Owned Since Day One
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          For over two decades, LA Plant Hire has been Queensland&apos;s trusted
          partner for construction equipment and truck hire. As a family-owned
          business, we understand the importance of quality service, and
          building lasting relationships with our clients.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
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
