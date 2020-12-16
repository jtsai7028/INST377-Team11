import request from "request";

//PLEASE DON'T TOUCH THESE
const client_id = '8539f670cb3a43aebf0bc4192693a19e'; // Your client id
const client_secret = '38c8101bcdd947058b7a1d296bdc64da'; // Your secret
const redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  method: 'POST', //request authorization
  content_type: 'application/x-www-form-urlencoded',
  headers: {
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

//copy from https://github.com/spotify/web-api-auth-examples/blob/master/client_credentials/app.js
function reqAOT() {
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {

      // use the access token to access the Spotify Web API
      let token = body.access_token;
      console.log(token);
      let options = {
        url: 'https://api.spotify.com/v1/users/ageless_enemy',
        content_type: 'application/x-www-form-urlencoded',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        // console.log(body);
      });
      return token;
    }
  });
  return "token error";
}

export function getTok() {
  return reqAOT();
}
