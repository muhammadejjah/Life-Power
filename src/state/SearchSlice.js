import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseApiURL } from "../Api/Api";
const initialState = {
    searchList: [],
    searchListShow: [],
    error: null,
    loading: false,
    searchTitle: ""
}

export const getSearch = createAsyncThunk("search/getSearch", async (term, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axios.get(`${BaseApiURL}/search/${term}`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.status)
    }
})

const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchTittle: (state, action) => {
            state.searchTitle = action.payload
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getSearch.pending, (state, action) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getSearch.fulfilled, (state, action) => {
                state.loading = false;
                state.searchList = action.payload.data.results
                state.searchListShow = action.payload.data.results.slice(0, 3)
                state.error = null
            })
            .addCase(getSearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
                state.searchList = []
            })
    }

})
export default SearchSlice.reducer
export const { setSearchTittle } = SearchSlice.actions