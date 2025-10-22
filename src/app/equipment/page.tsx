/** @format */

import EquipmentHero from "@/components/equipment/equipmentHero";
import TermsAndForm from "@/components/equipment/terms-and-form";
import CTAsection from "@/components/truckfleetsComponents/CTAsection";
import React from "react";

const EquipmentPage = () => {
  return (
    <div>
      {/*hero section */}
      <EquipmentHero />

      {/* Terms and form */}
      <TermsAndForm />

      {/* CTA Section */}
      <CTAsection />
    </div>
  );
};

export default EquipmentPage;
