import { createSlice } from "@reduxjs/toolkit";

// define async thunk reducer to handle authentication

export const loginModalSlice = createSlice({
  name: 'loginForm',
  initialState: {
    user: '',
    password: '',
  },
  reducers: {
    attemptLogin: (state, action) => {
      console.log(action.payload)
    }
  },
});

export const { attemptLogin } = loginModalSlice.actions;

export default loginModalSlice.reducer;