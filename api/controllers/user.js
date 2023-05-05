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
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(401).json({ error: "Invalid email" });
    const bool = await user.validatePassword(req.body.password);
    console.log(bool);
    if (bool) {
      const token = Token.generateToken({
        userName: user.userName,
        email: user.email,
      });
      return res.status(201).cookie("token", token).send(token);
    } else {
      return res.status(401).json({ error: "Invalid password" });
    }
  }
}

module.exports = UserControler;
