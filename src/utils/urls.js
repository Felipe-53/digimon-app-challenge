const urls = {
  base:  'https://digimon-api.vercel.app/api/digimon',
  name:  'https://digimon-api.vercel.app/api/digimon/',
  level: 'https://digimon-api.vercel.app/api/digimon/'
}

function buildUrl(filterBy, value) {
  console.log(filterBy, value);
  let baseUrl = urls[filterBy];
  if (!filterBy) {
    return baseUrl
  }
  return baseUrl + filterBy + '/' + value;
}

export default buildUrl