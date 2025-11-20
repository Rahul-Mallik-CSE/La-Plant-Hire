/** @format */

import baseApi from "../api/baseAPI";

interface CleanFillSubmitData {
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  suburb: string;
  street_address: string;
  volume: string;
  fill_type_wanted: string;
  tripper_truck_access: string;
  comment: string;
}

interface CleanFillResponse {
  success: boolean;
  message: string;
}

const contactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    submitCleanFill: build.mutation<CleanFillResponse, CleanFillSubmitData>({
      query: (data) => ({
        url: "/managements/sent-solid-enquiree/",
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSubmitCleanFillMutation } = contactApi;
export default contactApi;
