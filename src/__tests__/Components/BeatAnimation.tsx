import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import BeatAnimation from '../../Components/BeatAnimation';

describe('BeatAnimation', () => {
  const mockedProps = {
    selectedBPM: '72',
    handleOnClick: jest.fn(),
    visualActive: false,
  }

  test('render selected bpm value', () => {
    render(<BeatAnimation {...mockedProps} />);
    expect(screen.getByText(mockedProps.selectedBPM)).toBeVisible();
  })

  test('on click invokde the right function', () => {
    render(<BeatAnimation {...mockedProps} />);
    fireEvent.click(screen.getByText(mockedProps.selectedBPM));
    expect(mockedProps.handleOnClick).toHaveBeenCalled();
  })

})