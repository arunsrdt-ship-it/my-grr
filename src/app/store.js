import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import courseReducer from "../features/courses/courseSlice"
import detailReducer from "../features/details/detailsSlice"


export const store = configureStore({
    reducer: {
        auth: authReducer,
        course: courseReducer,
        detail: detailReducer,
    }
})