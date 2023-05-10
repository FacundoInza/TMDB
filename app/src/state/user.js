import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const setLogin = createAction("SET_LOGIN");
export const setRegister = createAction("SET_REGISTER");
export const setLogOut = createAction("SET_LOGOUT");
export const addFavorite = createAction("ADD_FAVORITE");
export const removeFavorite = createAction("REMOVE_FAVORITE");

const initialState = {
  id: null,
  imageUrl: null,
  email: null,
  userName: null,
  favorites: [],
  loggedIn: false,
};

export const registerReducer = createReducer(initialState, {
  [setRegister]: (state, action) => {
    axios.post(`http://localhost:8080/api/user/register`, action.payload);
  },
  [setLogin]: (state, action) => {
    state.email = action.payload.email;
    state.userName = action.payload.userName;
    state.loggedIn = true;
    state.favorites = action.payload.favorites;
    state.id = action.payload.id;
  },
  [setLogOut]: (state, action) => initialState,
  [addFavorite]: (state, action) => {
    state.favorites.push(action.payload);
  },
  [removeFavorite]: (state, action) => {
    console.log(action.payload);
    state.favorites = state.favorites.filter(
      (movie) => movie.id !== action.payload.id
    );
  },
});
