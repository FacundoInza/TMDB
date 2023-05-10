const { Op } = require("sequelize");
const S = require("sequelize");
const User = require("../models/User");
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
  static getSearchUsers(req, res) {
    const q = req.query;

    User.findAll({
      where: {
        userName: {
          [S.Op.iLike]: `%${q.query}%`,
        },
      },
    })
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(500).send("errorrrr"));
  }
}

module.exports = SearchControler;
