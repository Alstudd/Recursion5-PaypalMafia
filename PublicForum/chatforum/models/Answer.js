const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  answerString: {
    type: String,
    required: [true, "Enter the answer"],
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Questions",
  },
});

module.exports = mongoose.model("Answer", answerSchema);
