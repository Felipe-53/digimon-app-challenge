const BASE_URL = 'https://digimon-api.vercel.app/api/digimon';

function buildUrl(filterBy, value) {
  if (!filterBy) {
    return BASE_URL;
  }
  return BASE_URL + '/' + filterBy + '/' + value;
}

export default buildUrl;