require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const PORT = 5000;
const fs = require("fs");
const https = require("https");
var path = require("path");

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const certOptions = {
  key: fs.readFileSync(path.resolve("./config/ssl/server.key")),
  cert: fs.readFileSync(path.resolve("./config/ssl/server.crt"))
};

require('./routes')(app);
const server = https.createServer(certOptions, app);

server.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

module.exports = app;
