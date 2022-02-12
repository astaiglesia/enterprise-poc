import { createSlice } from "@reduxjs/toolkit";

// define the initial state of the order list
// -- ##mock data to be replaced by api call to database
const initialState = [
 {id: '1', orderState: 'Draft', nickname: 'Google HQ', location: 'Tribeca', client: 'Alfie S'},
 {id: '2', orderState: 'Draft', nickname: 'Facebook', location: 'Hudson Yards', client: 'Alfie S'},
 {id: '3', orderState: 'Draft', nickname: 'Blackrock', location: 'Hudson Yards', client: 'Jason F'},
 {id: '4', orderState: 'Draft', nickname: 'WeWork', location: 'Edison', client: 'Jason F'},
 {id: '5', orderState: 'Draft', nickname: 'WeWork', location: 'Montreal', client: 'Amy M'},
];

export const projectListSlice = createSlice({
  name: 'projectList',
  initialState,
  reducers: {
    createProject: (state, action) => {
      console.log(action.payload)

      const newProject = {
        id: new Date(),
        ...action.payload
      }
      state.push(newProject)
    },
  },
});

// export const { createProject, editProject, deleteProject } = projectListSlice.actions;
export const { createProject } = projectListSlice.actions;

export default projectListSlice.reducer;