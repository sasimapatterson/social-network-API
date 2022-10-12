const moment = require('moment/moment');
const { Schema, model, Types } = require('mongoose');

// This will not be a model. It will be used as the reaction field's subdocument schema in the Thought model.
const reactionSchema = new Schema(
  {//Mongoose's ObjectId data type
    reactionId: {
      type: Schema.Types.ObjectId,
      //default value is set to a new ObjectId
      default: () => new Types.ObjectId(), 
    },
    responseBody: {
      type: String,
      required: true,
      //280 character max
      maxlength: 280, 
    },
    username: {
      type: String,
      required: true,
    },
    createAt: {
      type: Date,
      //set default value to the current timestamp
      default: Date.now, 
      // Use a getter method to format the timestamp on query. Stackoverflow and momentjs.com
      get: (date) => 
       moment(date).format('MMMM DD YYYY, h:mm:ss'),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const thoughtSchema = new Schema (
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
      createdAt: {
      type: Date,
      default: Date.now,
      get: (date) =>
        moment(date).format('MMMM DD YYYY, h:mm:ss'),  
    },
    // The user that created this thought
    username: {
      type: String,
      required: true,
    },
    // Array of nested documents created with the reactionSchema
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Create a virtual called 'reactionCount' that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})

// Initialize the Thought model
const Thought = model('Thought', thoughtSchema);

// Export Thought model
module.exports = Thought;
