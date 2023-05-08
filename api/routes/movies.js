const express = require("express");
const router = express.Router();

const MoviesControler = require("../controllers/movies");

router.get("/:movieId", MoviesControler.getMovie);
router.get("/popular", MoviesControler.getPopular);
router.get("/upcoming", MoviesControler.getUpcoming);
router.get("/top_rated", MoviesControler.getToprated);
router.put("/");
router.delete("/");

module.exports = router;
