/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
      // Get access token from localStorage (client-side only)
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("access_token");
        console.log(
          "🔍 Token from localStorage:",
          token ? `${token.substring(0, 30)}...` : "NULL"
        );

        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
          console.log("✅ Authorization header set");
        } else {
          console.error("❌ No token in localStorage - Please log in again");
        }

        // Get CSRF token from cookie if it exists (for POST requests)
        const csrfToken = document.cookie
          .split("; ")
          .find((row) => row.startsWith("csrftoken="))
          ?.split("=")[1];
        
        if (csrfToken) {
          headers.set("X-CSRFToken", csrfToken);
        }

        // Debug: Show all headers being sent
        console.log("📤 Request headers:", {
          Authorization: headers.get("Authorization"),
          ContentType: headers.get("Content-Type"),
          XCSRFToken: headers.get("X-CSRFToken"),
        });
      }

      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  tagTypes: ["User"],
  endpoints: () => ({}),
});

export default baseApi;
