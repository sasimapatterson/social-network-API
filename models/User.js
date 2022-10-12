const { Schema, model } = require('mongoose');
const { User } = require('.');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      // Source: codegrepper.com/ Regex pattern from challenge 17.
      match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/], 
    },
    // Array of _id values referencing the Thought model
    thoughts: [
      { 
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    // Array of _id values referencing the User model (self-referencing)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    // Indicating that we want the virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// Create a virtual called 'friendCount' that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Initialize the User model
const User = model('User', userSchema);

// Export User model
module.exports = User;