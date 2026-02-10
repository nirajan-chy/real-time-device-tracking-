const mongoose = require("mongoose");
const { MONGO_URI } = require("./env");

const mongooseConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Mongoose connected");
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = mongooseConnect;
