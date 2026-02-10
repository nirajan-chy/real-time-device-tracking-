const { Router } = require("express");
const { createCaptain } = require("../controllers/captain.controller");

const captainRouter = Router();
captainRouter.post("/create", createCaptain);

module.exports = captainRouter;
