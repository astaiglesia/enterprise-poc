import { createSlice } from "@reduxjs/toolkit";

// MVP to handle 1 project at a time
// stretch to toggle between multiple projects
const initialState = {
  project1: {},
  project2: {},
  project3: {}
};

export const manageContentSlice = createSlice({
  name: 'manageContent',
  initialState,
  reducers: {
    manageProject: (state, action) => {
      console.log(action.payload);
      state.project1 = action.payload
      // (!state.project1._id) ? state.project1 = action.payload
      //   : state.project2 = action.payload   // will cause an overwrite of project2 if both are filled, ideate logic to handle multiple loads
    },
  },
});

export const { manageProject } = manageContentSlice.actions;

export default manageContentSlice.reducer;