import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseApiURL } from "../Api/Api";
const initialState={
    category:[],
    error:null,
    loading:false
}

export const getCategory = createAsyncThunk("category/getCategory",async(id,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI
    try {
        const res = await axios.get(`${BaseApiURL}/category/${id}`);
        return res.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

const CategorySlice = createSlice({
    name:"category",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getCategory.pending,(state,action)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(getCategory.fulfilled,(state,action)=>{
            state.loading=false;
            state.category=action.payload.data
            state.error=null
        })
        .addCase(getCategory.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
    }
    
})
export default CategorySlice.reducer