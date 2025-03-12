import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice';
import configSlice from './configSlice';

const store = configureStore(
  {
    reducer: {
      user: userReducer,
      movies: moviesReducer,
      gpt: gptReducer,
      config: configSlice.reducer,
    },
  }
);

export default store;