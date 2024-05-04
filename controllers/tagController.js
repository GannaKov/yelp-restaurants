const Tag = require("../models/tagModel");

const getAllTags = async (req, res, next) => {
  try {
    const result = await Tag.find();

    if (result.length === 0) {
      throw { status: 404, message: "No Tag found" };
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
module.exports = { getAllTags };
