const axios = require("axios");
const config = require("../config");
const qs = require("qs");

const tmdbAPI = "https://api.themoviedb.org/3/search";

const apikey = config.APIKEY;

class SearchService {
  static async getSearchMovies(q) {
    const querie = qs.stringify(q);
    console.log(`${tmdbAPI}/movie${apikey}&${querie}`);

    try {
      const res = await axios.get(`${tmdbAPI}/movie${apikey}&${querie}`);
      return { error: false, data: res.data };
    } catch (error) {
      return { error: true, data: error };
    }
  }
}

module.exports = SearchService;
