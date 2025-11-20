/** @format */

import baseApi from "../api/baseAPI";
import type { EquipmentResponse } from "@/types/equipmentTypes";

const equipmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getEquipment: build.query<EquipmentResponse, void>({
      query: () => ({
        url: "/managements/lisa_hire-serivices/?status=is_equipment",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetEquipmentQuery } = equipmentApi;
export default equipmentApi;
