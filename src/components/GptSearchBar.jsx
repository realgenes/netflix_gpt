import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang); 

  return (
    <div className="pt-28 ">
       
      <form action="" className="  bg-black grid grid-cols-12 w-1/2 mx-auto">
        <input
          type="text"
          className="p-4 my-1 ml-1 bg-white col-span-9 "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        <button
          type="submit"
          className="py-2 my-1 mr-1 px-4 bg-red-600 text-white  col-span-3"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
