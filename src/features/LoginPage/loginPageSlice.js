import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
}

export const loginPageSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    toggleLoginModal: (state, action) => {state.isModalOpen = action.payload},
  },
});

export const { toggleLoginModal } = loginPageSlice.actions;

export default loginPageSlice.reducer;