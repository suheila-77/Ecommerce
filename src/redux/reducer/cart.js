import { createSlice } from "@reduxjs/toolkit"; //for tracking

const cartSlice = createSlice({
    name : "cart",
    initialState:{
        items:[],
        totalPrice:0
    },

    reducers:{
        addItemTocart:(state,action)=>{
            state.items.push(action.payload)
        },

        calculateTotalPrice:(state)=>{
            let total =0;
            state.items.forEach((item)=>{
               total+= item.price
            })

            state.totalPrice = total
        },


        removeItemFromCart:(state,action)=>{
            state.items = state.items.filter((item)=> item.id != action.payload.id)
        }
    }


})
export const {addItemTocart, calculateTotalPrice, removeItemFromCart}= cartSlice.actions //destructruring
export default cartSlice.reducer