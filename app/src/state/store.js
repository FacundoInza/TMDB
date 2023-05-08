import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { moviesReducer } from "./movies";
import { registerReducer } from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
    user: registerReducer,
  },
});

export default store;
