import { createSlice } from "@reduxjs/toolkit";
import { UserMila } from "./userThunk";

const initialState = {
  loading: false,
  userDetail: null,
  error: null,
};

const userSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.userDetail = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(UserMila.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(UserMila.fulfilled, (state, action) => {
        state.userDetail = action.payload;
        state.loading = false;
      })

      .addCase(UserMila.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {clearUser} = userSlice.actions;
export default userSlice.reducer;
