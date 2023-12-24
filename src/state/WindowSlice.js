import { createSlice } from "@reduxjs/toolkit";
const initialState={windowSize:window.innerWidth}
const WindowSlice = createSlice({
    name: 'window',
    initialState,
    reducers:{
        smallScreens :(state,action)=>{
            state.windowSize=action.payload
        }
    }

})
export default WindowSlice.reducer
export const {smallScreens}=WindowSlice.actions