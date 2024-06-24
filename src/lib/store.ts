import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import projectReducer from "./features/create-project";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
