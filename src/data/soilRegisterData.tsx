/** @format */

import { ContactInfoItem } from "@/types/soilRegisterTypes";
import { PiBuildingsFill, PiMapPinFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoGlobe } from "react-icons/io5";

export const contactInfoData: ContactInfoItem[] = [
  {
    icon: PiBuildingsFill,
    label: "Company",
    details: ["LA Trading Pty Ltd", "ABN: 65107948032"],
  },
  {
    icon: PiMapPinFill,
    label: "Address",
    details: ["292-300 Wuraga Road", "Holmview"],
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    details: ["0414 44 55 10"],
  },
  {
    icon: MdEmail,
    label: "Email",
    details: ["info@latrading.com.au"],
  },
  {
    icon: IoGlobe,
    label: "Website",
    details: ["latrading.com.au"],
  },
];
