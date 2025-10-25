/** @format */

import React from "react";
import ContactInfo from "./SubComponents/ContactInfo";

const RegisterForm = () => {
  return (
    <section className=" bg-background2 mx-auto py-6 md:py-8 lg:py-12 xl:py-16 ">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex items-center justify-center gap-4  ">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
