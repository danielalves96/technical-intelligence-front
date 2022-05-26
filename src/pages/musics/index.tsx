import MusicsGridDetailed from '@/components/MusicsGridDetailed';
import SectionTitle from '@/components/SectionTitle';
import { mapTracks } from '@/mappers';
import API from '@/services/api';
import { useTranslation } from 'react-i18next';

export default function Home({ tracks }: any) {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title={t(`pagesList.musics`)} />
      <MusicsGridDetailed tracks={tracks} />
    </>
  );
}

export async function getStaticProps() {
  const tracks = await API.get(`tracks?populate=*&sort[0]=id%3Adesc`).then(
    (response) => {
      const { data } = response.data;
      const tracks = mapTracks(data);
      return tracks;
    },
  );
  return {
    props: { tracks },
  };
}
