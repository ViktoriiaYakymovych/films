import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterMovies(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterMovies } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
