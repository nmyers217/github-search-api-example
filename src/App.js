import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import { searchRepos } from './api';

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      setRepos(await searchRepos());
    }
    fetchRepos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <pre>{repos && repos.length > 0 && JSON.stringify(repos[0])}</pre>
    </div>
  );
}

export default App;
