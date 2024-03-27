import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    AllOrdersResponse,
  MessageResponse,
  NewOrderRequest,
  orderDetailsResponse,
  updateOrderRequest,
} from "../../types/api-types";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/v1/order/`,
  }),
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    newOrder: builder.mutation<MessageResponse, NewOrderRequest>({
      query: (order) => ({
        url: "new",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["orders"],
    }),
    updateOrder: builder.mutation<MessageResponse,updateOrderRequest>({
      query: ({userId,orderId}) => ({
        url: `${orderId}?id=${userId}`,
        method: "PUT",
      }),
      invalidatesTags: ["orders"],
    }),
    deleteOrder: builder.mutation<MessageResponse,updateOrderRequest>({
      query: ({userId,orderId}) => ({
        url: `${orderId}?id=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["orders"],
    }),
    myOrders : builder.query<AllOrdersResponse,string>({
        query : (id) => `my?id=${id}`,
        providesTags : ["orders"],
    }),
    allOrders : builder.query<AllOrdersResponse,string>({
        query : (id) => id ,
        providesTags : ["orders"],
    }),
    orderDetails : builder.query<AllOrdersResponse,string>({
        query : (id) => id  ,
        providesTags : ["orders"],
    }),
  }),
});

export const {
  useNewOrderMutation,useAllOrdersQuery,useMyOrdersQuery,useOrderDetailsQuery,useUpdateOrderMutation,useDeleteOrderMutation
} = orderApi;