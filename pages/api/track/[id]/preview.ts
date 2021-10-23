import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { spotifyApi } from "utils/spotifyApiProvider";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") return res.status(405).end();

  const id = req.query.id as string;

  await spotifyApi.ensureHasToken();
  spotifyApi.getTrack(id, {}, async (error, result) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    const track_url = result.body.preview_url!;
    const stream = await axios.get(track_url, { responseType: "stream" });

    res.setHeader("Content-Type", "audio/mpeg");
    (stream.data as any).pipe(res);
  });
};

export default handler;
