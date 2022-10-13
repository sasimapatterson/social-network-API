// Use activity 23 as a reference
const { User } = require('../models');

module.exports = {
  // get all users
  getAllUser(req, res) {
    User.find({})
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  //  get one user using id
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      // to remove the weird symbol
      .select('-__v')
      // to populate user's thoughts
      .populate('thoughts')
      // to populate user's friends
      .populate('friends')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
};