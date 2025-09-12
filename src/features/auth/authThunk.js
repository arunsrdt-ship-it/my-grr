import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../api/authApi";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async({userId, pass}, {rejectWithValue}) => {
        try {
            const data = await loginApi(userId, pass)
        if(!data.success){
            return rejectWithValue("Invalid Credentials")
        }
        return data.user;
    
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "server error")
        }
    }
)