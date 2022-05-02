import { configureStore } from '@reduxjs/toolkit';
import projectFormReducer from '../features/ProjectsContent/ProjectForm/projectFormSlice';
import manageContentReducer from '../features/ManageContent/manageContentSlice';
import loginFormReducer from '../routes/LoginPage/LoginModal/loginModalSlice';
import loginPageReducer from '../routes/LoginPage/loginPageSlice';


// create the Redux Store
export default configureStore({
  reducer: {
    projectForm: projectFormReducer,
    manageContent: manageContentReducer,
    login: loginPageReducer,
    loginForm: loginFormReducer,
  },
})