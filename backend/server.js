require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const categoryRoutes = require("./routes/categories");
const transactionRoutes = require("./routes/transactions");
// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/categories", categoryRoutes);
app.use("/api/transactions", transactionRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
