const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://adarshint:DwJvkUtT7aX77YtU@adnodejs.kn3nw.mongodb.net/devTinder");
};

module.exports = connectToDatabase;
