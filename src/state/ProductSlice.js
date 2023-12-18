import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseApiURL } from "../Api/Api";
const initialState={
    product:[],
    error:null,
    loading:false
}

export const getProduct = createAsyncThunk("product/getProduct",async(id,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI
    try {
        const res = await axios.get(`${BaseApiURL}/product/${id}`);
        return res.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

const ProductSlice = createSlice({
    name:"product",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getProduct.pending,(state,action)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.loading=false;
            state.product=action.payload.data
            state.error=null
        })
        .addCase(getProduct.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
            console.log(state.error)
        })
    }
    
})
export default ProductSlice.reducer