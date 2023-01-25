const Sequelize = require("sequelize");
var config = require('../config/config.json');
const username = config.development.username;
const password = config.development.password;
const database = config.development.database;
const host = config.development.host;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Successfully Connected.");
  })
  .catch((err) => {
    console.log("An error has occurred while connecting the database");
  });

module.exports = sequelize;
