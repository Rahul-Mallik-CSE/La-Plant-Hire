/** @format */

import baseApi from "../api/baseAPI";
import type { MaterialResponse } from "@/types/materialTypes";

const materialApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMaterials: build.query<MaterialResponse, void>({
      query: () => ({
        url: "/managements/lisa_hire-serivices/?status=is_material",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetMaterialsQuery } = materialApi;
export default materialApi;
