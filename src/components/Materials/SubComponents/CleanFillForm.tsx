/** @format */
"use client";

import type React from "react";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
      <h2 className="text-2xl font-bold text-foreground mb-8">
        Clean Fill Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-foreground rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-foreground rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>

        {/* Phone and Suburb Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-foreground rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
          />
          <input
            type="text"
            name="suburb"
            placeholder="Suburb"
            value={formData.suburb}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-foreground rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>

        {/* Street Address */}
        <input
          type="text"
          name="street"
          placeholder="Street address"
          value={formData.street}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-foreground rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
        />

        {/* Volume and Calculator Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="volume"
            placeholder="Volume: how many truck loads or cubic metres do you require?"
            value={formData.volume}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-foreground rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
          />
          <button
            type="button"
            className="bg-foreground hover:bg-primary text-white font-bold py-3 px-4 rounded transition flex items-center justify-center gap-2"
          >
            <span>📊</span>
            m³ volume calculator
          </button>
        </div>

        {/* Fill Type */}
        <input
          type="text"
          name="fillType"
          placeholder="Fill type wanted. e.g. grassy soil, compatible fill..."
          value={formData.fillType}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-foreground rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
        />

        {/* Truck Access Dropdown */}
        <div className="relative">
          <select
            name="truckAccess"
            value={formData.truckAccess}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-foreground rounded text-foreground focus:outline-none focus:border-accent appearance-none bg-white"
          >
            <option value="">Do you have tripper truck access?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground pointer-events-none" />
        </div>

        {/* Comments */}
        <textarea
          name="comments"
          placeholder="Any further comment..."
          value={formData.comments}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 border-2 border-foreground rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent resize-none"
        />

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-accent hover:bg-[#b36303] text-white font-bold px-8 py-3 rounded transition"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
