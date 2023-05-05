const SearchService = require("../services/search");

class SearchControler {
  static async getSearchMovies(req, res) {
    const q = req.query;
    const { error, data } = await SearchService.getSearchMovies(q);

    if (error) {
      return res.status(500).send(data);
    }
    res.send(data);
  }
}

module.exports = SearchControler;
