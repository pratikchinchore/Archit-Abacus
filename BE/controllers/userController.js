const User = require("../models/User");


exports.getAllUsers = async (req, res) => {
  try {

    const users = await User.findAll({
      attributes: ["id", "name", "email", "courses", "createdAt"]
    });

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getUser = async (req, res) => {

  try {

    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const updateData = {
      ...req.body,
    };

    // Convert array to comma-separated string
    if (Array.isArray(updateData.courses)) {
      updateData.courses = updateData.courses.join(",");
    }

    await user.update(updateData);

    res.status(200).json({
      success: true,
      message: "User Updated",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {

  try {

    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    await user.destroy();

    res.status(200).json({
      success: true,
      message: "User Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};