const mongoose = require("mongoose");

const downvoteSchema = new mongoose.Schema({
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
  downvoteCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("downvote", downvoteSchema);
