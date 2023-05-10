import axios from "axios";
import { setSearch, setSearchUser } from "../state/search";
import { setLogin } from "../state/user";
import { URLAPI } from "../config";
import Cookies from "js-cookie";

class Fetch {
  static search = function (query) {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(
          `${URLAPI}search/movie?query=${query}`
        );
        return dispatch(setSearch(data));
      } catch (error) {
        console.error(error);
      }
    };
  };

  static userLogin = function (payload) {
    return async (dispatch) => {
      try {
        const { data } = await axios.post(`${URLAPI}user/login`, payload);
        Cookies.set("token", data.token, { expires: 1 });
        console.log(data.payload);
        return dispatch(setLogin(data.payload));
      } catch (error) {
        console.error(error);
      }
    };
  };
  static userValidate = function () {
    return async (dispatch) => {
      try {
        const token = Cookies.get("token");
        const { data } = await axios.post(`${URLAPI}user/me`, {
          token: token,
        });
        return dispatch(setLogin(data));
      } catch (error) {
        console.error(error);
      }
    };
  };
  static getPopular = async function () {
    try {
      const { data } = await axios.get(`${URLAPI}/movie/popular`);

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  static getTopRated = async function () {
    try {
      const { data } = await axios.get(`${URLAPI}/movie/top_rated`);

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  static getUpcoming = async function () {
    try {
      const { data } = await axios.get(`${URLAPI}/movie/upcoming`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  static getMovie = async function (movieid) {
    try {
      const { data } = await axios.get(`${URLAPI}/movie/${movieid}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  static addFavorite = async function (userid, movieId) {
    try {
      await axios.put(`${URLAPI}/user/${userid}/addfavorite`, {
        movieId: movieId,
      });
      return { error: false, data: "Movie has added to favorites" };
    } catch (error) {
      return { error: true, data: "Error adding movie as favorites" };
    }
  };
  static removeFavorite = async function (userid, movieId) {
    try {
      await axios.put(`${URLAPI}/user/${userid}/removefavorite`, {
        movieId: movieId,
      });
      return { error: false, data: "Movie has removed to favorites" };
    } catch (error) {
      return { error: true, data: "Error removing movie as favorites" };
    }
  };

  static getUser = async function (userid) {
    try {
      const { data } = await axios.get(`${URLAPI}/user/${userid}`);
      const user = data;
      return { error: false, data: user };
    } catch (error) {
      return { error: true, data: "No se encontro el usuario" };
    }
  };
}

export default Fetch;
