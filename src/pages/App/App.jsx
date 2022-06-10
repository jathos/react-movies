import './App.css';
import { useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import ActorIndex from '../ActorIndex/ActorIndex';
import MovieIndex from '../MovieIndex/MovieIndex';
import MovieDetail from '../MovieDetail/MovieDetail';
import NavBar from '../../components/NavBar';
import { movies } from './data';

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} />
          <Route path="/actors">
            <ActorIndex movies={movies} />
          </Route>
          <Route exact path="/movies/:id">
            <MovieDetail movies={movies} />
          </Route>
          <Route exact path="/movies">
            <MovieIndex movies={movies} />
          </Route>
          <Redirect to="/movies" />
        </>
        : <Login setUser={setUser} user={user} />}
    </main>
  );
};

export default App;
