import MovieCard from '../../components/MovieCard';

function MovieIndex({ movies }) {
    return (
        <div>
            <h1>Movie Index</h1>
            {movies.map((ele, idx) => <MovieCard movie={ele} key={idx} />)}
        </div>
    )
}

export default MovieIndex;