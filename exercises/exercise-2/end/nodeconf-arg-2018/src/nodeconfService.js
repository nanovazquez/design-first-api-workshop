import { DefaultApi } from "nodeconf-api";

function getSpeakers() {
  const api = new DefaultApi();
  // The following line returns a Promise that either
  // resolves the response body, or rejects it with the entire
  // response object (i.e. when the status code is not 2xx).
  return api.editionsEditionIdSpeakersGet("2018-ar");
}

export default {
  getSpeakers
};
