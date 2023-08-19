require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./utils/db");
const videoRoutes = require("./routes/videoRoutes");
const productRoutes = require("./routes/productRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/videos", videoRoutes);
app.use("/products", productRoutes);
app.use("/comments", commentRoutes);

connectDB().then(() => {
  app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
  });
});

module.exports = app;
