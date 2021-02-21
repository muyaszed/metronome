import React from 'react';
import { render, screen } from '@testing-library/react'
import BPMSelectionGroupButtons from '../../Components/BPMSelectionGroupButtons';

describe('BPMSelectionGroupButtons', () => {
  test('renders the correct amoutn of button', () => {
    const mockedProps = {
      buttonTitles: ['72 BPM', '78 BPM'],
      handleOnClick: jest.fn(),
    };

    render(<BPMSelectionGroupButtons {...mockedProps} />)
    expect(screen.getAllByRole('button').length).toBe(mockedProps.buttonTitles.length)
  })
})