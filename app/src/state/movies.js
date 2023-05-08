import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMovies = createAction("SET_MOVIES");

const initialState = {
  results: [],
};

export const moviesReducer = createReducer(initialState, {
  [setMovies]: (state, action) => {
    return action.payload;
  },
});
