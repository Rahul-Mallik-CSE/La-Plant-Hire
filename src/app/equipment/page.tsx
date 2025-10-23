/** @format */

import EquipmentGrid from "@/components/EquipmentComponents/EquipmentGrid";
import EquipmentHero from "@/components/EquipmentComponents/EquipmentHero";
import TermsAndForm from "@/components/EquipmentComponents/TermsAndForm";
import CTAsection from "@/components/TruckFleetsComponents/CTASection";
import React from "react";

const EquipmentPage = () => {
  return (
    <div>
      {/*hero section */}
      <EquipmentHero />

      {/* Equipment grid section */}

      <EquipmentGrid />

      {/* Terms and form */}
      <TermsAndForm />

      {/* CTA Section */}
      <CTAsection />
    </div>
  );
};

export default EquipmentPage;
