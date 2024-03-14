const express = require("express");
const router = express.Router();
const { Advisory } = require("../controller/Advisory");
const { cookieauthorization } = require("../middleware/CookieAuth");

router.get("/", cookieauthorization, Advisory);
module.exports = router;
