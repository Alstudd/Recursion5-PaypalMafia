const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    questionString: {
      type: String,
      required: [true, "Please add your question"],
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    answer_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
        default: ["6586ed86a595a2bbb28b788c"],
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Questions", QuestionSchema);
