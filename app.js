const express = require("express");
const connectToDatabase = require("./config/database");
const app = express();
const User = require("./models/users");

app.post("/signup", async (req, res) => {
  //create the new user instance
  const user = new User({
    firstName: "virat",
    lastName: "SHETTHY",
    email: "adarsh@123",
    password: "123456",
  });

  try {
    await user.save();
    res.send("User created successfully");
  } catch (error) {
    res.status(400).send("error creating user: " + error.message);
  }
});

connectToDatabase()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to Database...:", error);
  });
