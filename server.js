const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

const password = process.env.password;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || `mongodb://hfolk25:${password}@ds217548.mlab.com:17548/heroku_91lf27gr`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useMongoClient: true
});

require("dotenv").config();

// routes
app.use(require("./routes/api-routes.js"));
// app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
