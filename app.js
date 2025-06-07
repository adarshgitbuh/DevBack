const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "shetty", lastName: "adhu" });
});

app.post("/add", (req, res) => {
  res.send({ message: "User added successfully" });
});

app.delete("/delete", (req, res) => {
  res.send({ message: "User deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); 
