const express = require("express");
const router = express.Router();

const SearchControler = require("../controllers/search");

router.get("/movie", SearchControler.getSearchMovies);
router.get("/users", SearchControler.getSearchUsers);

module.exports = router;
