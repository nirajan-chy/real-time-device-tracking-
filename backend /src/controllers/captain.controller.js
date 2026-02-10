const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Captain = require("../models/captain.model");
const { secret_key } = require("../config/env");

exports.createCaptain = async (req, res) => {
  try {
    const { fullname, email, password, color, plate, capacity, vehicleType } =
      req.body;
    if (
      !fullname ||
      !email ||
      !password ||
      !color ||
      !plate ||
      !capacity ||
      !vehicleType
    )
      return res.json({ message: "All fields are required" });
    const isExist = await Captain.findOne({ email });

    if (isExist) return res.json({ message: "captain already exist" });
    const hashedPassword = await bcrypt.hash(password, 10);

    const captain = await Captain.create({
      fullname,
      email,
      password: hashedPassword,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    });

    res
      .status(201)
      .json({ message: "captain created successfully ", captain, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const captain = await Captain.findOne({ email });
    if (!captain) return res.json({ message: "Invalid credentials " });
    const isCompare = await bcrypt.compare(password, captain.password);
    if (!isCompare) return res.json({ message: "Invalid credentials " });

    const token = await jwt.sign({ id: req.params.id }, secret_key, {
      expiresIn: "24h",
    });
    res.status(200).json({
      message: "Captain login successfully",
      captain,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
