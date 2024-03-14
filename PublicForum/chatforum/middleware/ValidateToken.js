const jwt = require("jsonwebtoken");

async function ValidateToken(req, res, next) {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.StartsWith("Bearer")) {
    token = authHeader.split("")[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }

      req.user = decoded.user;
      next();
    });
    if (!token) {
      res.status(401);
      throw new Error(
        "token is missinng or user is not user is not authorized"
      );
    }
  }
}

module.exports = ValidateToken;
