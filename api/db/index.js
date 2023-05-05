const Sequelize = require("sequelize");
const config = require("../config");

const db = new Sequelize(config.DB_HOST, null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
