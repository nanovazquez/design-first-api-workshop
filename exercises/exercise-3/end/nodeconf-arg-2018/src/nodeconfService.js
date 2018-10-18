import { DefaultApi } from "nodeconf-api";

function getSpeakers() {
  const serverStubUrl = "http://localhost:8080/nodeconf18-api-spec/nodeconf-api/1.0.0";
  const api = new DefaultApi({ basePath: serverStubUrl });
  // The following line returns a Promise that either
  // resolves the response body, or rejects it with the entire
  // response object (i.e. when the status code is not 2xx).
  return api.editionsEditionIdSpeakersGet(2018);
}

export default {
  getSpeakers
};
