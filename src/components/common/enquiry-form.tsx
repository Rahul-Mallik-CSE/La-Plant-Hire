/** @format */

"use client";

import React, { useState } from "react";
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

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    duration: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-white rounded-lg p-8">
      <h3 className="text-2xl font-bold text-foreground mb-6 text-center md:text-left">
        Quick Enquiry
      </h3>

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
          <SelectTrigger className="w-full border sm:border-2 border-primary focus-visible:ring-0 text-xs sm:text-sm text-primary placeholder:text-primary/50 h-9 sm:h-12">
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="truck">Truck Hire</SelectItem>
            <SelectItem value="equipment">Equipment Hire</SelectItem>
            <SelectItem value="material">Material Delivery</SelectItem>
            <SelectItem value="soil">Soil Register</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={formData.duration}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, duration: value }))
          }
        >
          <SelectTrigger className="w-full border sm:border-2 border-primary focus-visible:ring-0 text-xs sm:text-sm text-primary placeholder:text-primary/50 h-9 sm:h-11">
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

        <Button className="w-full bg-accent hover:bg-[#e67e00] text-foreground font-bold py-3">
          SEND ENQUIRY
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          <span className="text-accent">*</span> We will respond within 24 hours
        </p>
      </form>
    </div>
  );
};

export default EnquiryForm;
