const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tagSchema = new Schema(
  {
    tag: {
      type: String,
      required: true,
    },
  },
  { collection: "Tags" }
);

const Tag = model("Tag", tagSchema);

module.exports = Tag;
