const express = require("express");
const { userAuth } = require("../midlewares/auth");

const requestRouter = express.Router();

requestRouter.post("/sendCOnnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  //sending the connection reuest
  console.log("Sending the connection req");

  res.send(user.firstName + "sent the connect request!");
});

module.exports = requestRouter;
