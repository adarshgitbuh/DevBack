const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 18,
    minlength: 4,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: Number,
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  gender: {
    type: String,
    validate(value) {
      if (!["male", "female", "other"].includes(value)) {
        throw new Error("Gender data not valid");
      }
    },
  },
  about: {
    type: String,
    default: "Hey there! I am using DevTinder",
  },
  skills: {
    type: [String]
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);
