import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../../../Components/shared/Button';

describe('Button', () => {
  const mockedProps = {
    title: '72 BPM',
    handleOnClick: jest.fn(),
    className: 'action-button',
    active: false,
    activeClassName: '',
  };

  test('render correct button text', () => {
    render(<Button {...mockedProps} />);
    expect(screen.getByText(mockedProps.title)).toBeVisible();
  })

  test('invoke the right function when clicked', () => {
    render(<Button {...mockedProps} />);
    fireEvent.click(screen.getByText(mockedProps.title));
    expect(mockedProps.handleOnClick).toHaveBeenCalled();
  })
})
