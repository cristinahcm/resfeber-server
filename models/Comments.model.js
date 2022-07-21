const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  travel: { type: Schema.Types.ObjectId, ref: "Travel" },
  text: {
    type: String,
  },
  stars: {
    type: Number,
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
