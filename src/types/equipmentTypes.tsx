/** @format */

export interface HireTermCondition {
  title: string;
  description: string;
}

export interface EquipmentCardProps {
  name: string;
  image?: string;
  label?: string;
  description: string;
  features: string[];
  specs: string;
  price: string;
  isExpanding?: boolean;
}
