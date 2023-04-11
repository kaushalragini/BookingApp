const { HotelModel } = require("../models/hotels.model");

const createHotel = async (req, res, next) => {
  const hotelDetails = req.body;
  try {
    const newHotel = new HotelModel(hotelDetails);
    await newHotel.save();
    res.send("Hotel Added");
  } catch (error) {
    console.log({ msg: "something went wrong", err: error.message });
  }
};

const updateHotel = async (req, res, next) => {
  const ID = req.params.id;
  try {
    const updateHotel = await HotelModel.findByIdAndUpdate(
      ID,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.send(updateHotel);
  } catch (error) {
    console.log({ msg: "something went wrong", err: error.message });
  }
};

const deleteHotel = async (req, res, next) => {
  const ID = req.params.id;
  try {
    await HotelModel.findByIdAndDelete(ID);
    res.send("Hotel is vanised");
  } catch (error) {
    console.log({ msg: "something went wrong", err: error.message });
  }
};

const getHotel = async (req, res, next) => {
  const ID = req.params.id;
  try {
    const getHotel = await HotelModel.findById(ID);
    res.send(getHotel);
  } catch (error) {
    console.log({ msg: "something went wrong", err: error.message });
  }
};

const getAllHotel = async (req, res, next) => {
  try {
    const Hotels = await HotelModel.find();
    res.send(Hotels);
  } catch (error) {
    console.log({ msg: "something went wrong", err: error.message });
  }
};

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
};
