import { createContext, useContext, useState, useEffect } from "react";
import React from "react";

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesWithCache = async (endpoint) => {
    try {
      // Check cache first
      const cachedData = localStorage.getItem(endpoint);
      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        // Check if cache is still valid (within 24 hours)
        if (Date.now() - timestamp < CACHE_DURATION) {
          setMovies(data);
          return;
        }
      }

      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_TMDB_BASE_URL}${endpoint}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      // Store in cache with timestamp
      localStorage.setItem(
        endpoint,
        JSON.stringify({
          data: data.results,
          timestamp: Date.now(),
        })
      );

      setMovies(data.results);
    } catch (err) {
      setError(err.message);
      // If error occurs, try to use cached data even if expired
      const cachedData = localStorage.getItem(endpoint);
      if (cachedData) {
        const { data } = JSON.parse(cachedData);
        setMovies(data);
      }
    } finally {
      setLoading(false);
    }
  };

  const clearCache = () => {
    localStorage.clear();
    setMovies([]);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        loading,
        error,
        fetchMoviesWithCache,
        clearCache,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovies must be used within a MovieProvider");
  }
  return context;
};
