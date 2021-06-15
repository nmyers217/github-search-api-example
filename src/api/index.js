const BASE_URL = 'https://api.github.com';

/**
 * Uses the github search api to search for repositories:
 * https://docs.github.com/en/rest/reference/search#search-repositories
 */
export function searchRepos() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',

      // This header guarantees us v3 of the api
      Accept: 'application/vnd.github.v3+json',
    },
  };

  return fetch(
    // TODO: populate the query string with user input
    `${BASE_URL}/search/repositories?q=tetris+language:assembly&sort=stars&order=desc`,
    options
  )
    .then((res) => res.json())
    .then((json) => {
      return json.items;
    })
    .catch((err) => console.error('error:' + err));
}
