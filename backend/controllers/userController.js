import User from "../models/userModel.js";

const getUserData = async (req, res) => {
  try {
    const finddata = await User.find({});
    res.send(finddata);
  } catch (error) {
    console.log(error);
  }
};

const postUserData = async (req, res) => {
  try {
    const data = new User(req.body);
    const save = await data.save();
    res.send(save);
  } catch (error) {
    console.log(error);
  }
};

const deleteUserData = async (req, res) => {
  try {
    const userdata = await User.findByIdAndDelete(req.params.id);
    res.send(userdata);
  } catch (error) {
    console.log(error);
  }
};

export { getUserData, postUserData, deleteUserData };
