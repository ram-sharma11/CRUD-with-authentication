const UserModel = require("../models/user");
const CustomError = require("../utils/customError");
const {
  JOIValidationRegister,
  JOIValidationlogin,
  generatePasswordHash,
  createJWT,
  comparePasswordHash,
} = require("../utils/common");

exports.userRegister = async (req) => {
  const value = JOIValidationRegister(req.body);
  if (value.error) {
    throw new CustomError(
      "validation Error",
      400,
      value.error.message.split(". ")
    );
  }
  const isEmailExists = await UserModel.findOne({ email: req.body.email });
  if (isEmailExists) {
    throw new CustomError("EMAIL ALREADY EXISTS", 400);
  }
  const hashPassword = await generatePasswordHash(req.body.password);
  let newUser = await UserModel.create({
    email: req.body.email,
    name: req.body.name,
    password: hashPassword,
    phone: req.body.phone,
  });
  const token = await createJWT({
    emial: newUser.email,
    id: newUser._id,
  });
  return {
    status: true,
    message: "User Registered Successfully",
    token,
  };
};

exports.userLogin = async (req) => {
  const value = JOIValidationlogin(req.body);
  if (value.error) {
    throw new CustomError(
      "validation Error",
      400,
      value.error.message.split(". ")
    );
  }
  const existingUser = await UserModel.findOne({
    email: req.body.email,
  }).select("+password");
  if (!existingUser) {
    throw new CustomError("Invalid Login Credentials", 401);
  }

  const matchPassword = await comparePasswordHash(
    req.body.password,
    existingUser.password
  );
  if (!matchPassword) {
    throw new CustomError("Invalid Login Credentials", 401);
  }
  const token = await createJWT({
    emial: existingUser.email,
    id: existingUser._id,
  });

  return {
    status: true,
    message: "User Login Successfully",
    token,
  };
};

exports.myprofile = async (req) => {
  return {
    status: true,
    message: "User Profile",
    user: req.user,
  };
};

exports.accounts = async () => {
  const Users = await UserModel.find();
  return {
    status: true,
    message: "All Accounts",
    Users,
  };
};

exports.fetchById = async (_id) => {
  const user = await UserModel.findById(_id);
  return {
    status: true,
    message: "Successul",
    user,
  };
};

exports.userUpdate = async (req) => {
  const user = await UserModel.findById(req.user._id);
  user.name = req.body.name || req.user.name;
  user.phone = req.body.phone || req.user.phone;
  await user.save();
  return {
    status: true,
    message: "User updated Successfully",
  };
};

exports.deleteUser = async (req) => {
  const user = await UserModel.deleteOne(req.user._id);
  return {
    status: true,
    message: "User Deleted Successfully",
    data: user,
  };
};
