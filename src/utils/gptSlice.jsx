import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieResults: null,
    movieNames: null,
    movieResults: null
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovieResults = action.payload;
    }
  }
})


export const { toggleGptSearch,addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;