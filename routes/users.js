const express = require("express");

const router = express.Router();

const users_api = require("../api/user_api");

router.get("/", users_api.getUsers);

module.exports = router;
