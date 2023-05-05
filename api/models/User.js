const S = require("sequelize");
const db = require("../db");
const bc = require("bcrypt");

class User extends S.Model {
  async hash(password, salt) {
    try {
      const res = await bc.hash(password, salt);
      return res;
    } catch (error) {
      console.error("Fallo en el hasheo de password");
    }
  }

  async validatePassword(password) {
    try {
      const res = await bc.hash(password, this.salt);
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

User.addHook("beforeValidate", function (user) {
  const salt = bc.genSaltSync();
  user.salt = salt;

  return user.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;
