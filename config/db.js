require("dotenv").config();
const { join } = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const options = process.env.URI || {
  dialect: "sqlite",
  storage: join(__dirname, "db.sqlite"),
};

const db = new Sequelize(options);

module.exports = {
  db,
  DataTypes,
};
