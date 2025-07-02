const express = require("express");

const requestRouter = express.Router();

requestRouter.post("/send", async (req, res) => {
    const user = req.user;
    //sending the connection reuest
    console.log("Sending the connection req");

    res.send(user.firstName + "sent the connect request!");

});

module.exports = requestRouter;