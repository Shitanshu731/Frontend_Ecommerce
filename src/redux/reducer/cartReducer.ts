import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { cartReducerInitalState } from "../../types/reducer-types";

const initailstate:cartReducerInitalState = {} ;
export const cartReducer = createSlice({
    name : "cartReducer",
    initialState,
    reducers : {},
})