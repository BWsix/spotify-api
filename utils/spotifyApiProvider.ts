import { assert } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import SpotifyWebApi from "spotify-web-api-node";

assert(
  typeof process.env.SPOTIFY_CLIENT_ID === "string",
  "a spotify client must be provided."
);
assert(
  typeof process.env.SPOTIFY_CLIENT_SECRET === "string",
  "a spotify client secret must be provided."
);

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_CALLBACK_URL,
});

export const ensureHasToken = (apiRoute: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (!spotifyApi.getAccessToken()) {
      const {
        body: { access_token },
      } = await spotifyApi.clientCredentialsGrant();

      spotifyApi.setAccessToken(access_token);
    }

    return await apiRoute(req, res);
  };
};
