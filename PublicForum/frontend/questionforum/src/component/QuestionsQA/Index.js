import axios from "axios";
import { Plus, Home } from 'lucide-react'
import React, { useEffect, useState } from "react";
// import Main from "./Main";
import List from "./List";
import { Link } from "react-router-dom";

function Index() {
  const [questions, setQuestion] = useState([]);
  // at beginning it should be empty
  useEffect(() => {
    async function getQuestion() {
      await axios.get("/Question/list").then((res) => {
        setQuestion((res.data.res).reverse());
        console.log(res.data.res);
      });
    }
    getQuestion();
  }, []);
  return (
    <div className="w-[80%] mx-auto my-10">
      <div className="flex my-3 mx-5 justify-end">
        <Link to={"/index"}><Home/></Link>
      </div>

      <div className="hover:cursor-pointer hover:opacity-75 p-3 rounded-xl border bg-card text-card-foreground shadow-lg">
        <List redirect={questions} />
      </div>
    </div>
  );
}

export default Index;
