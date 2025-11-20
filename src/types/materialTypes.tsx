/** @format */

export interface MaterialCardType {
  title: string;
  image: string;
  description: string;
  bulletPoints?: string[];
}

export interface IdealForItem {
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

export interface MaterialItem {
  id: number;
  name: string;
  category: Category;
  price_per_day: string;
  ideal_for: IdealForItem[];
  total_tonners: string | null;
  dementions: string | null;
  extra_note: string;
  image: string | null;
  is_featured: boolean;
  is_active: boolean;
  is_truck: boolean;
  is_equipment: boolean;
  is_material: boolean;
}

export interface MaterialResponse {
  success: boolean;
  message: string;
  data: MaterialItem[];
}
