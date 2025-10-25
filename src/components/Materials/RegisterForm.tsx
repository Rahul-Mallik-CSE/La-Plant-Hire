/** @format */

import React from "react";
import ContactInfo from "./SubComponents/ContactInfo";
import CleanFillForm from "./SubComponents/CleanFillForm";

const RegisterForm = () => {
  return (
    <section className=" bg-background2 mx-auto py-6 md:py-8 lg:py-12 xl:py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="w-full flex  justify-center gap-4  ">
          {/* Contact info left side */}
          <ContactInfo />

          {/* Clean fill form on right side */}
          <CleanFillForm />
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
