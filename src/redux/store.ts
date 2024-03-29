import  {configureStore} from "@reduxjs/toolkit"
import { userAPI } from "./api/userApi"
import { userReducer } from "./reducer/userReducer"
import { productAPI } from "./api/productApi"
import { cartReducer } from "./reducer/cartReducer";

export const server = "localhost:3000/uploads";
export const store = configureStore({
    reducer : {
        [userAPI.reducerPath] : userAPI.reducer,
        [productAPI.reducerPath] : productAPI.reducer,
        [userReducer.name] : userReducer.reducer,
        [cartReducer.name] : cartReducer.reducer,
    },
    middleware: (mid) => [...mid(),userAPI.middleware,productAPI.middleware],
})