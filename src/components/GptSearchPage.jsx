import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import BackgroundImg from "../assets/background.jpg";

const GptSearch = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="fixed inset-0 -z-10">
        <img
          src={BackgroundImg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
