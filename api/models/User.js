const S = require("sequelize");
const db = require("../db");
const bc = require("bcrypt");

class User extends S.Model {
  async hash(password, salt) {
    try {
      const res = await bc.hash(password, salt);
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  async validatePassword(password) {
    try {
      res = await bc.hash(password, this.salt);
      return res == this.password;
    } catch (error) {
      console.error(error);
    }
  }
}

User.init(
  {
    userName: {
      type: S.STRING,
      allowNull: false,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
    favorites: {
      type: S.ARRAY(S.STRING),
      get() {
        return [];
      },
    },
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeValidate", async function (user) {
  const salt = bc.genSaltSync();
  user.salt = salt;

  try {
    const salt = bc.genSaltSync();
    user.salt = salt;
    const res = await user.hash(this.password, this.salt);
    user.password = res;
  } catch (error) {
    console.error(error);
  }
});

module.exports = User;
