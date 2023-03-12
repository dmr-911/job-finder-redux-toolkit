import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  sortBySalary: "default",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchJob: (state, action) => {
      state.sortBySalary = "default";
      state.search = action.payload;
    },
    sortBySalary: (state, action) => {
      state.sortBySalary = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { searchJob, sortBySalary } = filterSlice.actions;
