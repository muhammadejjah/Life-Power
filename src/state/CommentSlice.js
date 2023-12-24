import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseApiURL } from "../Api/Api";
const initialState = {
    comment:[],
    error: null,
    loading: false
}
export const PostCommentForm = createAsyncThunk("comment/PostCommentForm", async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(data)
    try {
        const res = await axios.post(`${BaseApiURL}/comment`, data)
        console.log(res.data)
        return res.data

    } catch (error) {
        return rejectWithValue(error);
    }
})

const CommentSlice = createSlice({
    name: "comment",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(PostCommentForm.pending, (state, action) => {
                state.loading = true;
                state.error = null
            })
            .addCase(PostCommentForm.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null
                state.comment= action.payload
            })
            .addCase(PostCommentForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }

})
export default CommentSlice.reducer