import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"

import userReducer from "../features/user/userSlice"

import courseReducer from "../features/courses/courseSlice"
import detailReducer from "../features/details/detailsSlice"


export const store = configureStore({
    reducer: {
        auth: authReducer,

        user: userReducer,

        course: courseReducer,
        detail: detailReducer,
    }
})