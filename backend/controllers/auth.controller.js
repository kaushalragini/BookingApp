const { UserModel } = require("../models/users.models");
const bcrypt = require("bcrypt");
require("dotenv").config()
const jwt = require("jsonwebtoken")
const register = async (req, res, next) => {
  const { userName, email, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(4);
    const hash = bcrypt.hashSync(password, salt);
    const registerUser = new UserModel({ userName, email, password: hash });
    await registerUser.save();
    res.send({ msg: "user added successfully" });
  } catch (error) {
    res.send({ msg: "something went wrong", err: error.message });
  }
};
const login = async (req, res, next) => {
  const { userName, password } = req.body;
  try {
    const findUser = await UserModel.findOne({ userName });
    if (findUser) {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        findUser.password
      );

      if (isPasswordCorrect) {
        const {password,isAdmin,...otherDet} = findUser._doc
        console.log(otherDet);
        const token  = jwt.sign({id:findUser._id, isAdmin:findUser.isAdmin},process.env.JWT)
        res.cookie("access_token",token,{httpOnly:true})
        res.send({ msg: "user logged in" });
      } else {
        res.send({ msg: "Wrong Password" });
      }
    } else {
      res.send({ msg: "user not found" });
    }
  } catch (error) {
    res.send({ msg: "something went wrong", err: error.message });
  }
};
module.exports = {
  register,
  login,
};
