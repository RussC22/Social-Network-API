const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const db = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`));
mongoose.set(`debug`, true);
app.use(routes);
db.once("open", () => {
  app.listen(PORT, () => {
    console.log("API server is running on port ${PORT}!");
  });
});
