import {createSlice} from "@reduxjs/toolkit"
import {loginUser} from "./authThunk.js"

const initialState = {
    loading:false,
    user:null,
    error:null,
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout: (state) => {
            state.user=null;
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error=null;
        })

        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading=false;
            state.user= action.payload;

            state.isAuthenticated = true;  // mark as logged in
        })

        .addCase(loginUser.rejected, (state, action) =>{
            state.loading=false;
            state.error = action.payload;

            state.isAuthenticated = false;

        })
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;