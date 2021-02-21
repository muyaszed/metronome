import React from 'react'
import { SongInfo } from '../Services/API/useGetSongByBPM';

interface Props {
  selectedBPM: string;
  songsAreLoading: boolean;
  songDatas: SongInfo[];
}

const SongList = ({ selectedBPM, songsAreLoading, songDatas }: Props) => {
  return (
    <div className="song-description">
      {selectedBPM ? <div className="song-description-header">
        Songs that use this BPM:
      </div> : null}
      <div className="song-description-songs-list">
        {
          songsAreLoading ?
            (
              <div className="songs-loading">Songs loading.....</div>
            ) :
            songDatas.map((song: SongInfo, index: number) => {
              return (
                <div className="song-list-item" key={index}>
                  <div className="song-name">{`${song.name} (${song.artist})`}</div>
                  <div className="song-album-cover"><img src={song.albumCover} alt="artis album cover"/></div>
                </div>
              );
            })
        }
      </div>  
    </div>
  )
};

export default SongList;