const router = require("express").Router();
const {
  getThoughts,
  createThought,
  getOneThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Routes - /api/thoughts, /api/thoughts/:thoughtId, /api/thoughts/:thoughtId/:reactions, & /api/thoughts/:thoughtId/reactions
router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(createReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
