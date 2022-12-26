import type { NextApiRequest, NextApiResponse } from 'next';

import { useTracksQuery } from '@/generated/graphql';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  function GetTracks() {
    const [{ data }] = useTracksQuery();
    return data;
  }

  const tracks = await GetTracks();

  res.status(200).json({ tracks });
}
