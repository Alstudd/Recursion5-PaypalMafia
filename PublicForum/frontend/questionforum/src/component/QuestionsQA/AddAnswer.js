import axios from "axios";
import React, { useState } from "react";

function AddAnswer({ questionId }) {
  const [answerString, setanswerString] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "/Answer/add/",
        {
          answerString: answerString,
          questionId: questionId,
        },
        config
      );
      setanswerString("");
      console.log(response);
      window.location.reload()
      // Assuming the cookie is returned in the response headers
      // Handle the cookie (e.g., store it in local storage or cookie storage)

      // Handle successful login (e.g., redirect to another page)
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className=" hover:cursor-pointer p-3 rounded-xl border my-5 bg-card text-card-foreground shadow-lg">
      <h2>Add Answer to the Question </h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            className="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg hover:opacity-75"
            value={answerString}
            rows={5}
            onChange={(e) => setanswerString(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="p-2 px-4 my-3 rounded-lg border-black border text-black">Submit</button>
      </form>
    </div>
  );
}

export default AddAnswer;
