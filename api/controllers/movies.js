const MoviesService = require("../services/movies");

class MoviesControler {
  static async getMovie(req, res) {
    const movieId = req.params.movieId;

    const { error, data } = await MoviesService.getMovie(movieId);

    if (error) {
      return res.status(500).send(data);
    }
    res.send(data);
  }
}

module.exports = MoviesControler;
