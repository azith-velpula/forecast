import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import whetherSliceReducer from "./whetherSlice";
const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    whether: whetherSliceReducer,
  },
});
export default appStore;
