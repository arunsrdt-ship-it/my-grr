import { createSlice } from "@reduxjs/toolkit";
import { getEnrolledCourses, getAvailableCourses, enrollDo } from "./courseThunk";

const initialState = {
  enrolled: [],          
  availableCourses: [], 
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(enrollDo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(enrollDo.fulfilled, (state, action) => {
        state.loading = false;
        state.enrolled.push(action.payload);
        state.availableCourses = state.availableCourses.filter(
          (course) => course.offeringId !== action.payload.offeringId
        );
      })
      .addCase(enrollDo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });

    builder
      .addCase(getEnrolledCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEnrolledCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.enrolled = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(getEnrolledCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });

    builder
      .addCase(getAvailableCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAvailableCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.availableCourses = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(getAvailableCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { clearError } = courseSlice.actions;
export default courseSlice.reducer;
