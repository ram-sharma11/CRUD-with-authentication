const { errorResponse } = require("../utils/common");
const userService = require("../services/userServices");

module.exports.rgister = async (req, res) => {
  try {
    const response = await userService.userRegister(req);
    return res.status(200).json(response);
  } catch (err) {
    return errorResponse(err, res);
  }
};

module.exports.login = async (req, res) => {
  try {
    const response = await userService.userLogin(req);
    return res.status(200).json(response);
  } catch (err) {
    return errorResponse(err, res);
  }
};

module.exports.allAccount = async (req, res) => {
  try {
    const response = await userService.accounts();
    return res.status(200).json(response);
  } catch (err) {
    return errorResponse(err, res);
  }
};

module.exports.me = async (req, res) => {
  try {
    const response = await userService.myprofile(req);
    return res.status(200).json(response);
  } catch (err) {
    return errorResponse(err, res);
  }
};

module.exports.getById = async (req, res) => {
  try {
    const response = await userService.fetchById(req.params);
    return res.status(200).json(response);
  } catch (err) {
    return errorResponse(err, res);
  }
};

module.exports.update = async (req, res) => {
  try {
    const response = await userService.userUpdate(req);
    return res.status(200).json(response);
  } catch (err) {
    return errorResponse(err, res);
  }
};

module.exports.remove = async (req, res) => {
  try {
    const response = await userService.deleteUser(req);
    return res.status(200).json(response);
  } catch (err) {
    return errorResponse(err, res);
  }
};
