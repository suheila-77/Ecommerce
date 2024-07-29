import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducer/cart"
const index = configureStore({
    reducer:{
        cart: cartSlice
    }
})


export default index