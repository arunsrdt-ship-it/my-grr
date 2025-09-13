import { createAsyncThunk } from "@reduxjs/toolkit";
import { detailApi } from "../../api/detail";


export const gettingDetails = createAsyncThunk(
    "user/subjectdetail",
    async(offeringId, {rejectWithValue}) => {
        try {
            const data = await detailApi(offeringId)

            if(!data || !data.offeringId){
            return rejectWithValue("No Detail Found")
        }
        return data;
        } catch (error) {
            return rejectWithValue(error.response?.detail?.message || "Server error")
        }
    }
)