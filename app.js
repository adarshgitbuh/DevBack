const express = require("express");
const connectToDatabase = require("./config/database");
const app = express();
const User = require("./models/users");

app.use(express.json()); // Middleware to parse JSON bodies

app.post("/signup", async (req, res) => {
  //create the new user instance
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User created successfully");
  } catch (error) {
    res.status(400).send("error creating user: " + error.message);
  }
});

app.get("/users", async (req, res) => {
  const userEmail = req.body.email;

  try {
    const users = await User.findOne({ email: userEmail });
    if (users.length == 0) {
      res.status(404).send("No users found with the provided email");
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("something went wrong");
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
