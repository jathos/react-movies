import { Link, useParams } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie, id }) {
    return (
        <>
            <Link to={`/movies/${id}`}>
                <div className="MovieCard" style={{ backgroundImage: `url(${movie.poster_path})` }
                }>
                    <h2 className="cardText">{movie.title}</h2>
                    <p className="cardText">Released: {movie.release_date}</p>
                </div >
            </Link>
        </>
    );
};

export default MovieCard;