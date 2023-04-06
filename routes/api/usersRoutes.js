const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// Three routes (delete users, put user update, get)

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:studentId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:studentId/friend
// router
// .route("/:userId/friends")
// .post(addFriend);

// /api/users/:studentId/friends/:thoughtId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
