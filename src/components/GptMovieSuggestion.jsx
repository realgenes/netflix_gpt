import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;
  if (!movieResults || !movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black/60 text-white">
      {movieNames.map((movieName,index) => (
        <MovieList key="{movieNames}" title={movieNames[index]} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
