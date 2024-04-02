import { configureStore } from "@reduxjs/toolkit";
import { taskListReducer } from "./taskList";

export const appStore = configureStore({
  reducer: {
    taskList: taskListReducer,
  },
});
