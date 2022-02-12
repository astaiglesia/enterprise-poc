import { configureStore } from '@reduxjs/toolkit';
import projectFormReducer from '../features/ProjectForm/projectFormSlice';
import projectListReducer from '../features/ProjectList/ProjectList/projectListSlice';

// create the Redux Store
export default configureStore({
  reducer: {
    projectForm: projectFormReducer,
    projectList: projectListReducer,

  },
})