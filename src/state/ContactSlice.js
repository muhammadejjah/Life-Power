import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseApiURL } from "../Api/Api";

const initialState = {
    user: [],
    error: null,
    loading: false
}
export const PostContactForm = createAsyncThunk("contact/PostContactForm", async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await axios.post(`${BaseApiURL}/contact`, data)
        return res.data
    } catch (error) {
        return rejectWithValue(error);
    }
})

const ContactSlice = createSlice({
    name: "contact",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(PostContactForm.pending, (state, action) => {
                state.loading = true;
                state.error = null
            })
            .addCase(PostContactForm.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null
                state.user = action.payload
            })
            .addCase(PostContactForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }

})

export default ContactSlice.reducer