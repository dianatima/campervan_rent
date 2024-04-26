import { createSlice } from "@reduxjs/toolkit";
import { fetchAllAdverts, fetchAdverts } from "./advertsOperations";

const onPending = (state) => {
  state.isLoading = true;
};
const onRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

export const advertSlice = createSlice({
  name: "adverts",
  initialState: { adverts: [], isLoading: false, isError: null, alladverts: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAdverts.pending, onPending)
      .addCase(fetchAllAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.adverts = [...state.adverts, ...payload];
      })
      .addCase(fetchAllAdverts.rejected, onRejected)
      .addCase(fetchAdverts.pending, onPending)
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.alladverts = [...payload];
        state.adverts = [];
      })
      .addCase(fetchAdverts.rejected, onRejected);
  },
});

export default advertSlice.reducer;
