import DownloadDetails from '@/components/DownloadDetails';
import SectionTitle from '@/components/SectionTitle';
import { mapDownload } from '@/mappers';
import API from '@/services/api';
import React from 'react';

export default function Download({ download }: any) {
  return (
    <>
      <SectionTitle title={download.title} />
      <DownloadDetails download={download} />
    </>
  );
}

export async function getStaticProps(context: any) {
  const download = await API.get(
    `downloads?filters[slug]=${context.params.slug}&populate=*`,
  ).then((response) => {
    const { data } = response.data;
    return mapDownload(data.shift());
  });
  return {
    props: { download },
  };
}

export async function getStaticPaths() {
  const downloadPaths = await API.get(`downloads`).then((response) => {
    const { data } = response.data;
    return data.map((track: any) => {
      return {
        params: {
          slug: `${track.attributes.slug}`,
        },
      };
    });
  });

  return {
    paths: downloadPaths,
    fallback: false,
  };
}
