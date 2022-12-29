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
    ? data?.tracks?.map((track: any) => {
        return {
          id: track.id,
          cover_art: track.coverArt,
          title: track.title,
          label: track.label,
          is_available: track.isAvailable,
          slug: track.slug,
        };
      })
    : [];
}

export function trackMapper(track: any) {
  if (track)
    return {
      id: track.id,
      name: track.title,
      description: track.description,
      tone: track.tone,
      bpm: track.bpm,
      download_link: track.downloadLink,
      soundcloud: track.soundcloud,
      youtube: track.youtube,
      spotify: track.spotify,
      audio_file: track.audioFile,
      cover_art: track.coverArt,
      title: track.title,
      label: track.label,
      is_available: track.isAvailable,
      artists: track.artists,
    };
}

export function mapImages(data: any) {
  return data
    ? data?.images?.map((image: any) => {
        return {
          original: image.url,
          thumbnail: image.url,
        };
      })
    : [];
}
