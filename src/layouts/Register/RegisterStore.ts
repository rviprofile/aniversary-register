import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./RegisterSlices";

export const store = configureStore({
  reducer: registerSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
