const router = require("express").Router();

const {
  getUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/userControllers");


// "/api/users" router.route