const { secret_key } = require("../config/env");

const isAuthenticated = async (req, res, next) => {
  const tokenstring = req.headers.authorization;
  const tokenArray = tokenstring.split(" ");
  const token = tokenArray[1];
  try {
    const decoded = jwt.verify(token, secret_key);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({ message: "unauthorized" });
  }
};

module.exports = isAuthenticated;
