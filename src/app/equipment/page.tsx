/** @format */

import EquipmentGridAndTermsForm from "@/components/EquipmentComponents/EquipmentGridAndTermsForm";
import EquipmentHero from "@/components/EquipmentComponents/EquipmentHero";

import CTAsection from "@/components/TruckFleetComponents/CTASection";
import React from "react";

const EquipmentPage = () => {
  return (
    <div>
      {/*hero section */}
      <EquipmentHero />

      <EquipmentGridAndTermsForm />

      {/* CTA Section */}
      <CTAsection />
    </div>
  );
};

export default EquipmentPage;
