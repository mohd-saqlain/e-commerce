import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:'cartItems',
    initialState,
    reducers:{
        addCartItem(state,action){
            console.log(action.payload)
            const data = action.payload;
            const isPresent = state.find((item)=>item._id === data._id);
            if(isPresent){
                isPresent.quantity += 1; 
            }else{
                state.push({...data,quantity:1});
            }
            return state;
        },
        removeCartItem(state,action){
            return state.filter((item)=>item?._id !== action.payload)
        },
        removeAllItem(state,action){
            return [];
        },
        increaseQuanity(state,action){
            const isPresent = state.find((item)=>item._id === action.payload);
            isPresent.quantity += 1;
        },
        decreaseQuantity(state,action){
            const isPresent = state.find((item)=>item._id === action.payload);
            if(isPresent.quantity != 1){
                isPresent.quantity -= 1;
            }else{
                return state.filter((item)=>item?._id !== action.payload)
            }
        }
    }
})

export const {addCartItem,removeCartItem,removeAllItem,increaseQuanity,decreaseQuantity} = cartSlice.actions;
export default cartSlice 