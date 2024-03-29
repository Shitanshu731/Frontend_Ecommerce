import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userReducerInitalState } from "../../types/reducer-types";
import { User } from "../../types/types";


const initialState:userReducerInitalState= {
    user: null,
    loading : false
}

export const userReducer = createSlice({
    name : "userReducer",
    initialState,
    reducers : {
        userExists : (state,action:PayloadAction<User>) => {
            state.loading = false;
            state.user = action.payload;
        },
        userNotExists : (state) => {
            state.loading = false;
            state.user = null;
        }
    }
})

export const {userExists,userNotExists} = userReducer.actions; 