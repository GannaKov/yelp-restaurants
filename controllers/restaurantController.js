const Restaurant = require("../models/restaurantModel");

const getAllrestaurants = async (req, res, next) => {
  try {
    const result = await Restaurant.find();

    if (result.length === 0) {
      throw { status: 404, message: "No Restaurant found" };
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getRestaurantById = async (req, res, next) => {
  try {
    //const id = req.params.id;
    const { id } = req.params;

    const result = await Restaurant.findById(id);

    if (!result) {
      throw { status: 404, message: "Restaurant not found" };
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { getAllrestaurants, getRestaurantById };
