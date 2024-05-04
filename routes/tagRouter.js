const express = require("express");

const { getAllTags } = require("../controllers/tagController");

tagRouter = express.Router();

tagRouter.get("/", getAllTags);

module.exports = tagRouter;
