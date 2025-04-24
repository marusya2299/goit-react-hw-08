import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = state => state.filters.name;
export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
