function Repo({ repo = {} }) {
  return (
    <>
      <li key={repo.id}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <span>👀{repo.watchers}</span>
          </div>

          <a
            className="App-link"
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {repo.full_name}
          </a>

          <div>
            <span>⭐{repo.stargazers_count}</span>
          </div>
        </div>

        <p>{repo.description}</p>
      </li>

      <hr style={{ borderBottom: '1rem' }} />
    </>
  );
}

export default Repo;
