require("dotenv").config();
const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

const mongoose = require("mongoose");
const uri = "mongodb+srv://user-123:user-123@cluster0.xkd9le9.mongodb.net/shop?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const importData = async () => {
    try {
      
      //await Product.deleteMany({});
  
     // await Product.insertMany(productData);
  
      console.log("Data Import Success");
  
      process.exit();
    } catch (error) {
      console.error("Error with data import", error);
      process.exit(1);
    }
  };
  
  importData();