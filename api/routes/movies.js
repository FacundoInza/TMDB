const express = require("express");
const router = express.Router();

const MoviesControler = require("../controllers/movies");

router.get("/:movieId", MoviesControler.getMovie);
router.put("/");
router.delete("/");

module.exports = router;
