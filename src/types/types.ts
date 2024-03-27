export interface User {
    name : string;
    email : string;
    photo : string;
    gender : string;
    role : string;
    dob : string;
    _id : string;
}
export interface Product {
    name : string;
    price : number;
    stock : number;
    photo : string;
    category : string;
    _id : string;
}
export type CartItem =  {
    productId : string;
    photo : string;
    price : number;
    name : string;
    quantity : number;
    stock : number
}
export type shippingInfo = {
    address : string;
    city : string;
    state : string;
    country : string;
    pinCode : string;
}
export type OrderItem = Omit<CartItem,"stock"> & {_id:string}

export interface order {
    orderItems : OrderItem[];
    shippingInfo : shippingInfo;
    subtotal : number;
    shippingCharges : number;
    tax : number;
    discount : number;
    total  : number;
    user: {
        name:  string,
        _id : string
    };
    _id : string;
}