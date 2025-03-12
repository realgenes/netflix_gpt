import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieResults: null,
    movieNames: null,
    movieResults: null,
    apiError: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovieResults = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    setApiError: (state, action) => {
      state.apiError = action.payload;
    },
  },
});

export const { toggleGptSearch, addGptMovieResult, setApiError } =
  gptSlice.actions;
export default gptSlice.reducer;
