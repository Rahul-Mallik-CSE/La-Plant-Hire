/** @format */

"use client";

import React, { useState, forwardRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useSubmitEnquiryMutation } from "@/redux/features/featuredFleetApi";
import { toast } from "react-toastify";
import { PiHandshake } from "react-icons/pi";
import type { FeaturedFleetItem } from "@/types/AllHomeTypes";

interface EnquiryFormProps {
  showHeaderWithIcon?: boolean;
  selectedService?: string;
  services?: string[];
  servicesData?: FeaturedFleetItem[];
  onSuccess?: () => void;
}

const EnquiryForm = forwardRef<HTMLDivElement, EnquiryFormProps>(
  (
    {
      showHeaderWithIcon = false,
      selectedService = "",
      services = [],
      servicesData = [],
      onSuccess,
    },
    ref
  ) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      service: selectedService,
      duration: "",
      details: "",
    });

    const [submitEnquiry, { isLoading }] = useSubmitEnquiryMutation();

    // Update service when selectedService prop changes
    useEffect(() => {
      if (selectedService) {
        setFormData((prev) => ({ ...prev, service: selectedService }));
      }
    }, [selectedService]);

    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // Find service ID by service name
      const serviceItem = servicesData.find(
        (item: FeaturedFleetItem) => item.name === formData.service
      );

      if (!serviceItem) {
        toast.error("Please select a valid service");
        return;
      }

      // Parse duration string to get number of days
      const durationMap: { [key: string]: number } = {
        "1day": 1,
        "1week": 7,
        "1month": 30,
        custom: 0,
      };

      const durationDays = durationMap[formData.duration] || 0;

      try {
        const submitData = {
          contact_name: formData.name,
          contact_email: formData.email,
          contact_phone: formData.phone,
          project_discription: formData.details,
          service: serviceItem.id,
          servie_duration_days: durationDays,
        };

        const response = await submitEnquiry(submitData).unwrap();

        if (response.success) {
          toast.success(response.message || "Enquiry submitted successfully!");
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            duration: "",
            details: "",
          });
          // Call onSuccess callback if provided (e.g., to close modal)
          if (onSuccess) {
            onSuccess();
          }
        } else {
          toast.error(response.message || "Failed to submit enquiry");
        }
      } catch (error) {
        console.error("Enquiry submission error:", error);
        const err = error as { data?: { message?: string } };
        toast.error(
          err?.data?.message || "Failed to submit enquiry. Please try again."
        );
      }
    };

    return (
      <div ref={ref} className="bg-white rounded-lg p-4 sm:p-8 shadow-lg ">
        {showHeaderWithIcon ? (
          <div className="flex flex-col items-center mb-3 sm:mb-6">
            <div className="w-12 h-12 bg-transparent flex items-center justify-center ">
              <PiHandshake className="w-6 sm:h-8 h-6 sm:w-8 text-custom-orange font-bold" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-primary text-center">
              Ready to Hire?
            </h3>
            <p className="text-xs sm:text-sm text-primary/70 text-center">
              Get your equipment quote in minutes
            </p>
          </div>
        ) : (
          <h3 className="text-base sm:text-xl font-bold text-primary mb-3 sm:6 text-center md:text-left">
            Quick Enquiry
          </h3>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border sm:border-2 border-primary focus-visible:ring-0 text-xs sm:text-sm text-primary placeholder:text-primary/50 h-9 sm:h-11"
          />

          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border sm:border-2 border-primary focus-visible:ring-0 text-xs sm:text-sm text-primary placeholder:text-primary/50 h-9 sm:h-11"
          />

          <Input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border sm:border-2 border-primary focus-visible:ring-0 text-xs sm:text-sm text-primary placeholder:text-primary/50 h-9 sm:h-11"
          />

          <Select
            value={formData.service}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, service: value }))
            }
          >
            <SelectTrigger className="w-full border sm:border-2 border-primary focus-visible:ring-0 text-xs sm:text-sm text-primary placeholder:text-primary/50 py-4 sm:py-5">
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              {services.length > 0 ? (
                services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))
              ) : (
                <>
                  <SelectItem value="Truck Hire">Truck Hire</SelectItem>
                  <SelectItem value="Equipment Hire">Equipment Hire</SelectItem>
                  <SelectItem value="Material Delivery">
                    Material Delivery
                  </SelectItem>
                  <SelectItem value="Soil Register">Soil Register</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>

          <Select
            value={formData.duration}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, duration: value }))
            }
          >
            <SelectTrigger className="w-full border sm:border-2 border-primary focus-visible:ring-0 text-xs sm:text-sm text-primary placeholder:text-primary/50 py-4 sm:py-5">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1day">1 Day</SelectItem>
              <SelectItem value="1week">1 Week</SelectItem>
              <SelectItem value="1month">1 Month</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            name="details"
            placeholder="Project details..."
            value={formData.details}
            onChange={handleChange}
            rows={4}
            className="w-full resize-none border sm:border-2 border-primary focus-visible:ring-0 text-xs sm:text-sm text-primary placeholder:text-primary/50 "
          />

          <div className="w-full flex md:justify-end">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-32 text-xs sm:text-sm  bg-custom-orange hover:bg-[#e67e00] text-primary font-bold py-2 sm:py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "SENDING..." : "SEND ENQUIRY"}
            </Button>
          </div>
          <div className="w-full flex justify-end">
            <div className="space-y-0 sm:space-y-2">
              <p className="text-xs text-primary/50 text-center">
                ABN: 65107940552
              </p>

              <p className="text-xs text-primary/50 text-center">
                Licensed & Insured
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
);

EnquiryForm.displayName = "EnquiryForm";

export default EnquiryForm;
