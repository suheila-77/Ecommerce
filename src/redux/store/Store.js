import { configureStore } from "@reduxjs/toolkit";
import  counter from "../reducer/counter"


const store = configureStore({
    reducer:{
        tasbih:counter
    }
})

export default store