const API_KEY = "AIzaSyDv4mtYzPTxevqmvSB1f9-2ZGfwx7uBV_g";
const CLIENT_ID = "81870856510-edbij8odphv3ocgva5fspmli9lfhlr3o.apps.googleusercontent.com"; // https://console.developers.google.com/apis/credentials?project=spry-gateway-260210
const APIS_GOOGLE_URL = 'https://apis.google.com/js/api.js';

let gapi;

const authenticate = () => gapi.auth2.getAuthInstance()
  .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
  .then(() => console.log("Sign-in successful"), err => console.error("Error signing in", err));

const loadClient = () => {
  gapi.client.setApiKey(API_KEY);
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(() => console.log("GAPI client loaded for API"), err => console.error("Error loading GAPI client for API", err));
};

// Make sure the client is loaded and sign-in is complete before calling this method.
export const getVideolist = ({ q } = {}) => {
  return gapi.client.youtube.search.list({ part: 'id, snippet', q }).then(
      (response) => {
        // Handle the results here (response.result has the parsed body).
        return response.result;
      },
      (err) => {
        console.error("Execute error", err);
        return Promise.reject(err.result);
      }
    );
};

export const authorizeToGapi = () => new Promise((resolve) => {
  gapi.load("client:auth2", () => {
    gapi.auth2.init({ client_id: CLIENT_ID });
    
    return authenticate()
      .then(resolve)
      .then(loadClient); //.then(execute));
  });
});

export const loadGapi = () => new Promise((resolve, reject) => {
  const script = document.createElement('script');
  script.src = APIS_GOOGLE_URL;

  document.head.appendChild(script);

  script.onload = () => {
    gapi = window.gapi;
    resolve();
  };
  script.onerror = reject;
}); 
