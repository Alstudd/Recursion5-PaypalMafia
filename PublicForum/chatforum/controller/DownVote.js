const upvoteModel = require("../models/upvote");
const downvoteModel = require("../models/downvote");
const answerModel = require("../models/Answer");

async function DeleteTheUpcount(answer_id, user_id) {
  try {
    await upvoteModel.deleteOne({
      user_id,
      answer_id,
    });
    console.log(
      `You had Upvoted this answer ealier and in order to Down Vote This answer we have to Delete the Earlier Upvote`
    );
  } catch (e) {
    console.log(`error encountered while deleting the upvote ${e}`);
  }
}

async function AddDownVote(req, res) {
  const { answer_id } = req.body;
  const user_id = req.user.id;
  const availableAnswer = await answerModel.find({
    _id: answer_id,
  });
  if (availableAnswer[0]) {
    const ifUserHaveDownVotedThisAnswer = await downvoteModel.find({
      user_id: user_id,
      answer_id: answer_id,
    });
    const ifUserHaveUpVotedThisAnswer = await upvoteModel.find({
      user_id: user_id,
      answer_id: answer_id,
    });
    if (ifUserHaveDownVotedThisAnswer[0]) {
      console.log(`Cannot down vote again for the same answer`);
      console.log(ifUserHaveDownVotedThisAnswer[0]);
    } else {
      if (ifUserHaveUpVotedThisAnswer[0]) {
        DeleteTheUpcount(answer_id, user_id);
        console.log(ifUserHaveUpVotedThisAnswer[0]);
      }
      try {
        const newDownvote = await downvoteModel.create({
          user_id,
          answer_id,
        });
        res.json({ res: newDownvote });
      } catch (e) {
        console.log(`Error occured while upvoting the answer ${e}`);
      }
    }
  } else {
    console.log(`Error while finding answer ${answer_id}`);
  }
}

async function DownvoteCount(req, res) {
  const { answer_id } = req.body;
  const availableAnswer = await answerModel.find({
    _id: answer_id,
  });
  if (availableAnswer) {
    try {
      const TotalDownVoteCounts = await downvoteModel.countDocuments({
        answer_id: answer_id,
      });
      console.log(
        `Total DownvoteCount for this answer is ${TotalDownVoteCounts}`
      );
      res.json({ msg: TotalDownVoteCounts });
    } catch (e) {
      console.log(`Error occurred while fetching upovote for ${answer_id}`);
    }
  } else {
    console.log(`Answer is not availabe that is related to ${answer_id}`);
  }
}

async function DeleteTheDowncount(answer_id, user_id) {
  try {
    await downvoteModel.deleteOne({
      user_id,
      answer_id,
    });
    console.log(
      `You had Downvoted this answer earlier and in order to Up Vote This answer we have to Delete the Earlier DownVote`
    );
  } catch (e) {
    console.log(`error encountered while deleting the Downvote ${e}`);
  }
}

module.exports = {
  DeleteTheDowncount,
  AddDownVote,
  DownvoteCount,
};
