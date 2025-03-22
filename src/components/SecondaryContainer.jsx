import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black h-screen">
      <div className="md:-mt-40 relative z-20">
        <div
          className="pl-4 md:pl-12 overflow-x-hidden"
          style={{ overflowX: "hidden" }}
        >
          {movies.nowPlayingMovies && (
            <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
          )}
          {movies.upcomingMovies && (
            <MovieList
              title={"Upcoming movies"}
              movies={movies.upcomingMovies}
            />
          )}
          {movies.popularMovies && (
            <MovieList title={"Popular movies"} movies={movies.popularMovies} />
          )}
          {movies.topRatedMovies && (
            <MovieList
              title={"Top rated movies"}
              movies={movies.topRatedMovies}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
