import { assert } from "console";
import SpotifyWebApi from "spotify-web-api-node";

assert(
  typeof process.env.SPOTIFY_CLIENT_ID === "string",
  "a spotify client must be provided."
);
assert(
  typeof process.env.SPOTIFY_CLIENT_SECRET === "string",
  "a spotify client secret must be provided."
);

class MySpotifyWebApi extends SpotifyWebApi {
  async ensureHasToken() {
    if (!spotifyApi.getAccessToken()) {
      const {
        body: { access_token },
      } = await spotifyApi.clientCredentialsGrant();

      spotifyApi.setAccessToken(access_token);
    }
  }
}

export const spotifyApi = new MySpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_CALLBACK_URL,
});
