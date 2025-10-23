/** @format */

import { equipment } from "@/data/equipmentData";
import EquipmentCard from "./SubComponents/EquipmentCard";

export default function EquipmentGrid() {
  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipment.map((item) => (
            <EquipmentCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
