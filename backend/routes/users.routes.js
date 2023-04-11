const express = require("express");

const {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} = require("../controllers/users.controller");
const { verifyToken } = require("../utils/verifyToken");

const userRouter = express.Router();
userRouter.get("/checkAuth", verifyToken, (req,res,next)=>{
  res.send({msg:"User Is Logged In..."})
})


userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/:id", getUser);
userRouter.get("/", getAllUser);

module.exports = {
  userRouter,
};
