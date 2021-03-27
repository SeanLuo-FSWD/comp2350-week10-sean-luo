const mysql = require("mysql2");

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
  host: "us-cdbr-east-03.cleardb.com",
  user: "b2f37b099fd578",
  password: "281dc4a2",
  database: "heroku_6ce3521612a0a7d",
  multipleStatements: false,
  namedPlaceholders: true,
};

const dbConfigLocal = {
  host: "localhost",
  user: "root",
  password: "Password",
  database: "lab_example",
  multipleStatements: false,
  namedPlaceholders: true,
};

if (is_heroku) {
  var database = mysql.createPool(dbConfigHeroku);
} else {
  var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
