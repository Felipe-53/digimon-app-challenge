import {BadRequestError, NetworkError} from './errors';

async function consumeEndpoint(url) {
  let res;
  try {
    res = await fetch(url);
  } catch (e) {
    throw new NetworkError('Failed to fetch');
  }
  
  let json = await res.json();

  if (!Array.isArray(json)) {
    if (json["ErrorMsg"]) {
      throw new BadRequestError('Malformed request');
    }
    json = [json];
  }
  return json;
}

export default consumeEndpoint;