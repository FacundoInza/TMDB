const User = require("../models/User");
const Token = require("../utils");

class UserControler {
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
        loggedIn: true,
      };
      const token = Token.generateToken(payload);
      res.status(200).json({ payload: payload, token: token });
    } else {
      return res.status(401).send({ error: "Invalid password" });
    }
  }
  static async me(req, res) {
    try {
      const payload = await Token.validateToken(req.body.token);
      console.log(payload);
      res.status(200).send(payload);
    } catch (error) {
      res.status(401).send({ error: "Invalid token" });
    }
  }
}

module.exports = UserControler;
