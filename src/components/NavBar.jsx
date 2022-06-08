import { Link } from 'react-router-dom';

function NavBar({ user }) {
    return (
        <nav>
            <p>Welcome {user}</p>
            <Link to="/movies">Movies</Link>
            &nbsp; | &nbsp;
            <Link to="/actors">Actors</Link>
        </nav>
    );
};

export default NavBar;