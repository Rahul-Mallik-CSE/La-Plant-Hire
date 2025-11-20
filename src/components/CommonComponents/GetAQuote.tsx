/** @format */

"use client";

import React, { useState, useMemo } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EnquiryForm from "./EnquiryForm";
import { useGetAllServicesQuery } from "@/redux/features/featuredFleetApi";

const GetAQuote = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetAllServicesQuery();

  // Extract service names and full data from API
  const services = useMemo(() => {
    if (!data?.data) return [];
    return [...new Set(data.data.map((item) => item.name))];
  }, [data]);

  const servicesData = useMemo(() => {
    if (!data?.data) return [];
    return data.data;
  }, [data]);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="text-xs md:text-sm h-7 sm:h-8 px-2 md:px-4 bg-custom-orange rounded-sm hover:bg-custom-orange/80 border-2 border-orange-700 text-primary font-bold"
      >
        GET A QUOTE
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-center text-primary">
              Get A Quote
            </DialogTitle>
          </DialogHeader>
          <EnquiryForm
            showHeaderWithIcon={true}
            services={services}
            servicesData={servicesData}
            onSuccess={() => setIsModalOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GetAQuote;
