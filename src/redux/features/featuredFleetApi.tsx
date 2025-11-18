/** @format */

import type { FeaturedFleetResponse } from "@/types/AllHomeTypes";
import baseApi from "../api/baseAPI";

const featuredFleetApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFeaturedFleet: build.query<FeaturedFleetResponse, void>({
      query: () => ({
        url: "/managements/lisa_hire-serivices/?status=is_featured",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});
export const { useGetFeaturedFleetQuery } = featuredFleetApi;
export default featuredFleetApi;
