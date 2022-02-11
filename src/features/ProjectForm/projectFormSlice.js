import { createSlice } from "@reduxjs/toolkit";


// create slice to handle the project form state
// start simply with required fields only
export const projectFormSlice = createSlice({
  name: 'projectForm',
  initialState: {
    // -- orderState property may be edited in future feature
    orderState: 'Draft',
    nickname: 'initial name',
    location: '',
    client: '',
    // company: '',
    // deliveryDate: '',
    // rentalTerm: '',
    // tag: '',
  },
  // -- under the hood: createSlice =>  
  // creates actionTypes by mapping the slice name with reducer keys
  // ---- e.g. {type: "projectForm/changeNickname"}
  // creates reducer functions that responds to actions and updates state immutably 
  reducers: {
    changeNickname: (state, action) => state.nickname = action.payload,
    changeLocation: (state, action) => state.location = action.payload,
    changeClient: (state, action) => state.client = action.payload,
  }
})

export const { changeNickname, changeLocation, changeClient } = projectFormSlice.actions;

export const selectNickname = state => state.projectForm.nickname;


export default projectFormSlice.reducer;
