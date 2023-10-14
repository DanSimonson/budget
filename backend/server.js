require("dotenv").config();
const express = require("express");
const { data } = require("./data");

/* middleware*/
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* routes */
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

/* server startup */
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
