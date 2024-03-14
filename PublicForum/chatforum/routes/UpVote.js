const express = require("express");
const router = express.Router();

const { Addupvote, upvoteCount } = require("../controller/Upvote");
const { cookieauthorization } = require("../middleware/CookieAuth");

router.get("/total", cookieauthorization, upvoteCount);
router.post("/add", cookieauthorization, Addupvote);

module.exports = router;
