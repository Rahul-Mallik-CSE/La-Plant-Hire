/** @format */

import Stats from "./SubComponents/Stats";
import EnquiryForm from "@/components/Common/EnquiryForm";

export default function StatsAndForm() {
  return (
    <section className="p-6 md:p-8 lg:p-12 xl:p-16 bg-background2">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Stats & Info */}
          <Stats />

          {/* Right Column - Form */}
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
