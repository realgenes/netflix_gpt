import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // Guard against undefined or empty movies array
  if (!movies || movies.length === 0) {
    return <div>Loading movies...</div>;
  }

  return (
    <div className="w-full px-4 md:px-6 bg-black">
      <h1 className="text-1xl md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-4">
          {movies.map(
            (movie) =>
              // Only render if movie and poster_path exist
              movie?.poster_path && (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
