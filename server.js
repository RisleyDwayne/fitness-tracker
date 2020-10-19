const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use("/api", routes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
}); 