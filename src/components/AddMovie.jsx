import { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const { movieList, setMovieList } = useContext(MovieContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      title,
      rating: Number(rating),
      description,
    };

    setMovieList([...movieList, newMovie]);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="container2">
        <h2 className="h2">
          Add New Movie
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="t">Title</label>
            <input
              type="text"
              className="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="r">Rating</label>
            <input
              type="number"
              min="1"
              max="5"
              className="title"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="d">Description</label>
            <textarea
              className="title"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <button className="addmovie">
            Add Movie
          </button>
          <button
            type="button"
            className="back"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;