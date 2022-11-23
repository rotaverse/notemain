require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI
const connectDB = async () => {
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;

