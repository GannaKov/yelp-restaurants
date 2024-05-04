const express = require("express");
const {
  getAllrestaurants,
  getRestaurantById,
} = require("../controllers/restaurantController");

restaurantRouter = express.Router();

restaurantRouter.get("/", getAllrestaurants);
restaurantRouter.get("/:id", getRestaurantById);

module.exports = restaurantRouter;
