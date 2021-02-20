import React from 'react';
import { render, screen } from '@testing-library/react'
import BeatAnimation from '../../Components/BeatAnimation';

describe('BeatAnimation', () => {
  test('render selected bpm value', () => {
    const mockedProps = {
      selectedBPM: '72',
    }
    render(<BeatAnimation {...mockedProps} />);

    expect(screen.getByText(mockedProps.selectedBPM)).toBeVisible();
  })
})