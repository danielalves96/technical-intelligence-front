import MusicsGridDetailed from '@/components/MusicsGridDetailed';
import SectionTitle from '@/components/SectionTitle';
import { useTracksQuery } from '@/generated/graphql';
import { mapTracks } from '@/mappers';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  const [{ data }] = useTracksQuery();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const tracks = mapTracks(data);
    setTracks(tracks);
  }, [data]);

  return (
    <>
      <SectionTitle title={t(`pagesList.musics`)} />
      <MusicsGridDetailed tracks={tracks} />
    </>
  );
}
