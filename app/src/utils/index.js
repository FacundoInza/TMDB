import axios from "axios";
import { setMovies } from "../state/movies";
import { setUser } from "../state/user";
import { URLAPI } from "../config";
import Cookies from "js-cookie";

class Fetch {
  static search = function (query) {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(
          `${URLAPI}search/movie?query=${query}`
        );
        return dispatch(setMovies(data));
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
        return dispatch(setUser(data.payload));
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
        return dispatch(setUser(data));
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
      console.log("data:", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
}

export default Fetch;
