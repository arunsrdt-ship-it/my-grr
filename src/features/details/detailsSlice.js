import { createSlice } from "@reduxjs/toolkit";
import {gettingDetails} from "./detailThunk"


const initialState = {
    detail:null,
    loading: false,
    error:null,
}

const detailSlice = createSlice({
    name:"detail",
    initialState,
    reducers:{
    },

    extraReducers : (builder) => {
        builder
        .addCase(gettingDetails.pending, (state) =>{
            state.loading= true;
            state.error= false;
        })

        .addCase(gettingDetails.fulfilled, (state, actions) => {
            state.detail = actions.payload;
            state.loading=false
        })

        .addCase(gettingDetails.rejected, (state, action) => {
            state.loading = false;
            state.error= action.payload
        })
    }
});


export default detailSlice.reducer;