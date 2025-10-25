/** @format */

import CommonHero from "@/components/Common/CommonHero";
import FindUs from "@/components/Materials/FindUs";
import RegisterForm from "@/components/Materials/RegisterForm";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      {/* hero section */}
      <CommonHero
        title="Soil Wanted Register"
        description="Ready to discuss your project? We're here to help with all your trucking, soil removal, and material delivery needs."
        bgColor="bg-[#121221]"
        textColor="text-white"
      />

      {/* registration form */}
      <RegisterForm />

      {/* Find us here */}
      <FindUs />
    </div>
  );
};

export default ContactPage;
