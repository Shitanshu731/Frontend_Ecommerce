import {createApi, fetchBaseQuery} from  "@reduxjs/toolkit/query/react"
// import { server } from "../store"
import { DeleteUserRequest, MessageResponse, UserResponse } from "../../types/api-types"
import { User } from "../../types/types"
import axios from "axios"


export const userAPI = createApi({
    reducerPath : "userApi",
    baseQuery : fetchBaseQuery({baseUrl :`http://localhost:3000/api/v1/user/`}),
    tagTypes: ["users"],
    endpoints : (builder) => ({
        login : builder.mutation<MessageResponse, User>({
            query : (user) => ({
            url : "new",
            method : "POST",
            body : user,
        })
    }),
    deleteUser: builder.mutation<MessageResponse, DeleteUserRequest>({
        query: ({ userId, adminUserId }) => ({
          url: `${userId}?id=${adminUserId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["users"],
      }),
    })
})

export const getUser = async (id: string) => {
      const { data }: { data: UserResponse } = await axios.get(
        `http://localhost:3000/api/v1/user/${id}`
      );
  
      return data;
  };

export const {useLoginMutation} = userAPI 