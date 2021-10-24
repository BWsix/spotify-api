import type { NextApiRequest, NextApiResponse } from "next";
import { requestBodyValidator } from "utils/search/validator";
import { spotifyApi } from "utils/spotifyApiProvider";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).end();

  const { query, types, options, error } = requestBodyValidator(req.body);
  if (error) return res.status(400).json(error);

  await spotifyApi.ensureHasToken();
  spotifyApi.search(query!, types, options, (error, result) => {
    if (error) return res.status(500).json({ error: error.message });

    return res.json(result.body);
  });
};

export default handler;
