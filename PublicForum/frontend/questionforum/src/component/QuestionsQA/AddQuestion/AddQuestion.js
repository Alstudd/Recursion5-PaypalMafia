import React, { useState } from "react";
import { Plus, Home } from 'lucide-react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const AddQuestion = () => {
  const [questionString, setquestionString] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "/Question/add/",
        {
          questionString: questionString,
        },
        config
      );
      console.log(response);
      setquestionString("");    
      navigate('/index')
      // Assuming the cookie is returned in the response headers
      // Handle the cookie (e.g., store it in local storage or cookie storage)

      // Handle successful login (e.g., redirect to another page)
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>

    <div className="w-[80%] mx-auto flex py-5 px-5 justify-end">
        <Link to={"/index"}><Home/></Link>
      </div>
    <div className="relative w-[80%] mx-auto mb-10 hover:cursor-pointer hover:opacity-75 p-3 rounded-xl border bg-card text-card-foreground shadow-lg">

      <div className="hover:cursor-pointer hover:opacity-75 p-3 rounded-xl border bg-card text-card-foreground shadow-lg absolute right-3 top-3 ">
      <div className="flex flex-row justify-end gap-3 ">
      <h2 className="md:block hidden">Add Question</h2>
      <Plus size={25} strokeWidth={2.5} />
      </div>
      </div>
      {error && <div>{error}</div>}
      <h1 className="text-xl font-bold ">Post your Doubts</h1>
      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
            <label for="first_name" class="block text-sm font-medium text-gray-900">Type your Question here :</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg hover:opacity-75"
            placeholder="What is Questify ?"
            value={questionString}
            onChange={(e) => setquestionString(e.target.value)}
            required
          />
        </div>
        <button className="p-2 px-4 my-3 rounded-lg border-black border text-black" type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default AddQuestion;
