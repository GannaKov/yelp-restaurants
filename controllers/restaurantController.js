const Restaurant = require("../models/restaurantModel");

// const getAllrestaurants = async (req, res, next) => {
//   try {
//     const result = await Restaurant.find();

//     if (result.length === 0) {
//       throw { status: 404, message: "No Restaurant found" };
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
const getAllrestaurants = async (req, res, next) => {
  try {
    let query = {};
    if (req.query.tag) {
      query.tags = req.query.tag;
    }

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

// const getRestaurantByTag = async (req, res, next) => {
//   try {
//     // const restaurants = await Restaurant.find({ tags: { $in: [tags] } });
//     const { tag } = req.query;

//     console.log("tag", tag);
//     if (!tag) {
//       return res.status(400).json({ error: "Tag parameter is required" });
//     }
//     const result = await Restaurant.find({ tags: { $in: [tag] } });
//     //const result = await Restaurant.find({ tags: tag });

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
// const restaurants = await Restaurant.find({ tags: { $in: [tags] } });
module.exports = { getAllrestaurants, getRestaurantById };
