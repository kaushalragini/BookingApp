const { UserModel } = require("../models/users.models");

const updateUser = async (req, res) => {
  const ID = req.params.id;
  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      ID,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.send(updateUser);
  } catch (error) {
    console.log({ msg: "something went wrong", err: error.message });
  }
};

const deleteUser = async (req, res) => {
  const ID = req.params.id;
  try {
    await UserModel.findByIdAndDelete(ID);
    res.send("Usr is vanised");
  } catch (error) {
    console.log({ msg: "something went wrong", err: error.message });
  }
};

const getUser = async (req, res) => {
  const ID = req.params.id;
  try {
    const getUser = await UserModel.findById(ID);
    res.send(getU);
  } catch (error) {
    console.log({ msg: "something went wrong", err: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    console.log({ msg: "something went wrong", err: error.message });
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
};
