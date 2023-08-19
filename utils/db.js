const mongoose = require("mongoose");

const uri =
  "mongodb+srv://mfarizalpasha:gomuno52431@cluster0.fuexwnx.mongodb.net/tokopedia-play-clone-app";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
