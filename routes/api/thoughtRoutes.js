const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

//  /api/thoughts
router.route('/')
.get(getAllThought)
.post(createThought)

//  /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

//  /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(createReaction);

//  //api/thoughts/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);


module.exports = router;