const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image_URL: {
      type: String,
      required: true,
    },
    location: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip_code: {
        type: String,
        required: true,
      },
    },
    tags: {
      type: [String],
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviews: [
      {
        id: {
          type: String,
          required: true,
        },
        user_id: {
          type: String,
          required: true,
        },
        text: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { collection: "Restaurants" }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
