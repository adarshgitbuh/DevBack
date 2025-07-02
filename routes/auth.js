const express = require("express");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    // validation is requried
    validateSignUpData(req);

    const { firstName, lastName, email, password } = req.body;

    // encrypt the pasword
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    //create the new user instance
    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    await user.save();
    res.send("User created successfully");
  } catch (error) {
    res.status(400).send("error creating user: " + error.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    console.log(user);
    console.log(password, user.password);
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      //create JWT Token

      const token = await jwt.sign({ _id: user._id }, "Devtinder$2002");

      //Add the token to cookie and send the response back to the user
      res.cookie("token", token);
      res.send("Login successful");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(400).send("Error logging in: " + error.message);
  }
});



module.exports = authRouter;