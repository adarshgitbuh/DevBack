const express = require("express");
const { userAuth } = require("../midlewares/auth");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const { validateEditProfileData } = require("../utils/validation");

const profilrRouter = express.Router();

profilrRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const cookies = req.cookies;

    const { token } = cookies;
    if (!token) {
      throw new Error("Invalid Token");
    }
    //validate my token
    const decodedMessage = await jwt.verify(token, "Devtinder$2002");

    const { _id } = decodedMessage;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }
    res.send(user);
  } catch (err) {
    res.send("Profile page accessed successfully. Token: " + cookies.token);
  }
});

profilrRouter.patch("/profile/update", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit request");
    }

    const loggedInUser = req.user;
  
    Object.keys(req.body).forEach((key) => {
      if (req.body[key] !== undefined) {
        loggedInUser[key] = req.body[key];
      }
    });
    await loggedInUser.save();

   res.json({
    message: `${loggedInUser.firstName}, your profile has been updated successfully!`,
    data: loggedInUser,
  });

  } catch (err) {
    res.status(400).send("Error updating profile: " + err.message);
  }
});

module.exports = profilrRouter;
