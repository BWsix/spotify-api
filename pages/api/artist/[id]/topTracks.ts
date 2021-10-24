import type { NextApiRequest, NextApiResponse } from "next";
import { spotifyApi } from "utils/spotifyApiProvider";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).end();

  const id = req.query.id as string;
  const country = req.body.country as string;

  await spotifyApi.ensureHasToken();
  spotifyApi.getArtistTopTracks(id, country, (error, result) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.json(result.body);
  });
};

export default handler;
