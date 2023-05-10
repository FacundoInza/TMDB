const express = require("express");
const router = express.Router();

const UserControler = require("../controllers/user");
router.get("/:userId", UserControler.getUser);
router.post("/me", UserControler.me);
router.post("/register", UserControler.register);
router.post("/login", UserControler.login);
router.put("/:userId/addfavorite", UserControler.addFavorite);
router.put("/:userId/removefavorite", UserControler.removeFavorite);

module.exports = router;
