import {createApi, fetchBaseQuery} from  "@reduxjs/toolkit/query/react"
// import { server } from "../store"
import { AllProductResponse, CategoriesResponse } from "../../types/api-types"



export const productAPI = createApi({
    reducerPath : "productApi",
    baseQuery : fetchBaseQuery({baseUrl :`http://localhost:3000/api/v1/product/`}),
    endpoints : (builder) => ({
        latestProduct : builder.query<AllProductResponse, string>({
            query : () => "latestProduct"
    }),
        allProducts : builder.query<AllProductResponse, string>({
        query : (id) => `admin-products?id=${id}`
    }),
    categoriesProducts : builder.query<CategoriesResponse, string>({
    query : () => `categories`
    })
    })
})




export const { useLatestProductQuery,useAllProductsQuery,useCategoriesProductsQuery} = productAPI 