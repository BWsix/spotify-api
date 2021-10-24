import type { NextApiRequest, NextApiResponse } from "next";
import { spotifyApi } from "utils/spotifyApiProvider";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") return res.status(405).end();

  const query = req.query.query as string;

  await spotifyApi.ensureHasToken();
  spotifyApi.search(
    query,
    ["album", "artist", "episode", "playlist", "show", "track"],
    {},
    (error, result) => {
      if (error) return res.status(500).json({ error: error.message });

      return res.json(result.body);
    }
  );
};

export default handler;
