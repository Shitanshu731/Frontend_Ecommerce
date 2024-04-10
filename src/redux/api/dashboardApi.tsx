import { CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const dashboardApi = createApi({
    reducerPath : "dashboardApi",
    baseQuery : fetchBaseQuery({
        stats : buildCreateApi.query<string, string>({
            query : (id) => `stats?id=${id}`,
        }),
    })
})

export const {} = dashboardApi;