/** @format */

import type { FeaturedFleetResponse } from "@/types/AllHomeTypes";
import baseApi from "../api/baseAPI";

const truckFleetApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTruckFleet: build.query<FeaturedFleetResponse, void>({
      query: () => ({
        url: "/managements/lisa_hire-serivices/?status=is_truck",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});
export const { useGetTruckFleetQuery } = truckFleetApi;
export default truckFleetApi;
