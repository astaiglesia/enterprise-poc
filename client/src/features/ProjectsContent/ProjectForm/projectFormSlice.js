import { createSlice } from "@reduxjs/toolkit";

// define the initial state of the order list
// -- ##mock data to be replaced by api call to database
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
      
      // ##convert id to uuid
      // const newProject = {
      //   id: new Date(),
      //   ...action.payload
      // }
      // console.log(newProject);

      state.newProjectData = action.payload
    },
  },
});

// export const { createProject, editProject, deleteProject } = projectListSlice.actions;
export const { createProject } = projectFormSlice.actions;

export default projectFormSlice.reducer;