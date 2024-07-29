import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name:"tasbih",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value +=1

        },
        decrement:(state)=>{
            state.value -=1
        },
        reset:(state)=>{
            state.value=0;
        }
    }
})

export const{increment,decrement,reset}= counter.actions

export default counter.reducer
