import { CartItem, User, shippingInfo } from "./types";

export interface userReducerInitalState {
    user : User | null;
    loading : boolean;
}
export interface cartReducerInitalState {
    loading : boolean;
    cartItems : CartItem[];
    subtotal : number;
    tax : number;
    shippingCharges : number;
    total : number;
    shippingInfo : shippingInfo;
}