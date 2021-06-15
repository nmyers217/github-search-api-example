import { useState } from 'react';

import './App.css';
import { searchRepos } from './api';

function App() {
  const [repos, setRepos] = useState([]);
  const [repoName, setRepoName] = useState('');
  const [language, setLanguage] = useState('');

  async function fetchRepos() {
    setRepos(await searchRepos(repoName, language));
  }

  return (
    <div className="App">
      <header className="App-header">
        <fieldset>
          <input
            type="text"
            placeholder="Repository Name"
            value={repoName}
            onChange={(e) => setRepoName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Programming Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <button onClick={fetchRepos}>Search</button>
        </fieldset>

        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank">
                {repo.full_name}
              </a>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
