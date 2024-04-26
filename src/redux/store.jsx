import { configureStore } from "@reduxjs/toolkit";
import { advertSlice } from "./advertSlice";
import { filterSlice } from "./filterSlice";

export const store = configureStore({
  reducer: {
    adverts: advertSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
