import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../api/auth.js";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async({userDetailsId, password}, {rejectWithValue}) => {
        try {
            const data = await loginApi(userDetailsId, password)
        if (!data?.userDetailsId) {
            return rejectWithValue("Invalid Credentials")
        }
        return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Server error")
        }
    }
)



