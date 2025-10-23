/** @format */

import EquipmentHero from "@/components/Equipment/EquipmentHero";
import TermsAndForm from "@/components/Equipment/TermsAndForm";
import CTAsection from "@/components/TruckFleetsComponents/CTASection";
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
