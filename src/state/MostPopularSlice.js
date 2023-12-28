import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseApiURL } from "../Api/Api";

const initialState = {
    mostPopular: [],
    error: null,
    loading: false
}

export const getMostPopular = createAsyncThunk("mostPopular/getMostPopular", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axios.get(`${BaseApiURL}/mostPopular`);
        return res.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

const MostPopularSlice = createSlice({
    name: "mostPopular",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getMostPopular.pending, (state, action) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getMostPopular.fulfilled, (state, action) => {
                state.loading = false;
                state.mostPopular = action.payload.data
                state.error = null
            })
            .addCase(getMostPopular.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }

})

export default MostPopularSlice.reducer