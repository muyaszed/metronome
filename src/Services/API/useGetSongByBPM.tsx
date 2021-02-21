import React, { useState } from "react";

export interface SongInfo {
  name: string;
  artist: string;
  bpm: number;
  albumCover: string;
}



export const useGetSongsByBPM = () => {
  const [songsAreLoading, setSongsAreLoading] = React.useState(false);
  const [songBPM, setSongBPM] = useState('');
  const [songError, setGetError] = React.useState(null);
  const [songDatas, setSongDatas] = React.useState<SongInfo[]>([]);
  const firstUpdate = React.useRef(true);

  const get = async () => {
    setSongsAreLoading(true);
    const apiUrl = `https://api.happi.dev/v1/music/bpm/playlist/${songBPM}?apikey=259fe53w6IUSlocEaNibglwg0mApPNBtKKNfOCKAWYkyogLU578oLgpf`

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      const compiledData = data.tracks.map((song: {[key: string]: unknown}) => ({
        name: song.track,
        artist: song.artist,
        bpm: song.bmp,
        albumCover: song.cover,
      }))

      const topTenData = compiledData.slice(0, 10);
      setSongDatas(topTenData);
    } catch(error) {
      setGetError(error)
    } finally {
      setSongsAreLoading(false);
    }
  };

  React.useEffect(() => {
    if (!firstUpdate.current) {
      get();

    }
    firstUpdate.current = false;

  }, [songBPM]);

  return [songsAreLoading, setSongBPM, songError, songDatas] as const;
}
