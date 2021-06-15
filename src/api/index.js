const BASE_URL = 'https://api.github.com';

/**
 * Uses the github search api to search for repositories:
 * https://docs.github.com/en/rest/reference/search#search-repositories
 */
export function searchRepos(repoName, language) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',

      // This header guarantees us v3 of the api
      Accept: 'application/vnd.github.v3+json',
    },
  };

  return fetch(
    `${BASE_URL}/search/repositories?q=${repoName}+language:${language}&sort=stars&order=desc`,
    options
  )
    .then((res) => res.json())
    .then((json) => {
      return json.items;
    })
    .catch((err) => console.error('error:' + err));
}
