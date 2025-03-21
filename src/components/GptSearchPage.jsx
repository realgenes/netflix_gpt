import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import BackgroundImg from '../assets/background.jpg'

const GptSearch = () => {
  return (
    <div>
      <div className="fixed w-full h-screen -z-10">
        <img
          src={BackgroundImg}
          alt=""
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-screen bg-black/50"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
}

export default GptSearch