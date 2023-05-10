import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { searchReducer } from "./search";
import { registerReducer } from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    search: searchReducer,
    user: registerReducer,
  },
});

export default store;
