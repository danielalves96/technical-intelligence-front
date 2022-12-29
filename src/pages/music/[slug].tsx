import MusicDetails from '@/components/MusicDetails';
import { GetSingleTrackDocument } from '@/generated/graphql';
import { trackMapper } from '@/mappers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'urql';

export default function Music() {
  const router = useRouter();
  const { slug } = router.query;

  const [track, setTrack] = useState<any>();

  const [result] = useQuery({
    query: GetSingleTrackDocument,
    variables: { slug },
  });

  useEffect(() => {
    const { data } = result;

    const trackData = data?.track;

    const trackDetails = trackMapper(trackData);

    setTrack(trackDetails);
  }, [result]);

  return track ? <MusicDetails track={track} /> : <></>;
}
