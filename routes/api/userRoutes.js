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

// Routes - /api/users, /api/users/:userId, & /api/users/:userId/friends/:friendId
router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;
