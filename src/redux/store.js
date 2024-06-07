import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        cartItems:cartSlice.reducer,
    }
});

export default store;