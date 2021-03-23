async function consumeEndpoint(url) {
  let res = await fetch(url);
  let json = await res.json();
  if (!Array.isArray(json)) {
    if (json["ErrorMsg"]) {
      return "error"
    }
    json = [json];
  }
  return json;
}

export default consumeEndpoint;