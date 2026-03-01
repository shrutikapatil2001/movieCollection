import { createContext, useState, useEffect } from "react";
import moviesData from "../data";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {

  const [movieList, setMovieList] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : moviesData;
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movieList));
  }, [movieList]);

  return (
    <MovieContext.Provider value={{ movieList, setMovieList }}>
      {children}
    </MovieContext.Provider>
  );
};