import React from 'react';
import { render, screen } from '@testing-library/react'
import SongList from '../../Components/SongList';

describe('SongList', () => {
  test('renders loading text when fetch is on progress', () => {
    const mockedProps = {
      selectedBPM: '72',
      songsAreLoading: true,
      songDatas: [],
    };

    render(<SongList {...mockedProps} />)
    expect(screen.getByText('Songs loading.....')).toBeVisible();
  });

  test('renders song list', () => {
    const mockedProps = {
      selectedBPM: '72',
      songsAreLoading: false,
      songDatas: [
        {
          name: 'Song 1',
          artist: 'Artist 1',
          bpm: 72,
          albumCover: 'Album 1',
        },
        {
          name: 'Song 2',
          artist: 'Artist 2',
          bpm: 72,
          albumCover: 'Album 2',
        },
        {
          name: 'Song 3',
          artist: 'Artist 3',
          bpm: 72,
          albumCover: 'Album 3',
        }
      ],   
    };

    render(<SongList {...mockedProps} />);
    expect(screen.getAllByTestId('song-list').length).toBe(mockedProps.songDatas.length);
  })

})