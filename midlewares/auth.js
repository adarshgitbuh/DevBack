const jwt = require("jsonwebtoken");
const User = require("../models/users");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Unauthorized access: No token");
    }
    const decoded = jwt.verify(token, "Devtinder$2002");
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(401).send("Unauthorized access: User not found");
    }
    req.user = user; // Attach user to request
    next();
  } catch (err) {
    res.status(401).send("Unauthorized access: Invalid token");
  }
};

module.exports = {
  userAuth,
  // ...other exports
};
