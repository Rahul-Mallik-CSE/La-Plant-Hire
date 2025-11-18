/** @format */

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Vehicle {
  image: string;
  title: string;
  description: string;
}

export interface IdealFor {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface FeaturedFleetItem {
  id: number;
  name: string;
  category: Category;
  price_per_day: string;
  ideal_for: IdealFor[];
  total_tonners: number;
  dementions: string | null;
  extra_note: string;
  image: string;
  is_featured: boolean;
  is_active: boolean;
  is_truck: boolean;
  is_equipment: boolean;
  is_material: boolean;
}

export interface FeaturedFleetResponse {
  success: boolean;
  message: string;
  data: FeaturedFleetItem[];
}
