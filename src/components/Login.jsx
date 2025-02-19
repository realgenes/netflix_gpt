import React, { useState } from "react";
import Header from "./Header";
import BackgroundImg from "../assets/background.jpg";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full h-screen ">
        <img
          src={BackgroundImg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-screen bg-black/50"></div>
      </div>

      <form
        action=""
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70  min-w-[400px] p-4  min-h-[500px] flex  flex-col rounded-md"
      >
        <h1 className="text-white font-semibold text-3xl text-left m-2 mb-8">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>

        <div className="flex flex-col">
          {isSignUp && (
            <input
              type="text"
              placeholder="Username"
              className="p-2 m-2 mb-5 text-white  border-1 border-slate-300 rounded py-4 px-4  bg-gray-950/40"
            />
          )}
          <input
            type="text"
            placeholder="Email address"
            className="p-2 m-2 mb-5 text-white  border-1 border-slate-300 rounded py-4 px-4  bg-gray-950/40"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-2 py-4 px-4 mb-5  text-white   border border-slate-300 bg-gray-950/40 rounded"
          />
          <button className="p-2 m-2 bg-[#E50914]  text-white   ">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>

          {!isSignUp && (
            <>
              {" "}
              <div className="text-white text-center text-xl">OR</div>
              <div className="text-white text-center bg-white/20 p-2 px-4 m-2">
                Use a sign-in-code
              </div>
            </>
          )}

          <p className="text-white p-2 cursor-pointer" onClick={toggleSignUp}>
            {isSignUp ? "Already have an account? Sign In" : "New to Netflix? Sign Up Now"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
