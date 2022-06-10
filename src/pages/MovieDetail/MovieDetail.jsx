import { useParams } from 'react-router-dom';
import ActorCard from '../../components/ActorCard';

function MovieDetail({ movies }) {
    const { id } = useParams();

    return (
        <div>
            <h1>{movies[id].title}</h1>
            <h3>Release Date: {movies[id].release_date}</h3>
            <h3>Poster:</h3>
            <img src={movies[id].poster_path} />
            <h3>Cast:</h3>
            <ul>
                {movies[id].cast.map((ele, idx) => <ActorCard actor={ele} key={idx} />)}
            </ul>
        </div>
    );
};

export default MovieDetail;