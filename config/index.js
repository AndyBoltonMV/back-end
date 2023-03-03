const { db, DataTypes } = require("./db");

module.exports = {
  db,
  DataTypes,
  port: process.env.PORT || 5001,
};
