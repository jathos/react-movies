import './MovieCard.css'

function MovieCard({ movie }) {
    return (
        <div className="MovieCard" style={{ backgroundImage: `url(${movie.poster_path})` }
        }>
            <h2 className="cardText">{movie.title}</h2>
            <p className="cardText">Released: {movie.release_date}</p>
        </div >
    );
};

export default MovieCard;