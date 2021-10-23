import type { NextApiRequest, NextApiResponse } from "next";
import { requestBodyValidator } from "utils/search/validator";
import { spotifyApi } from "utils/spotifyApiProvider";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).end();

  const { query, types, options, error } = requestBodyValidator(req.body);
  if (error) return res.status(400).json(error);

  try {
    await spotifyApi.ensureHasToken();
    const result = await spotifyApi.search(query!, types, options);
    return res.json(result.body);
  } catch (e) {
    return res.status(500).json({ error: "error." });
  }
};

export default handler;
