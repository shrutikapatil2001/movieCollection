import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import "../App.css";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movieList } = useContext(MovieContext);

  const movie = movieList.find((m) => m.id === Number(id));

  return (
    <div className="cont">
      <div className="a">
        <h2 className="title">
          {movie.title}
        </h2>

        <h3 className="des">
          {movie.description}
        </h3>

        <div className="rating">
          {"⭐".repeat(movie.rating)}
          {"☆".repeat(5 - movie.rating)}
        </div>
      </div>

      <button
        className="back"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default MovieDetails;