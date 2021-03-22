async function getEndpoint(url) {
  let res = await fetch(url);
  let json = await res.json();
  return json;
}

export {getEndpoint};