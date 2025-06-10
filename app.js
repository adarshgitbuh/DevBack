const express = require("express");
const app = express();

app.get("/getData", (req, res) => {
  try {
  } catch (error) {
    console.error("Error in /getData:", error);
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Internal Server Error: " + err.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
