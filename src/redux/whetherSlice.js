import { createSlice } from "@reduxjs/toolkit";
const whetherSlice = createSlice({
  name: "whether",
  initialState: {
    data: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setData } = whetherSlice.actions;
export default whetherSlice.reducer;
