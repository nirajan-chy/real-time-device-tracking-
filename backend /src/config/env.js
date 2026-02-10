const { config } = require("dotenv");

config();

const MONGO_URI = process.env.MONGO_URI;
const secret_key = process.env.SECRET_KEY;

module.exports = {
  MONGO_URI,
  secret_key,
};
