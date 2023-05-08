import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAction("SET_USER");
export const setRegister = createAction("SET_REGISTER");
export const setLogOut = createAction("SET_LOGOUT");

const initialState = {
  email: null,
  userName: null,
  loggedIn: false,
};

export const registerReducer = createReducer(initialState, {
  [setRegister]: (state, action) => {
    axios.post(`http://localhost:8080/api/user/register`, action.payload);
  },
  [setUser]: (state, action) => {
    state.email = action.payload.email;
    state.userName = action.payload.userName;
    state.loggedIn = true;
  },
  [setLogOut]: (state) => initialState,
});
