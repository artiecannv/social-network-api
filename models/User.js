const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [
      /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
      "Please input a valid Email",
    ],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  toJSON: {
    virtuals: true,
  },
  id: false,
});
