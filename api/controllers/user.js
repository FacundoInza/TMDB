const User = require("../models/User");
const MoviesService = require("../services/movies");
const Token = require("../utils");

class UserControler {
  static async getUser(req, res) {
    try {
      const user = await User.findByPk(req.params.userId);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async register(req, res) {
    try {
      const resp = await User.create(req.body);
      res.status(201).json(resp);
    } catch (error) {
      res.status(401).json({ error: "Invalid dates from register" });
    }
  }
  static async login(req, res) {
    console.log(req.body.email);
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(401).send({ error: "Invalid email" });
    const bool = await user.validatePassword(req.body.password);
    console.log(bool);
    if (bool) {
      const payload = {
        userName: user.userName,
        email: user.email,
      };
      const token = Token.generateToken(payload);
      res.status(200).json({ payload: user, token: token });
    } else {
      return res.status(401).send({ error: "Invalid password" });
    }
  }
  static async me(req, res) {
    try {
      const payload = await Token.validateToken(req.body.token);
      const user = await User.findOne({ where: { email: payload.email } });
      res.status(200).send(user);
    } catch (error) {
      res.status(401).send({ error: "Invalid token" });
    }
  }

  static async addFavorite(req, res) {
    try {
      const userId = req.params.userId;
      const movieId = req.body.movieId;

      const { data } = await MoviesService.getMovie(movieId);
      const movie = data;

      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).send("User not found");
      }

      const favorites = user.favorites;
      favorites.push(movie);

      await User.update({ favorites: favorites }, { where: { id: userId } });
      res.status(201).send(favorites);
    } catch (error) {
      res.status(500).send("Error adding favorite");
    }
  }

  static async removeFavorite(req, res) {
    try {
      const userId = req.params.userId;
      const movieId = req.body.movieId;

      const { data } = await MoviesService.getMovie(movieId);
      const movie = data;

      const user = await User.findByPk(userId);

      if (!user) {
        res.status(404).send("User not found");
      }

      let favorites = user.favorites;
      favorites = favorites.filter((mov) => mov.id !== movie.id);

      await User.update({ favorites: favorites }, { where: { id: userId } });
      res.status(201).send(favorites);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error adding favorite");
    }
  }
}

module.exports = UserControler;
