// в файле ./redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice"; // Путь может отличаться в зависимости от вашей структуры проекта

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // другие редьюсеры, если есть
  },
});

export default store;
