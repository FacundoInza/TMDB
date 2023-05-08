const MoviesService = require("../services/movies");

class MoviesControler {
  static async getMovie(req, res) {
    const q = req.query;
    const movieId = req.params.movieId;

    const { error, data } = await MoviesService.getMovie(movieId, q);

    if (error) {
      return res.status(500).send(data);
    }
    res.send(data);
  }
  static async getPopular(req, res) {
    const q = req.query;
    const { error, data } = await MoviesService.getPopular(q);
    if (error) {
      return res.status(500).sen(data);
    }
    res.status(200).send(data);
  }
  static async getUpcoming(req, res) {
    const q = req.query;
    const { error, data } = await MoviesService.getUpcoming(q);
    if (error) {
      return res.status(500).sen(data);
    }
    res.status(200).send(data);
  }
  static async getToprated(req, res) {
    const q = req.query;
    const { error, data } = await MoviesService.getToprated(q);
    if (error) {
      return res.status(500).sen(data);
    }
    res.status(200).send(data);
  }
}

module.exports = MoviesControler;
