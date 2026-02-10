const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: [5, "Email must be at least 5 characters long"],
    },
    password: {
      type: String,
      required: true,
    },
    socketId: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("user", userSchema);
module.exports = User;
