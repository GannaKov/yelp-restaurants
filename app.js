const express = require("express");

const restaurantRouter = require("./routes/restaurantRouter");
const tagRouter = require("./routes/tagRouter.js");
//require('dotenv').config();
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/restaurants", restaurantRouter);
app.use("/api/tags", tagRouter);

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).send(err.message);
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error " } = err;

  res.status(status).json({ message });
});

module.exports = app;
