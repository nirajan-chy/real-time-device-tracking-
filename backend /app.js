const { config } = require("dotenv");
config();
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
const mongooseConnect = require("./src/config/mongoose");
const userRouter = require("./src/routes/user.route");
app.use(cors());
app.use("/user", userRouter);

mongooseConnect();
app.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = app;
