import DownloadsGrid from '@/components/DownloadsGrid';
import SectionTitle from '@/components/SectionTitle';
import { mapDownloads } from '@/mappers';
import API from '@/services/api';
import { useTranslation } from 'react-i18next';

export default function Downloads({ downloads }: any) {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title={t(`pagesList.downloads`)} />
      <DownloadsGrid downloads={downloads} />
    </>
  );
}

export async function getStaticProps() {
  const downloads = await API.get(`downloads?populate=*`).then((response) => {
    const { data } = response.data;
    const downloads = mapDownloads(data);
    return downloads;
  });
  return {
    props: { downloads },
  };
}
