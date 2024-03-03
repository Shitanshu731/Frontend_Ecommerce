import { createSlice } from "@reduxjs/toolkit";
import { userReducerInitalState } from "../../types/reducer-types";


const initialState:userReducerInitalState= {
    user: null,
    loading : true
}

export const userReducer = createSlice({
    name : "userReducer",
    initialState,
    reducers : {}
})