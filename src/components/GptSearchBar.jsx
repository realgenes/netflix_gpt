import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"; // Combined imports
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, setApiError } from "../utils/gptSlice";
// Import the GoogleGenerativeAI at the top level
import { GoogleGenerativeAI } from "@google/generative-ai";

// Get API key from environment variables
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY;

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  //call Gemini API
  const handleGptSearchClick = async () => {
    try {
      // Initialize Gemini API (moved require to import)
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      //make api call
      const prompt =
        "Act as a movie recommendation system and suggest some movies for the query " +
        searchText.current.value +
        ". Only give me names of 10 movies, comma separated like the example result given ahead. Example result: Gadar, Sholey, Don, Golmaal, Koi mil gya";

      const result = await model.generateContent(prompt);

      if (!result) {
        console.error("No result returned from Gemini API");
        dispatch(setApiError("No response from AI service"));
        return;
      }

      // Correctly await the text() method as it returns a Promise
      const responseText = await result.response.text();

      const gptMovies = responseText.split(",").map((movie) => movie.trim());

      //for each movie I will search TMDB api
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({ movieResults: tmdbResults, movieNames: gptMovies })
      );
    } catch (error) {
      console.error("Error in GPT search:", error);
      // Add more detailed error logging
      if (error.response) {
        console.error("Error response:", error.response);
      }
      dispatch(setApiError(error.message || "Failed to get recommendations"));
    }
  };

  return (
    <div className="pt-[8rem]  md:pt-24">
      <form
        className="bg-black grid grid-cols-12 w-[80%] md:w-1/2  mx-auto my-10 md:my-28 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 md:p-4 my-1 ml-1 bg-white col-span-8 md:col-span-9 "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        <button
          type="submit"
          className="py-2 my-1 mr-1 px-2 md:px-4 bg-red-600 text-white col-span-4 md:col-span-3 min-w-0 md:min-w-20  text-sm md:text-base"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
