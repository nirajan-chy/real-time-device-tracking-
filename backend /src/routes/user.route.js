const { Router } = require("express");
const {
  register,
  login,
  getProfile,
} = require("../controllers/user.controller");

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/getProfile/:id", getProfile);

module.exports = userRouter;
