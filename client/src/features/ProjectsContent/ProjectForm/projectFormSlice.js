import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newProjectData: {},
};

export const projectFormSlice = createSlice({
  name: 'projectForm',
  initialState,
  reducers: {
    createProject: (state, action) => {
      // console.log('createProject reducer triggered')
      // console.log(action.payload)
      state.newProjectData = action.payload
    },
  },
});

export const { createProject } = projectFormSlice.actions;

export default projectFormSlice.reducer;