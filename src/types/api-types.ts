import { CartItem, Product, User, order, shippingInfo } from "./types";

export type MessageResponse = {
    success : boolean;
    message : string;
}
export type UserResponse = {
    success: boolean;
    user: User;
  };
export type AllProductResponse = {
    success: boolean;
    product: Product[];
  };
  export type CustomError =  {
    status : number;
    data : {
      message: string;
      success : boolean;
    };
  };
  export type CategoriesResponse = {
    success: boolean;
    category: [];
  };
  export type searchProductResponse = {
    success: boolean;
    products: Product[];
    totalPage : number;
  };
  export type searchProductRequest = {
    price? : number;
    category? : string;
    sort?: string;
    page?: number;
    search? : string
  };
  export type newProductRequest = {
    id : string;
    formData : FormData;
  };
  export type NewOrderRequest = {
    shippingInfo : shippingInfo;
    orderItems : CartItem[];
    subtotal : number;
    tax : number;
    discount : number;
    total  : number;
    user : string;

  }
  export type updateOrderRequest = {
    userId : string;
    orderId : string;
  }
  export type AllOrdersResponse = {
    success: boolean;
    order: order[];
  };
  export type orderDetailsResponse = {
    success: boolean;
    order: order;
  };
  export type DeleteUserRequest = {
    userId: string;
    adminUserId: string;
  };