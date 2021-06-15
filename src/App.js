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
        <fieldset style={{ marginTop: '1em', marginBottom: '1em' }}>
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

        <div style={{ paddingRight: '50px' }}>
          <ul style={{ listStyle: 'none' }}>
            {repos.map((repo) => (
              <>
                <li key={repo.id}>
                  <a
                    className="App-link"
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {repo.full_name}
                  </a>
                  <p>{repo.description}</p>
                </li>
                <hr />
              </>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
