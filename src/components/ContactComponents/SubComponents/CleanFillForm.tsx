/** @format */
"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator } from "lucide-react";
import CalculatorModal from "./CalculatorModal";

export default function CleanFillForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    street: "",
    volume: "",
    fillType: "",
    truckAccess: "",
    comments: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  };

  return (
    <div className="w-full bg-white rounded-lg p-8 shadow-sm border border-border">
      <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-primary mb-3 md:mb-6 xl:mb-8">
        Clean Fill Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full lg:h-11 border-2 border-foreground focus-visible:ring-0"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full lg:h-11 border-2 border-foreground focus-visible:ring-0"
          />
        </div>

        {/* Phone and Suburb Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full lg:h-11 border-2 border-foreground focus-visible:ring-0"
          />
          <Input
            type="text"
            name="suburb"
            placeholder="Suburb"
            value={formData.suburb}
            onChange={handleChange}
            className="w-full lg:h-11 border-2 border-foreground focus-visible:ring-0"
          />
        </div>

        {/* Street Address */}
        <Input
          type="text"
          name="street"
          placeholder="Street address"
          value={formData.street}
          onChange={handleChange}
          className="w-full lg:h-11 border-2 border-foreground focus-visible:ring-0"
        />

        {/* Volume and Calculator Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            name="volume"
            placeholder="Volume: how many truck loads or cubic metres do you require?"
            value={formData.volume}
            onChange={handleChange}
            className="w-full lg:h-11 border-2 border-foreground focus-visible:ring-0"
          />
          <Button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="bg-foreground lg:h-11 hover:bg-primary text-white font-bold"
          >
            <Calculator className="w-3 h-3 mr-0" />
            try volume calculator
          </Button>
        </div>

        {/* Fill Type */}
        <Input
          type="text"
          name="fillType"
          placeholder="Fill type wanted. e.g. grassy soil, compatible fill..."
          value={formData.fillType}
          onChange={handleChange}
          className="w-full lg:h-11 border-2 border-foreground focus-visible:ring-0"
        />

        {/* Truck Access Dropdown */}
        <Select
          value={formData.truckAccess}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, truckAccess: value }))
          }
        >
          <SelectTrigger className="w-full lg:py-5 border-2 border-foreground focus-visible:ring-0">
            <SelectValue placeholder="Do you have tripper truck access?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>

        {/* Comments */}
        <Textarea
          name="comments"
          placeholder="Any further comment..."
          value={formData.comments}
          onChange={handleChange}
          rows={6}
          className="w-full border-2 border-foreground focus-visible:ring-0 resize-none"
        />

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            className="w-full sm:w-fit bg-custom-orange rounded-sm hover:bg-[#b36303] border-2 border-amber-800 text-white font-bold px-8"
          >
            SUBMIT
          </Button>
        </div>
      </form>

      {/* Calculator Modal */}
      <CalculatorModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
