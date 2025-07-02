const express = require("express");

const profilrRouter = express.Router();

profilrRouter.get("/profile", async (req, res) => {
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

module.exports = profilrRouter;