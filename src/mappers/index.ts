export function mapTrackstoHome(data: any) {
  return data.map((track: any) => {
    return {
      id: track.id,
      cover_art: track.attributes.cover_art.data.attributes.url,
      is_available: track.attributes.is_available_to_listners,
      slug: track.attributes.slug,
    };
  });
}

export function mapTracks(data: any) {
  return data.map((track: any) => {
    return {
      id: track.id,
      cover_art: track.attributes.cover_art.data.attributes.url,
      title: track.attributes.track_name,
      label: track.attributes.label,
      is_available: track.attributes.is_available_to_listners,
      slug: track.attributes.slug,
    };
  });
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
