const User = require("../models/User");

class UserControler {
  static async register(req, res) {
    console.log(req.body);
    try {
      const resp = await User.create(req.body);
      res.status(201).json(resp);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UserControler;
