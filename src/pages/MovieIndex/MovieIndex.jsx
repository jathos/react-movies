import MovieCard from '../../components/MovieCard';
import './MovieIndex.css'

function MovieIndex({ movies }) {
    return (
        <>
            <h1>Movie Index</h1>
            <div className="indexWrapper">
                {movies.map((ele, idx) => <MovieCard movie={ele} key={idx} />)}
            </div>
        </>
    )
}

export default MovieIndex;