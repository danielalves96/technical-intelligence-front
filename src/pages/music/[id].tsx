import MusicDetails from '@/components/MusicDetails';
import { trackMapper } from '@/mappers';
import API from '@/services/api';
import React from 'react';

export default function Music({ track }: any) {
  return (
    <>
      <MusicDetails track={track} />
    </>
  );
}

export async function getStaticProps(context: any) {
  const track = await API.get(`tracks/${context.params.id}?populate=*`).then(
    (response) => {
      const { data } = response.data;
      return trackMapper(data);
    },
  );
  return {
    props: { track },
  };
}

export async function getStaticPaths() {
  const musicPaths = await API.get(`tracks`).then((response) => {
    const { data } = response.data;
    return data.map((track: any) => {
      return {
        params: {
          id: `${track.id}`,
        },
      };
    });
  });

  return {
    paths: musicPaths,
    fallback: false,
  };
}
