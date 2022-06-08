import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/movies">Movies</Link>
            &nbsp; | &nbsp;
            <Link to="/actors">Actors</Link>
        </nav>
    );
};

export default NavBar;