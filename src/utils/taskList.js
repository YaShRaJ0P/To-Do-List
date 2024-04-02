// Import the createSlice and nanoid functions from Redux
import { createSlice, nanoid } from "@reduxjs/toolkit";


// Create the taskList slice with the required properties
const taskList = createSlice({
  name: "taskList",
  initialState: [],
  reducers: {
    // Add a new task to the tasks array
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        ...action.payload,
      };
      state.unshift(newTask);
    },
    // Edit an existing task in the tasks array based on the provided ID
    editTask: (state, action) => {
      const updatedTasks = state.map(
        (task) =>
          task.id === action.payload.id && (task.text = action.payload.text)
      );
      state = updatedTasks;
    },
    // Delete a task from the tasks array based on the provided ID
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    // Remove all tasks from the tasks array
    removeAll: (state, action) => {
      return [];
    },
    // Toggle the complete status of a task in the tasks array based on the provided ID
    toggleCompleteTask: (state, action) => {
      const updatedTasks = state.map(
        (task) =>
          task.id === action.payload.id &&
          (task.isCompleted = !action.payload.isCompleted)
      );
      state = updatedTasks;
    },
  },
});

export const { addTask, editTask, deleteTask, removeAll, toggleCompleteTask } =
  taskList.actions;
export const taskListReducer = taskList.reducer;
