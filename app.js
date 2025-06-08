const express = require("express");
const app = express();

app.get("/user/:userID/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "shetty", lastName: "adhu" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
