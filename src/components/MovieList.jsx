import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";
import "../styles/MovieUI.css";

const MovieList = () => {
  const { movieList } = useContext(MovieContext);
  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <h1>🎬 My Movie Collection</h1>

      {movieList.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <div className="movie-title"
            onClick={() => navigate(`/movie/${movie.id}`)}
                  style={{ cursor: "pointer" }}
          >{movie.title}</div>
          <div className="stars">
            {"⭐".repeat(movie.rating)}
          </div>
        </div>
      ))}

      <button
        className="modern-btn"
        onClick={() => navigate("/add-movie")}
      >
        ➕ Add Movie
      </button>
    </div>
  );
};

export default MovieList;