import axios from "axios";
import { setMovies } from "../state/movies";
import { setUser } from "../state/user";
import Cookies from "js-cookie";

class Fetch {
  static search = function (query) {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/search/movie?query=${query}`
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
        console.log(payload);
        const { data } = await axios.post(
          `http://localhost:8080/api/user/login`,
          payload
        );
        console.log(data);
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
        const { data } = await axios.post(`http://localhost:8080/api/user/me`, {
          token: token,
        });
        return dispatch(setUser(data));
      } catch (error) {
        console.error(error);
      }
    };
  };
}

export default Fetch;
