import {createApi, fetchBaseQuery} from  "@reduxjs/toolkit/query/react"
// import { server } from "../store"
import { AllProductResponse, CategoriesResponse, MessageResponse, searchProductRequest, searchProductResponse } from "../../types/api-types"



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
    }),
    searchProducts : builder.query<searchProductResponse, searchProductRequest>({
        query : ({price,search,sort,category,page}) =>{
            let base = `all?search=${search}&page=${page}`
            if(price) base += `&price=${price}`
            if(category) base += `&category=${category}`
            if(sort) base += `&sort=${sort}`
            return base
        }
        }),
        newProduct : builder.mutation<MessageResponse,newProductRequest>({
            query : ({formData,id}) => ({
                url : `new?id=${id}`,method : "POST", body : formData, 
            }) 
        })

    })
})




export const { useLatestProductQuery,useAllProductsQuery,useCategoriesProductsQuery,useSearchProductsQuery,useNewProductMutation} = productAPI 