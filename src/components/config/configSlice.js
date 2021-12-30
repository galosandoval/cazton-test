import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
  name: "config",
  initialState: {
    value: []
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { add } = configSlice.actions;

export default configSlice.reducer;
