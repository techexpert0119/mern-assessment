const express = require("express");

const {
  findMe,
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/user").get(protect, findMe);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:resetToken").put(resetPassword);

module.exports = router;
