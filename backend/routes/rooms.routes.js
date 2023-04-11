const express = require("express");
const roomsRouter = express.Router();

roomsRouter.get("/", (req, res) => {
  res.send("All the Romms");
});

module.exports = {
  roomsRouter,
};
