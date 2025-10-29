/** @format */

import { HireTermCondition } from "@/types/equipmentTypes";

export const hireTermsConditions: HireTermCondition[] = [
  {
    title: "Operator Not Included",
    description: "Responsible qualified operators",
  },
  {
    title: "Insurance Required",
    description: "Valid public liability & equipment mandatory",
  },
  {
    title: "Experience Necessary",
    description: "Certified operators with relevant experience required",
  },
  {
    title: "Delivery Available",
    description: "Professional transport and setup service offered",
  },
];

export const equipment = [
  {
    id: 1,
    name: "5 Tonne Excavator",
    image: "/products/equipment/5-tonne-excavator.png",
    label: "POPULAR",
    description: "Ideal for",
    features: [
      "Site preparation",
      "Material handling",
      "Landscaping projects",
      "Tight access areas",
    ],
    specs: "Operation weight: 5.3-5.8 tonnes\nBucket capacity: 0.2-0.3 m³",
    price: "From $280/day",
  },
  {
    id: 2,
    name: "25tonne Excavator",
    image: "/products/equipment/excavators-25tonne.png",
    description: "Ideal for",
    features: [
      "Large excavation",
      "Demolition work",
      "Heavy lifting",
      "Road construction",
    ],
    specs: "Operation weight: 25+ tonnes\nBucket capacity: 1.2-1.8 m³",
    price: "From $650/day",
  },
  {
    id: 3,
    name: "Dozer Cat D5M",
    image: "/products/equipment/dozer-cat-d5m.png",
    description: "Available",
    features: ["Bulldozers", "Graders", "Compactors", "Dump trucks"],
    specs: "Various sizes available\nCustom specifications",
    price: "From $450/day",
  },
  {
    id: 4,
    name: "Expanding Fleet",
    description: "We're expanding our fleet with new equipment",
    features: ["Articulated trucks", "Telehandlers", "Specialty attachment"],
    specs: "",
    price: "",
    isExpanding: true,
  },
];
