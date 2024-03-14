const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv").config();
const path = require("path");
const connectdb = require("./util/mongoDB");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(cookieParser());
connectdb();

const UserRouter = require("./routes/User");
const QuestionRouter = require("./routes/Question");
const AnswerRouter = require("./routes/Answer");
const UpvoteRouter = require("./routes/UpVote");
const DownvoteRouter = require("./routes/DownVote");
const AdvisoryRouter = require("./routes/Advisory");
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING on home page");
});
app.use("/User", UserRouter);
app.use("/Question", QuestionRouter);
app.use("/Answer", AnswerRouter);
app.use("/upvote", UpvoteRouter);
app.use("/downvote", DownvoteRouter);
app.use("/Advisory", AdvisoryRouter);
app.listen(port, () => {
  console.log("server is live");
});
