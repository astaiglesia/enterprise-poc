import { configureStore } from '@reduxjs/toolkit';
import projectFormReducer from '../features/ProjectsContent/ProjectForm/projectFormSlice';
import projectListReducer from '../features/ProjectsContent/ProjectListContainer/ProjectList/projectListSlice';
import loginFormReducer from '../routes/LoginPage/LoginModal/loginModalSlice';
import loginPageReducer from '../routes/LoginPage/loginPageSlice';


// create the Redux Store
export default configureStore({
  reducer: {
    projectForm: projectFormReducer,
    projectList: projectListReducer,
    login: loginPageReducer,
    loginForm: loginFormReducer,
  },
})