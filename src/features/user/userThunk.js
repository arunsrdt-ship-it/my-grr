import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserById } from "../../api/userApi";


export const UserMila = createAsyncThunk(
    "user/UserDetails",
    async(userDetailsId, {rejectWithValue})=> {
        try {
            const data = getUserById(userDetailsId)
            if(!data.success){
                return rejectWithValue("User Not Found")
            }
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "server error")
        }
    }
)