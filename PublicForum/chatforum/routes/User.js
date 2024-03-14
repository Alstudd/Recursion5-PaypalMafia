const express = require("express");
const path = require("path");
const router = express.Router();

const {
  registerUser,
  userLogin,
  getCurrentUser,
} = require("../controller/User");
const { cookieauthorization } = require("../middleware/CookieAuth");

router.get("/logout", cookieauthorization, (req, res) => {
  return res
    .clearCookie("accesstoken")
    .status(200)
    .json({ msg: "Logout successful" });
});
router.get("/current", cookieauthorization, getCurrentUser);
router.post("/login", userLogin);
router.post("/register", registerUser);

module.exports = router;
