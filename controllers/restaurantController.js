const Restaurant = require("../models/restaurantModel");

const getAllrestaurants = async (req, res, next) => {
  try {
    let query = {};
    if (req.query.tag) {
      query.tags = req.query.tag;
    }
    console.log(query);
    const result = await Restaurant.find(query);

    if (result.length === 0) {
      throw { status: 404, message: "No restaurants found" };
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

// const getRestaurantByTag = async (req, res, next) => {
//   try {
//     let query = {};
//     if (req.query.tag) {
//       query.tags = req.query.tag;
//     }

//     console.log("tag", query);

//     const result = await Restaurant.find(query);

//     if (!result) {
//       throw { status: 404, message: "Restaurant not found" };
//     }
//     res.status(200).json({
//       status: "success",
//       code: 200,
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = { getAllrestaurants, getRestaurantById };
