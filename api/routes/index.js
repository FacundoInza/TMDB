const express = require("express");

const movies = require("./movies");
const search = require("./search");
const user = require("./user");

const router = express.Router();

router.use("/movie", movies);
router.use("/search", search);
router.use("/user", user);

module.exports = router;
