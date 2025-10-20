/** @format */

"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

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
    <div className="bg-secondary rounded-lg p-8">
      <h3 className="text-2xl font-bold text-foreground mb-6">Quick Enquiry</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground placeholder-muted-foreground"
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground placeholder-muted-foreground"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground placeholder-muted-foreground"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground"
        >
          <option value="">Select service</option>
          <option value="truck">Truck Hire</option>
          <option value="equipment">Equipment Hire</option>
          <option value="material">Material Delivery</option>
          <option value="soil">Soil Register</option>
        </select>

        <select
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground"
        >
          <option value="">Select duration</option>
          <option value="1day">1 Day</option>
          <option value="1week">1 Week</option>
          <option value="1month">1 Month</option>
          <option value="custom">Custom</option>
        </select>

        <textarea
          name="details"
          placeholder="Project details..."
          value={formData.details}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white text-foreground placeholder-muted-foreground resize-none"
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
