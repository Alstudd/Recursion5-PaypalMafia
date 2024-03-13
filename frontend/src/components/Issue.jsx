import React, { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/User/login", data, { withCredentials: true })
      .then((data) => {
        setLoading(false);
        navigate("/forum");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center p-8">
        <div className="w-[400px] bg-white border border-gray-300 shadow-2xl rounded-lg h-fit p-4">
          <div className="border-gray-300 px-4 py-4">
            <div className="text-2xl font-semibold mb-6">
              Sign in{" "}
              <span className="text-gray-600 font-normal text-xl">
                to Unlock Best Features of{" "}
              </span>
              TravelBuddy
            </div>
            {loading ? <Spinner /> : ""}
            <div className="form">
              <label className="text-gray-800 text-sm font-semibold">
                Email
              </label>
              <input
                className="w-full border-2 border-gray-800 rounded-md px-4 py-3 mt-1 text-xs"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <label className="text-gray-800 text-sm font-semibold mt-4">
                Password
              </label>
              <input
                className="w-full border-2 border-gray-800 rounded-md px-4 py-3 mt-1 text-xs"
                type="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <div className="text-xs mt-1 cursor-pointer">
                Forgot Password?
              </div>
              <button
                className="w-full text-center bg-gray-900 cursor-pointer font-medium hover:bg-slate-600 text-white rounded-full px-4 py-3 mt-4 text-sm"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
            <div className=" text-center text-gray-500 my-4 text-xs">OR</div>
            <div className="w-full mt-4 text-center text-black font-medium px-4 py-3 border-gray-900 border-2 rounded-full items-center flex hover:bg-black hover:text-white cursor-pointer transition-all">
              <img
                src="/google.svg"
                alt=""
                className="mr-12 max-sm:mr-4 "
                height={20}
                width={20}
              />
              Continue with Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;