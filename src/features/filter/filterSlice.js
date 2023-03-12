import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  sortBySalary: "default",
  type: "all",
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
    filterType: (state, action) => {
      if (action.payload) {
        state.type = action.payload;
      } else {
        state.type = "all";
      }
    },
  },
});

export default filterSlice.reducer;
export const { searchJob, sortBySalary, filterType } = filterSlice.actions;
