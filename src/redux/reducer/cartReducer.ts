import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { cartReducerInitalState } from "../../types/reducer-types";
import { CartItem } from "../../types/types";

const initialState:cartReducerInitalState = {
    loading: false,
    cartItems : [],
    subtotal : 0,
    tax : 0,
    shippingCharges : 0,
    discount : 0,
    total : 0,
    shippingInfo : {
        address : "",
        city : "",
        state : "",
        country : "",
        pinCode : "",
    }


} ;
export const cartReducer = createSlice({
    name : "cartReducer",
    initialState,
    reducers : {
        addToCart : (state,action: PayloadAction<CartItem>) => {
            state.loading = true;
            state.cartItems.push(action.payload);
            state.loading = false;
        },
    },
})