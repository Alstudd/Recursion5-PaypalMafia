import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
// import Login from "./component/Login/Login";
import LoginForm from "./component/Login/Login";
import Index from "./component/QuestionsQA/Index";
import { Route, Routes } from "react-router-dom";
import AddQuestion from "./component/QuestionsQA/AddQuestion/AddQuestion";
import Answer from "./component/QuestionsQA/Answer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} exact></Route>
        <Route path="/index" element={<Index />} exact></Route>
        <Route path="/addQuestion" element={<AddQuestion />} exact></Route>
        <Route path="/specificQuestion" element={<Answer />} exact></Route>
      </Routes>

      {/* <LoginForm /> */}
      {/* <Index /> */}
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
