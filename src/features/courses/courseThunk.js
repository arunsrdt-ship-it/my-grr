import { createAsyncThunk } from "@reduxjs/toolkit";
import { enrollApi, fetchApi } from "../../api/course";

export const enrollDo = createAsyncThunk(
  "user/subjectEnroll",
  async ({ userDetailsId, subjectId }, { rejectWithValue }) => {
    try {
      const data = await enrollApi(userDetailsId, subjectId);
      if (!data.subjectId) {
        return rejectWithValue("Already Enrolled");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Server error");
    }
  }
);

export const getEnrolledCourses = createAsyncThunk(
  "course/getEnrolledCourses",
  async ({ userDetailsId }, { rejectWithValue }) => {
    try {
      const data = await fetchApi(userDetailsId);
      return data.enrolled || [];
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Server error");
    }
  }
);

export const getAvailableCourses = createAsyncThunk(
  "course/getAvailableCourses",
  async ({ userDetailsId }, { rejectWithValue }) => {
    try {
      const data = await fetchApi(userDetailsId);
      return data.notEnrolled || []; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Server error");
    }
  }
);
