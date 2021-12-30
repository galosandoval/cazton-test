import { configureStore } from "@reduxjs/toolkit";
import configReducer from "../config/configSlice";

export default configureStore({
  reducer: {
    config: configReducer
  }
});
