const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { secret_key } = require("../config/env");

exports.register = async (req, res) => {
  try {
    const { fullname, email, password, socketId } = req.body;
    if (!fullname || !email || !password)
      return res.json({ message: "All fields are required" });
    const isExisting = await User.findOne({ email });
    if (isExisting) return res.json({ message: "User already exist" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullname,
      email,
      socketId,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const id = req.params.id;
    const user = await User.findOne({ email });
    if (!email) return res.json({ message: "Invalid credentials " });
    const isCompare = await bcrypt.compare(password, user.password);
    if (!isCompare) return res.json({ message: "Invalid credentials " });
    const token = await jwt.sign({ id: id }, secret_key, { expiresIn: "24h" });
    res.status(200).json({ message: "Login successfully", user, token });
  } catch (error) {
    res.status(500).json({
      message: error,
      nessage,
    });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
