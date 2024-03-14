import React from "react";
import QuestionALL from "./QuestionALL";
import { Plus, ChevronLeft, Home } from 'lucide-react'
import { Link } from "react-router-dom";

function List({ redirect }) {
  return (
    <div className="">
      <div className="mainBody">
        <div className="relative description">
          <div className=" hover:cursor-pointer hover:opacity-75 w-[80%] p-3 rounded-xl border bg-card text-card-foreground shadow-lg ">
            <div className="flex flex-row justify-start gap-3 ">
              <h2>No of Questions : {redirect.length}</h2>
            </div>
          </div>
          <div className="additional-button">
            <Link to={"/addQuestion"}>
              <button className="hover:cursor-pointer hover:opacity-75 p-3 rounded-xl border bg-card text-card-foreground shadow-lg absolute right-1 top-1 ">
                <div className="flex flex-row justify-end gap-3 ">
                  <h2 className="md:block hidden">Add Question</h2>
                  <Plus size={25} strokeWidth={2.5} />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="pt-10">
          <h2 className="mb-3">Questions :</h2>
          {redirect?.map((_q, index) => (
            <div key={index} className="question-internal my-2">
              <QuestionALL redirectData={_q} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
