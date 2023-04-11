const express = require("express");
const { HotelModel } = require("../models/hotels.model");
const hotelsRouter = express.Router();
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
} = require("../controllers/hotels.controller");

hotelsRouter.post("/", createHotel);
hotelsRouter.put("/:id", updateHotel);
hotelsRouter.delete("/:id", deleteHotel);
hotelsRouter.get("/:id", getHotel);
hotelsRouter.get("/", getAllHotel);

module.exports = {
  hotelsRouter,
};
