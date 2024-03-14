const express = require("express");
const router = express.Router();

const {
  addQuestion,
  listAllQuestion,
  getSpecificQuestion,
} = require("../controller/Question");
const { cookieauthorization } = require("../middleware/CookieAuth");

router.get("/list", cookieauthorization, listAllQuestion);
router.post("/add", cookieauthorization, addQuestion);
router.get("/listSpecific/:id", cookieauthorization, getSpecificQuestion);

module.exports = router;
