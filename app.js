const express = require("express");
const app = express();

const { userAuth, adminAuth } = require("./midlewares/auth");

// Handle the Auth middlewares for Get, Post ,,,, delete
app.use("/admin", adminAuth, (req, res, next) => {
  res.send("Admin route accessed");
});

app.get("/user", userAuth, (req, res) => {
  console.log("User data requested");
  res.send("User data retrieved successfully");
});

app.get("/admin/getAll", (req, res) => {
  res.send("All admin data retrieved successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
