import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseApiURL } from "../Api/Api";

const initialState = {
    sliderImages: [],
    bestSelling: [],
    categories: [],
    comments: [],
    error: null,
    loading: false
}

export const getHomeData = createAsyncThunk("home/getHomeData", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axios.get(`${BaseApiURL}/homepage`);
        return res.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

const HomeSlice = createSlice({
    name: "home",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getHomeData.pending, (state, action) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getHomeData.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload.data.categories;
                state.sliderImages = action.payload.data.slider_images;
                state.bestSelling = action.payload.data.best_selling;
                state.comments = action.payload.data.comments;
                state.error = null
            })
            .addCase(getHomeData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }

})

export default HomeSlice.reducer