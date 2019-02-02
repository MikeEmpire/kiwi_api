const db = require("../config/db");

const getUsers = async (request, response, next) => {
  await db
    .query("SELECT * FROM users ORDER BY id ASC")
    .then(res => {
      response.status(200).json(res.rows);
    })
    .catch(err => {
      next(err);
    });
};

// const createCustomer = async (request, response, next) => {
//   await db
//     .query(
//       "INSERT INTO customers (first_name, last_name, email) VALUES ($1, $2, $3, $4)",
//       [first_name, last_name, email, address]
//     )
//     .then(res => {
//       response.status(200).send(`User is added with ID: ${res.insertId}`);
//     })
//     .catch(error => {
//       next(error);
//     });
// };

module.exports = {
  getUsers
};
