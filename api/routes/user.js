const express = require("express");
const router = express.Router();

const UserControler = require("../controllers/user");

router.post("/register", UserControler.register);

module.exports = router;
