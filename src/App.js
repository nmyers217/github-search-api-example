import { useEffect, useState } from 'react';

import './App.css';
import { searchRepos } from './api';
import Repo from './Repo';

function App() {
  const [repos, setRepos] = useState([]);
  const [repoName, setRepoName] = useState('');
  const [language, setLanguage] = useState('');
  const [sort, setSort] = useState('stars');
  const [sortOrder, setSortOrder] = useState('desc');

  async function fetchRepos() {
    setRepos(await searchRepos(repoName, language, sort, sortOrder));
  }

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="App">
      <section className="App-container">
        {/* Search inputs form */}
        <fieldset style={{ marginTop: '1em', marginBottom: '1em' }}>
          <div>
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
          </div>

          <div>
            <span>sort: </span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="stars">Stars</option>
            </select>
            <input
              type="radio"
              name="order"
              id="descRadio"
              value="desc"
              checked={sortOrder === 'desc'}
              onChange={(e) => setSortOrder('desc')}
            />
            <label htmlFor="descRadio">Descending</label>
            <input
              type="radio"
              name="order"
              id="ascRadio"
              value="asc"
              checked={sortOrder === 'asc'}
              onChange={(e) => setSortOrder('asc')}
            />
            <label htmlFor="ascRadio">Ascending</label>
          </div>

          <button onClick={fetchRepos}>Search</button>
        </fieldset>

        {/* Repo list */}
        <div style={{ paddingRight: '50px' }}>
          <ul style={{ listStyle: 'none' }}>
            {(repos || []).map((repo) => (
              <Repo key={repo.id} repo={repo} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
