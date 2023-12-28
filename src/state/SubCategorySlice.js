import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseApiURL } from "../Api/Api";

const initialState = {
    subCategory: [],
    error: null,
    loading: false
}

export const getSubCategory = createAsyncThunk("subCategory/getSubCategory", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axios.get(`${BaseApiURL}/subcategory/${id}`);
        return res.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

const SubCategorySlice = createSlice({
    name: "subCategory",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSubCategory.pending, (state, action) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getSubCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.subCategory = action.payload.data
                state.error = null
            })
            .addCase(getSubCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }

})

export default SubCategorySlice.reducer