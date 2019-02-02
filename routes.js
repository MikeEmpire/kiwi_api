const users = require("./routes/users");

module.exports = app => {
  app.use("/api/users", users);

  app.use((err, req, res, next) => {
    if (!err.statusCode) {
      // eslint-disable-next-line no-param-reassign
      err.statusCode = 500;
    }

    return res.status(err.statusCode).send(err.message);
  });
};
