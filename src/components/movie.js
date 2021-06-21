import React from "react";
import PropTypes from "prop-types"
import "./movie.css"

function Movie({ id, year, title, summary, poster, genres }) {
    return ( //class 속성은 react의 class와 충돌하므로 className 속성을 사용 ex) for="" => htmlFor=""
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres_genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie_summary">{summary.slice(0,240)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;