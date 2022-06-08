import './App.css';
import { useState } from 'react';
import Login from '../Login/Login';
import ActorIndex from '../ActorIndex/ActorIndex';
import MovieIndex from '../MovieIndex/MovieIndex';

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? <MovieIndex /> : <Login setUser={setUser} user={user} />}
    </main>
  );
};

export default App;
