export function mapTrackstoHome(data: any) {
  return data
    ? data?.tracks?.map((track: any) => {
        return {
          id: track.id,
          cover_art: track.coverArt,
          is_available: track.isAvailable,
          slug: track.slug,
        };
      })
    : [];
}

export function mapTracks(data: any) {
  return data
    ? data?.images?.map((track: any) => {
        return {
          id: track.id,
          cover_art: track.attributes.cover_art.data.attributes.url,
          title: track.attributes.track_name,
          label: track.attributes.label,
          is_available: track.attributes.is_available_to_listners,
          slug: track.attributes.slug,
        };
      })
    : [];
}

export function trackMapper(track: any) {
  return {
    id: track.id,
    name: track.attributes.track_name,
    description: track.attributes.description,
    tone: track.attributes.tone,
    bpm: track.attributes.bpm,
    download_link: track.attributes.sale_link,
    soundcloud: track.attributes.soundcloud,
    youtube: track.attributes.youtube,
    spotify: track.attributes.spotify,
    audio_file: track.attributes.audio_file.data.attributes.url,
    cover_art: track.attributes.cover_art.data.attributes.url,
    title: track.attributes.track_name,
    label: track.attributes.label,
    is_available: track.attributes.is_available_to_listners,
    artists: track.attributes.artists,
  };
}

export function mapImages(data: any) {
  return data.map((image: any) => {
    return {
      original: image.attributes.image.data.attributes.url,
      thumbnail: image.attributes.image.data.attributes.url,
    };
  });
}

export function mapDownload(download: any) {
  return {
    id: download.id,
    slug: download.attributes.slug,
    title: download.attributes.title,
    subtitle: download.attributes.subtitle,
    image: download.attributes.image.data.attributes.url,
    download_link: download.attributes.download_link,
    description: download.attributes.description,
  };
}
