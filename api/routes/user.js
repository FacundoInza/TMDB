const express = require("express");
const router = express.Router();

const UserControler = require("../controllers/user");

router.post("/register", UserControler.register);
router.post("/login", UserControler.login);

module.exports = router;
