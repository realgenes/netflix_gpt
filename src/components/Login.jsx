import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import BackgroundImg from "../assets/background.jpg";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const handleButtonClick = () => {
    //validate form
    const message = checkValidData(email.current.value, password.current.value, username.current?.value);
    console.log(email);
    console.log(password);
    console.log(username);
    setErrorMessage(message);
  };

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
        onSubmit={(e) => e.preventDefault()}
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
              ref={username}
              placeholder="Username"
              className="p-2 m-2 mb-5 text-white  border-1 border-slate-300 rounded py-4 px-4  bg-gray-950/40"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email address"
            className="p-2 m-2 mb-5 text-white  border-1 border-slate-300 rounded py-4 px-4  bg-gray-950/40"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-2 m-2 py-4 px-4 mb-5  text-white   border border-slate-300 bg-gray-950/40 rounded"
          />
          <p className="text-red-600 text-center font-semibold  ">{errorMessage}</p>
          <button
            className="p-2 m-2 bg-[#E50914]  text-white  cursor-pointer "
            onClick={handleButtonClick}
          >
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
            {isSignUp
              ? "Already have an account? Sign In"
              : "New to Netflix? Sign Up Now"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
