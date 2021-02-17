const config = require("config");
const jwt = require("jsonwebtoken");

//middleware
const admin = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(404).json({ msg: `What are you doing here? ${req.user.role}` });
  }
};

//middleware
const user = (req, res, next) => {
  if (req.user.role === "user") {
    next();
  } else {
    res.status(404).json({ msg: `What are you doing here? ${req.user.role}` });
  }
};

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  //check for token
  if (!token) res.status(404).json({ msg: "Unauthorized!!!" });

  try {
    //verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded;
    next();
  } catch (e) {
    res.status(404).json({ msg: "Token is invalid" });
  }
};

module.exports = {
  admin,
  auth,
  user,
};
