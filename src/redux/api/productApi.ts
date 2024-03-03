import {createApi, fetchBaseQuery} from  "@reduxjs/toolkit/query/react"
// import { server } from "../store"
import { AllProductResponse } from "../../types/api-types"



export const productAPI = createApi({
    reducerPath : "productApi",
    baseQuery : fetchBaseQuery({baseUrl :`http://localhost:3000/api/v1/product/`}),
    endpoints : (builder) => ({
        latestProduct : builder.query<AllProductResponse, string>({
            query : () => "latestProduct"
    })
    })
})



export const { useLatestProductQuery } = productAPI 