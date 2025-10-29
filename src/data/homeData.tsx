/** @format */

import { Service, Vehicle } from "@/types/AllHomeTypes";

const services: Service[] = [
  {
    icon: "/logo/truck-logo2.png",
    title: "Truck Hire",
    description: "Reliable trucks for all your transportation needs",
  },
  {
    icon: "/logo/soil-material-logo.png",
    title: "Soil Register",
    description: "Register your interest to receive excess material",
  },
  {
    icon: "/logo/material-delivery-logo.png",
    title: "Material Delivery",
    description: "Timely delivery of construction materials",
  },
  {
    icon: "/logo/equipment-hire-logo.png",
    title: "Equipment Hire",
    description: "Professional grade construction equipment",
  },
];
export { services };

export const vehicles: Vehicle[] = [
  {
    image: "/products/heavy-duty-tipper.jpg",
    title: "Heavy Duty Tipper",
    description: "10m Tippers, 6x4, Steel body with swinging gates",
    price: "$220/day",
  },
  {
    image: "/products/truck-and-trailer-hire.jpg",
    title: "Truck and Trailer Hire",
    description: "20 Tonnes • Ideal for excavation and demolition",
    price: "$220/day",
  },
  {
    image: "/products/equipment-hire.jpg",
    title: "Equipment Hire",
    description: "25 Tonnes • Perfect for large construction projects",
    price: "$220/day",
  },
];
