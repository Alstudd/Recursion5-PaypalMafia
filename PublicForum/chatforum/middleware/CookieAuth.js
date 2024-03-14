const jwt = require("jsonwebtoken");

exports.cookieauthorization = (req, res, next) => {
  const accesstoken = req.cookies.accesstoken;
  try {
    const data = jwt.verify(accesstoken, process.env.TOKEN_SECRET);
    req.user = data.user;
    next();
  } catch (err) {
    res.status(401);
    console.log(err);
  }
};
