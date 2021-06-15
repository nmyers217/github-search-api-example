function Repo({ repo = {} }) {
  return (
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
  );
}

export default Repo;
