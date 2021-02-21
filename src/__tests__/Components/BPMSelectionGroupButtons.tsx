import React from 'react';
import { render, screen } from '@testing-library/react'
import BPMSelectionGroupButtons from '../../Components/BPMSelectionGroupButtons';

describe('BPMSelectionGroupButtons', () => {
  test('renders the correct amoutn of button', () => {
    const mockedProps = {
      buttons: [
        {
          title: '72 BPM',
          active: false
        }, 
        {
          title: '74 BPM',
          active: false
        }, 
      ],
      handleOnClick: jest.fn(),
    };

    render(<BPMSelectionGroupButtons {...mockedProps} />)
    expect(screen.getAllByRole('button').length).toBe(mockedProps.buttons.length)
  })
})