require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const categoryRoutes = require("./routes/categories");
const transactionRoutes = require("./routes/transactions");

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/categories", categoryRoutes);
app.use("/api/transactions", transactionRoutes);

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(_dirname, "/frontend/build/index.html"))
);

// listen to port
const port = process.env.PORT || 8338;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
