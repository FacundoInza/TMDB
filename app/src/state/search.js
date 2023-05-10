import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSearch = createAction("SET_SEARCH_MOVIES");
export const setSearchUser = createAction("SET_SEARCH_USER");

const initialState = [];

export const searchReducer = createReducer(initialState, {
  [setSearch]: (state, action) => {
    return action.payload;
  },
  [setSearchUser]: (state, action) => {
    return action.payload;
  },
});
