import './App.css';
import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import ActorIndex from '../ActorIndex/ActorIndex';
import MovieIndex from '../MovieIndex/MovieIndex';
import NavBar from '../../components/NavBar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} />
          <Route path="/actors">
            <ActorIndex />
          </Route>
          <Route path="/movies">
            <MovieIndex />
          </Route>
          <Redirect to="/movies" />
        </>
        : <Login setUser={setUser} user={user} />}
    </main>
  );
};

export default App;
