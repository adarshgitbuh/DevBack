const express = require("express");
const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("thios is the route handler");
    // //Route handler
    //res.send("Route handler one!");
    next();
  },
  (req, res, next) => {
    console.log("This the 2nd route handler");
    //res.send("Route handler 2");
    next();
  },
  (req, res, next) => {
    console.log("This the 3rd route handler");
    // res.send("Route handler 3");
    next();
  },
  (req, res, next) => {
    console.log("This the 4th route handler");
    //res.send("Route handler 4");
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
