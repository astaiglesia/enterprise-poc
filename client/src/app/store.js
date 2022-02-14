import { configureStore } from '@reduxjs/toolkit';
import projectFormReducer from '../features/ProjectForm/projectFormSlice';
import projectListReducer from '../features/ProjectList/ProjectList/projectListSlice';
import loginFormReducer from '../features/LoginPage/LoginModal/loginModalSlice';
import loginPageReducer from '../features/LoginPage/loginPageSlice';

// create the Redux Store
export default configureStore({
  reducer: {
    projectForm: projectFormReducer,
    projectList: projectListReducer,
    login: loginPageReducer,
    loginForm: loginFormReducer,
  },
})