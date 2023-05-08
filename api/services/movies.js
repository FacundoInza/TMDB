const axios = require("axios");
const { URLAPI, APIKEY } = require("../config");
const qs = require("qs");

class MoviesService {
  static async getMovie(id, q) {
    try {
      const res = await axios.get(`${URLAPI}/movie/${id}${APIKEY}&${q}`);
      return { error: false, data: res.data };
    } catch (error) {
      return { error: true, data: error };
    }
  }
  static async getPopular(q) {
    try {
      const res = await axios.get(`${URLAPI}/movie/popular${APIKEY}&${q}`);
      return { error: false, data: res.data };
    } catch (error) {
      return { error: true, data: error };
    }
  }
  static async getUpcoming(q) {
    try {
      const res = await axios.get(`${URLAPI}/movie/upcoming${APIKEY}&${q}`);
      return { error: false, data: res.data };
    } catch (error) {
      return { error: true, data: error };
    }
  }
  static async getToprated(q) {
    try {
      const res = await axios.get(`${URLAPI}/movie/top_rated${APIKEY}&${q}`);
      return { error: false, data: res.data };
    } catch (error) {
      return { error: true, data: error };
    }
  }
}

module.exports = MoviesService;
