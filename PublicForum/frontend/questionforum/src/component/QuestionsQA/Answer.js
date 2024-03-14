import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import NewSpecificAnswerList from "./NewSpecificAnswerlist";
import AddAnswer from "./AddAnswer";

function Answer({ redirectData }) {
  //   const [specficQuestionAnswers, setSpecificQuestionAnswers] = useState(null);
  const [specificQuestion, setSpecificQuestion] = useState(null);
  const [questionObjectID, setquestionObjectID] = useState(null);

  useEffect(() => {
    let search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("id");
    setquestionObjectID(id);
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  useEffect(() => {
    async function getSpecificQuestion() {
      try {
        const response = await axios.get(
          `/Question/listSpecific/${questionObjectID}`
        );
        setSpecificQuestion(response.data.res);
        console.log(response.data.res);
      } catch (error) {
        console.error("Error fetching specific question:", error);
      }
    }
    if (questionObjectID !== null) {
      getSpecificQuestion();
    }
  }, [questionObjectID]); // Run this effect whenever questionObjectID changes

  return (
    <>
    <div className="flex w-[80%] mx-auto my-5 px-5 justify-end">
        <Link to={"/index"}><Home/></Link>
      </div>

    <div className="hover:cursor-pointer hover:opacity-75 w-[80%] p-3 rounded-xl border bg-card text-card-foreground shadow-lg mx-auto mb-10">
      {/* {/* <div className="answersList">
        answer_id={specificQuestion.questionString}
      </div> */}
      {/* hello */}
      <div className="w-full hover:cursor-pointer hover:opacity-75 p-3 rounded-xl border bg-card text-card-foreground shadow-lg">
        <div className="flex justify-between border-b pb-2 mb-2">
          <p>
            <span className="font-bold">Q.</span>{" "}
            {specificQuestion?.questionString}
          </p>
          <div className="flex gap-3">
            <p className="md:block hidden">
              {specificQuestion?.user_id?.username}
            </p>
            <ChevronRight />
          </div>
        </div>

        <div className="flex justify-between text-sm">
          <div className="text-sm">
            Doubt posted by={specificQuestion?.user_id?.username}
          </div>
          <div>on the {specificQuestion?.createdAt}</div>
        </div>
      </div>

      <div className="Question-title"></div>
      <div className=" py-2">
        <div>
          <p>
            <p className="text-end pr-3">
            No. of Answers : {specificQuestion?.answer_id?.length}
            </p>
            {specificQuestion?.answer_id?.map((_q, index) => (
              <div key={index} className="answer-internal">
                <NewSpecificAnswerList redirectData={_q} />
              </div>
            ))}
          </p>
        </div>
        <div>
          <AddAnswer questionId={questionObjectID} />
        </div>
      </div>
    </div>
    </>
  );
}

export default Answer;
