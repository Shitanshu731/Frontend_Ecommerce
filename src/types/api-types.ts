import { Product, User } from "./types";

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
    categories: [];
  };
  export type searchProductResponse = {
    success: boolean;
    product: Product[];
    totalPage : number;
  };
  export type searchProductRequest = {
    price? : string;
    category? : string;
    sort?: string;
    page?: number;
    search? : string
  };