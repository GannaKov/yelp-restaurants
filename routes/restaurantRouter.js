const express = require("express");
const {
  getAllrestaurants,
  getRestaurantById,
  // getRestaurantByTag,
} = require("../controllers/restaurantController");

restaurantRouter = express.Router();

restaurantRouter.get("/", getAllrestaurants);
restaurantRouter.get("/:id", getRestaurantById);
// restaurantRouter.get("/tag", getRestaurantByTag);

module.exports = restaurantRouter;
