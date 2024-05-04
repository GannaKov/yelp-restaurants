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
// const tagSchema = new Schema(
//   {
//     tags: {
//       type: [String],
//       required: true,
//     },
//   },
//   { collection: "tag" }
// );
const Tag = model("Tag", tagSchema);

module.exports = Tag;
