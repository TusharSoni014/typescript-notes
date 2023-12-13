import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "./slices/numberSlice";

const store = configureStore({
  reducer: {
    numberSlice: numberSlice,
  },
});

export interface RootState {
  numberSlice: ReturnType<typeof numberSlice>;
  // Add other slices or reducers here
}

export default store;
