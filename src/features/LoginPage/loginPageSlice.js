import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
}

export const loginPageSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    toggleLoginModal: currentState => !currentState,
  },
});

export const { toggleLoginModal } = loginPageSlice.actions;

export default loginPageSlice.reducer;