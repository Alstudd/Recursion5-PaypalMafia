import React, { useEffect, useState } from "react";

function NewSpecificAnswerList({ redirectData }) {
  // Changed function name to start with uppercase letter
  const [specificAnswer, setSpecificAnswer] = useState(""); // Fixed typo in state variable name

  useEffect(() => {
    setSpecificAnswer(redirectData);
    console.log(redirectData);
  }, [redirectData]);

  return (
    <div className="hover:cursor-pointer hover:opacity-75 w-[80%] p-3 rounded-xl border bg-card text-card-foreground shadow-lg my-3">
      <div className="actualanswer">
        <div>
          <p className="text-lg font-bold">{specificAnswer?.answerString}</p>
          <p className="text-end text-md">Answered by :{specificAnswer?.user_id?.username}</p>
        </div>

        {/* <div>
          <AddAnswer questionId={specificAnswer?.questionId} />
        </div> */}
      </div>
    </div> // Changed div content to indicate component name
  );
}

export default NewSpecificAnswerList; // Changed export name to match component name
