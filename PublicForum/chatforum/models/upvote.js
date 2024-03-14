const mongoose = require("mongoose");

const upvoteSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  answer_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Answer",
  },
  upvoteCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("upvote", upvoteSchema);
