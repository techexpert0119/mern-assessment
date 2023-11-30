const express = require("express");

const {
  findMe,
  register,
  login,
} = require("../controllers/auth");

const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/user").get(protect, findMe);
router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
