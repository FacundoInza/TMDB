const axios = require("axios");
const config = require("../config");
const qs = require("qs");

const tmdbAPI = "https://api.themoviedb.org/3";

const queries = config.APIKEY;

class MoviesService {
  static async getMovie(id) {
    try {
      const res = await axios.get(`${tmdbAPI}/movie/${id}${queries}`);
      return { error: false, data: res.data };
    } catch (error) {
      return { error: true, data: error };
    }
  }
}

module.exports = MoviesService;
