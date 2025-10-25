/** @format */

import { Button } from "@/components/ui/button";
import { contactInfoData } from "@/data/materialsData";
import { ContactInfoItem } from "@/types/materialsTypes";
import { FaDirections } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="bg-white min-w-72 h-fit rounded-sm p-8 shadow-sm border border-border">
      <h2 className="text-base md:text-lg font-bold text-primary mb-2 md:mb-4">
        Contact Information
      </h2>

      <div className="space-y-2 md:space-y-4">
        {/* Map through contact info items */}
        {contactInfoData.map((item: ContactInfoItem, index: number) => (
          <div key={index} className="flex items-center gap-4">
            <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-medium text-primary">{item.label}</p>
              {item.details.map((detail: string, detailIndex: number) => (
                <p key={detailIndex} className="text-xs text-primary">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Get Directions Button */}
        <div className="w-full flex justify-end">
          <Button className="text-xs h-8 px-2 bg-emerald-500 hover:bg-emerald-600 border-emerald-700 text-white font-bold  rounded transition flex items-center justify-center gap-1.5 mt-8">
            <FaDirections className="w-3 h-3 text-white " />
            GET DIRECTIONS
          </Button>
        </div>
      </div>
    </div>
  );
}
