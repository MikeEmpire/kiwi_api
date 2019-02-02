const { Pool } = require("pg");
const { credentials } = require("../databaseCreds");

const pool = new Pool(credentials);

module.exports = {
  query: (text, params) => pool.query(text, params)
};
