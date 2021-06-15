const BASE_URL = 'https://api.github.com';

/**
 * Uses the github search api to search for repositories:
 * https://docs.github.com/en/rest/reference/search#search-repositories
 */
export function searchRepos(
  repoName = '',
  language = '',
  sort = 'stars',
  sortOrder = 'desc'
) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',

      // This header guarantees us v3 of the api
      Accept: 'application/vnd.github.v3+json',
    },
  };

  // TODO: there are valid responses around timeouts that I should probably handle
  // https://docs.github.com/en/rest/reference/search#timeouts-and-incomplete-results
  return fetch(
    `${BASE_URL}/search/repositories?q=${repoName}+language:${language}&sort=${sort}&order=${sortOrder}`,
    options
  )
    .then((res) => res.json())
    .then((json) => {
      return json.items;
    })
    .catch((err) => console.error('error:' + err));
}
