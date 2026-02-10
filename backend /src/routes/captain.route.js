const { Router } = require("express");
const { createCaptain, login } = require("../controllers/captain.controller");

const captainRouter = Router();
captainRouter.post("/register", createCaptain);
captainRouter.post("/login", login);

module.exports = captainRouter;
