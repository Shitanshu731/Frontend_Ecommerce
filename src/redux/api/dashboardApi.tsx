import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const dashboardApi = createApi({
    reducerPath : "dashboardApi",
    baseQuery : fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/dashboard`,
    }),
    endpoints : (builder) => ({
        stats : builder.query<string, string>({
            query : (id) => `stats?id=${id}`,
        }),
        pie : builder.query<string, string>({
            query : (id) => `pie?id=${id}`,
        }),
        bar : builder.query<string, string>({
            query : (id) => `bar?id=${id}`,
        }),
    })
})

export const {} = dashboardApi;