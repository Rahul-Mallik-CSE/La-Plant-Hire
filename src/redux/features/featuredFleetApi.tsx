/** @format */

import type { FeaturedFleetResponse } from "@/types/AllHomeTypes";
import baseApi from "../api/baseAPI";

interface EnquirySubmitData {
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  project_discription: string;
  service: number;
  servie_duration_days: number;
}

interface EnquiryResponse {
  success: boolean;
  message: string;
}

const featuredFleetApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFeaturedFleet: build.query<FeaturedFleetResponse, void>({
      query: () => ({
        url: "/managements/lisa_hire-serivices/?status=is_featured",
        method: "GET",
      }),
    }),
    getAllServices: build.query<FeaturedFleetResponse, void>({
      query: () => ({
        url: "/managements/lisa_hire-serivices/",
        method: "GET",
      }),
    }),
    submitEnquiry: build.mutation<EnquiryResponse, EnquirySubmitData>({
      query: (data) => ({
        url: "/managements/sent-hiring-enquiree/",
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});
export const {
  useGetFeaturedFleetQuery,
  useGetAllServicesQuery,
  useSubmitEnquiryMutation,
} = featuredFleetApi;
export default featuredFleetApi;
