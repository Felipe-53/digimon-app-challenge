// thrown when malformed request in sent
class BadRequestError extends Error {};
// failed to fetch due to network
class NetworkError extends Error {};

export {BadRequestError, NetworkError}