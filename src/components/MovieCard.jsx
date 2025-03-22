import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-25 transform transition-transform duration-300 hover:scale-110 sm:w-40 md:w-48">
      <img src={IMG_CDN_URL + posterPath} alt="movie card" />
    </div>
  );
};

export default MovieCard;
